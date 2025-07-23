"use client"

import type React from "react"

import { useState } from "react"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MatriculaPage() {
  const [formData, setFormData] = useState({
    cpf: "",
    nome: "",
    turma: "",
    dataMatricula: "",
  })

  const alunos = [
    { id: "1", nome: "João Silva", cpf: "123.456.789-00" },
    { id: "2", nome: "Maria Santos", cpf: "987.654.321-00" },
    { id: "3", nome: "Pedro Costa", cpf: "456.789.123-00" },
  ]

  const turmas = [
    { id: "1", nome: "Futebol - Iniciante A" },
    { id: "2", nome: "Natação - Intermediário" },
    { id: "3", nome: "Basquete - Avançado" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Dados da matrícula:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    })

    // Auto-fill nome quando selecionar CPF
    if (field === "cpf") {
      const aluno = alunos.find((a) => a.id === value)
      if (aluno) {
        setFormData((prev) => ({
          ...prev,
          nome: aluno.nome,
        }))
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Tab */}
              <div className="border-b border-gray-200">
                <div className="flex">
                  <div className="px-6 py-4 font-medium text-sm border-b-2 border-verde-bandeira text-verde-bandeira bg-verde-bandeira-light">
                    MATRÍCULA
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="flex gap-8">
                    {/* Avatar Section */}
                    <div className="flex-shrink-0">
                      <Avatar className="w-32 h-32 border-4 border-gray-200">
                        <AvatarImage src="/placeholder.svg" alt="Avatar do aluno" />
                        <AvatarFallback className="bg-gray-100 text-gray-400">Foto</AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Form Fields */}
                    <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-6">
                      {/* Left Column */}
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="cpf" className="text-sm font-medium text-gray-700 mb-2 block">
                            CPF
                          </Label>
                          <Select value={formData.cpf} onValueChange={(value) => handleChange("cpf", value)}>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Selecionar um aluno" />
                            </SelectTrigger>
                            <SelectContent>
                              {alunos.map((aluno) => (
                                <SelectItem key={aluno.id} value={aluno.id}>
                                  {aluno.nome} - {aluno.cpf}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="turma" className="text-sm font-medium text-gray-700 mb-2 block">
                            TURMA
                          </Label>
                          <Select value={formData.turma} onValueChange={(value) => handleChange("turma", value)}>
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
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="nome" className="text-sm font-medium text-gray-700 mb-2 block">
                            NOME
                          </Label>
                          <Input
                            id="nome"
                            value={formData.nome}
                            onChange={(e) => handleChange("nome", e.target.value)}
                            className="h-12 text-gray-600"
                            readOnly
                          />
                        </div>

                        <div>
                          <Label htmlFor="dataMatricula" className="text-sm font-medium text-gray-700 mb-2 block">
                            DATA DE MATRÍCULA
                          </Label>
                          <Input
                            id="dataMatricula"
                            type="date"
                            placeholder="dd/mm/aaaa"
                            value={formData.dataMatricula}
                            onChange={(e) => handleChange("dataMatricula", e.target.value)}
                            className="h-12 text-gray-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end mt-8">
                    <Button
                      type="submit"
                      className="bg-verde-bandeira hover:bg-verde-bandeira-dark text-white px-8 py-3 text-sm font-medium"
                    >
                      MATRICULAR
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
