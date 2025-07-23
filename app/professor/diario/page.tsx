"use client"

import type React from "react"

import { useState } from "react"
import { ProfessorHeader } from "@/components/professor-header"
import { ProfessorSidebar } from "@/components/professor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function DiarioFrequenciaPage() {
  const [selectedTurma, setSelectedTurma] = useState("")
  const [data, setData] = useState("")
  const [presencas, setPresencas] = useState<{ [key: string]: boolean }>({})

  const turmas = [
    { id: "1", nome: "Futebol - Iniciante A" },
    { id: "2", nome: "Natação - Intermediário" },
    { id: "3", nome: "Basquete - Avançado" },
  ]

  const alunos = [
    { id: "1", nome: "João Silva" },
    { id: "2", nome: "Maria Santos" },
    { id: "3", nome: "Pedro Oliveira" },
    { id: "4", nome: "Ana Costa" },
    { id: "5", nome: "Carlos Ferreira" },
  ]

  const handlePresencaChange = (alunoId: string, presente: boolean) => {
    setPresencas((prev) => ({
      ...prev,
      [alunoId]: presente,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Frequência salva:", { turma: selectedTurma, data, presencas })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfessorHeader />

      <div className="flex">
        <ProfessorSidebar />

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold text-gray-800">Diário de Frequência de Aula</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="turma" className="text-sm font-medium text-gray-700 mb-2 block">
                      TURMA
                    </Label>
                    <Select value={selectedTurma} onValueChange={setSelectedTurma} required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecionar uma turma" />
                      </SelectTrigger>
                      <SelectContent>
                        {turmas.map((turma) => (
                          <SelectItem key={turma.id} value={turma.id}>
                            {turma.nome}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="data" className="text-sm font-medium text-gray-700 mb-2 block">
                      Data:
                    </Label>
                    <Input
                      id="data"
                      type="date"
                      value={data}
                      onChange={(e) => setData(e.target.value)}
                      className="h-12"
                      placeholder="dd/mm/aaaa"
                      required
                    />
                  </div>

                  {selectedTurma && (
                    <div className="border rounded-lg overflow-hidden">
                      <div className="grid grid-cols-2 bg-gray-100">
                        <div className="p-4 font-medium text-gray-700 border-r">Aluno</div>
                        <div className="p-4 font-medium text-gray-700">Presente</div>
                      </div>
                      {alunos.map((aluno) => (
                        <div key={aluno.id} className="grid grid-cols-2 border-t">
                          <div className="p-4 text-gray-800">{aluno.nome}</div>
                          <div className="p-4 flex justify-center">
                            <Checkbox
                              checked={presencas[aluno.id] || false}
                              onCheckedChange={(checked) => handlePresencaChange(aluno.id, checked as boolean)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className="bg-verde-bandeira hover:bg-verde-bandeira-dark text-white px-8 py-3"
                      disabled={!selectedTurma || !data}
                    >
                      Salvar Frequência
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
