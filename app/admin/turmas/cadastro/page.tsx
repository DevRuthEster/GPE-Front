"use client"

import type React from "react"

import { useState } from "react"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function CadastroTurmasPage() {
  const [formData, setFormData] = useState({
    codigo: "",
    quantidadeVagas: "",
    professor: "",
    dataAbertura: "",
    nivel: "",
    dataInicio: "",
    dataConclusao: "",
    diasSemana: [] as string[],
  })

  const professores = [
    { id: "1", nome: "Prof. João Silva" },
    { id: "2", nome: "Prof. Maria Santos" },
    { id: "3", nome: "Prof. Pedro Costa" },
  ]

  const niveis = [
    { id: "iniciante", nome: "Iniciante" },
    { id: "intermediario", nome: "Intermediário" },
    { id: "avancado", nome: "Avançado" },
  ]

  const diasSemana = [
    { id: "segunda", nome: "SEGUNDA-FEIRA" },
    { id: "terca", nome: "TERÇA-FEIRA" },
    { id: "quarta", nome: "QUARTA-FEIRA" },
    { id: "quinta", nome: "QUINTA-FEIRA" },
    { id: "sexta", nome: "SEXTA-FEIRA" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Dados da turma:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleDiaChange = (dia: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        diasSemana: [...formData.diasSemana, dia],
      })
    } else {
      setFormData({
        ...formData,
        diasSemana: formData.diasSemana.filter((d) => d !== dia),
      })
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
                    TURMA
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="codigo" className="text-sm font-medium text-gray-700 mb-2 block">
                          CÓDIGO
                        </Label>
                        <Input
                          id="codigo"
                          placeholder="0000000"
                          value={formData.codigo}
                          onChange={(e) => handleChange("codigo", e.target.value)}
                          className="h-12 text-gray-600"
                        />
                      </div>

                      <div>
                        <Label htmlFor="professor" className="text-sm font-medium text-gray-700 mb-2 block">
                          PROFESSOR
                        </Label>
                        <Select value={formData.professor} onValueChange={(value) => handleChange("professor", value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Selecionar um professor" />
                          </SelectTrigger>
                          <SelectContent>
                            {professores.map((professor) => (
                              <SelectItem key={professor.id} value={professor.id}>
                                {professor.nome}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="nivel" className="text-sm font-medium text-gray-700 mb-2 block">
                          NÍVEL
                        </Label>
                        <Select value={formData.nivel} onValueChange={(value) => handleChange("nivel", value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            {niveis.map((nivel) => (
                              <SelectItem key={nivel.id} value={nivel.id}>
                                {nivel.nome}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="dataConclusao" className="text-sm font-medium text-gray-700 mb-2 block">
                          DATA DE CONCLUSÃO
                        </Label>
                        <Input
                          id="dataConclusao"
                          type="date"
                          placeholder="dd/mm/aaaa"
                          value={formData.dataConclusao}
                          onChange={(e) => handleChange("dataConclusao", e.target.value)}
                          className="h-12 text-gray-600"
                        />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="quantidadeVagas" className="text-sm font-medium text-gray-700 mb-2 block">
                          QUANTIDADE DE VAGAS
                        </Label>
                        <Input
                          id="quantidadeVagas"
                          placeholder="00"
                          value={formData.quantidadeVagas}
                          onChange={(e) => handleChange("quantidadeVagas", e.target.value)}
                          className="h-12 text-gray-600"
                        />
                      </div>

                      <div>
                        <Label htmlFor="dataAbertura" className="text-sm font-medium text-gray-700 mb-2 block">
                          DATA DE ABERTURA
                        </Label>
                        <Input
                          id="dataAbertura"
                          type="date"
                          placeholder="dd/mm/aaaa"
                          value={formData.dataAbertura}
                          onChange={(e) => handleChange("dataAbertura", e.target.value)}
                          className="h-12 text-gray-600"
                        />
                      </div>

                      <div>
                        <Label htmlFor="dataInicio" className="text-sm font-medium text-gray-700 mb-2 block">
                          DATA DE INÍCIO
                        </Label>
                        <Input
                          id="dataInicio"
                          type="date"
                          placeholder="dd/mm/aaaa"
                          value={formData.dataInicio}
                          onChange={(e) => handleChange("dataInicio", e.target.value)}
                          className="h-12 text-gray-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dias da Semana */}
                  <div className="mt-8">
                    <Label className="text-sm font-medium text-gray-700 mb-4 block">DIAS DA SEMANA</Label>
                    <div className="flex flex-wrap gap-6">
                      {diasSemana.map((dia) => (
                        <div key={dia.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={dia.id}
                            checked={formData.diasSemana.includes(dia.id)}
                            onCheckedChange={(checked) => handleDiaChange(dia.id, checked as boolean)}
                          />
                          <Label htmlFor={dia.id} className="text-sm text-gray-700">
                            {dia.nome}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end mt-8">
                    <Button
                      type="submit"
                      className="bg-verde-bandeira hover:bg-verde-bandeira-dark text-white px-8 py-3 text-sm font-medium"
                    >
                      CADASTRAR
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
