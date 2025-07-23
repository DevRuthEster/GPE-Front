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
import { Upload } from "lucide-react"

export default function CadastroAlunosPage() {
  const [activeTab, setActiveTab] = useState("aluno")
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    rg: "",
    dataNascimento: "",
    genero: "",
    endereco: "",
    nomeResponsavel: "",
    contatoResponsavel: "",
    modalidade: "",
    telefone: "",
  })
  const [avatarUrl, setAvatarUrl] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Dados do aluno:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setAvatarUrl(url)
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
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab("aluno")}
                    className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === "aluno"
                        ? "border-verde-bandeira text-verde-bandeira bg-verde-bandeira-light"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    ALUNO
                  </button>
                  <button
                    onClick={() => setActiveTab("professor")}
                    className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === "professor"
                        ? "border-verde-bandeira text-verde-bandeira bg-verde-bandeira-light"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    PROFESSOR
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="flex gap-8">
                    {/* Avatar Section */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <Avatar className="w-32 h-32 border-4 border-gray-200">
                          <AvatarImage src={avatarUrl || "/placeholder.svg"} alt="Avatar do aluno" />
                          <AvatarFallback className="bg-gray-100">
                            <Upload className="w-8 h-8 text-gray-400" />
                          </AvatarFallback>
                        </Avatar>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-6">
                      {/* Left Column */}
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="nome" className="text-sm font-medium text-gray-700 mb-2 block">
                            NOME
                          </Label>
                          <Input
                            id="nome"
                            placeholder="digite o nome completo"
                            value={formData.nome}
                            onChange={(e) => handleChange("nome", e.target.value)}
                            className="h-12 text-gray-600"
                          />
                        </div>

                        <div>
                          <Label htmlFor="rg" className="text-sm font-medium text-gray-700 mb-2 block">
                            RG
                          </Label>
                          <Input
                            id="rg"
                            placeholder="00000000000"
                            value={formData.rg}
                            onChange={(e) => handleChange("rg", e.target.value)}
                            className="h-12 text-gray-600"
                          />
                        </div>

                        <div>
                          <Label htmlFor="genero" className="text-sm font-medium text-gray-700 mb-2 block">
                            Gênero
                          </Label>
                          <Select value={formData.genero} onValueChange={(value) => handleChange("genero", value)}>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="masculino">Masculino</SelectItem>
                              <SelectItem value="feminino">Feminino</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="nomeResponsavel" className="text-sm font-medium text-gray-700 mb-2 block">
                            NOME RESPONSÁVEL
                          </Label>
                          <Input
                            id="nomeResponsavel"
                            placeholder="digite o nome do responsável"
                            value={formData.nomeResponsavel}
                            onChange={(e) => handleChange("nomeResponsavel", e.target.value)}
                            className="h-12 text-gray-600"
                          />
                        </div>

                        <div>
                          <Label htmlFor="modalidade" className="text-sm font-medium text-gray-700 mb-2 block">
                            MODALIDADE
                          </Label>
                          <Select
                            value={formData.modalidade}
                            onValueChange={(value) => handleChange("modalidade", value)}
                          >
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="futebol">Futebol</SelectItem>
                              <SelectItem value="natacao">Natação</SelectItem>
                              <SelectItem value="basquete">Basquete</SelectItem>
                              <SelectItem value="volei">Vôlei</SelectItem>
                              <SelectItem value="tenis">Tênis</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="cpf" className="text-sm font-medium text-gray-700 mb-2 block">
                            CPF
                          </Label>
                          <Input
                            id="cpf"
                            placeholder="000.000.000-00"
                            value={formData.cpf}
                            onChange={(e) => handleChange("cpf", e.target.value)}
                            className="h-12 text-gray-600"
                          />
                        </div>

                        <div>
                          <Label htmlFor="dataNascimento" className="text-sm font-medium text-gray-700 mb-2 block">
                            DATA DE NASCIMENTO
                          </Label>
                          <Input
                            id="dataNascimento"
                            type="date"
                            placeholder="DD/MM/AAAA"
                            value={formData.dataNascimento}
                            onChange={(e) => handleChange("dataNascimento", e.target.value)}
                            className="h-12 text-gray-600"
                          />
                        </div>

                        <div>
                          <Label htmlFor="endereco" className="text-sm font-medium text-gray-700 mb-2 block">
                            ENDEREÇO
                          </Label>
                          <Input
                            id="endereco"
                            placeholder="nome da rua, número, bairro"
                            value={formData.endereco}
                            onChange={(e) => handleChange("endereco", e.target.value)}
                            className="h-12 text-gray-600"
                          />
                        </div>

                        <div>
                          <Label htmlFor="contatoResponsavel" className="text-sm font-medium text-gray-700 mb-2 block">
                            CONTATO RESPONSÁVEL
                          </Label>
                          <Input
                            id="contatoResponsavel"
                            placeholder="(00)00000-0000"
                            value={formData.contatoResponsavel}
                            onChange={(e) => handleChange("contatoResponsavel", e.target.value)}
                            className="h-12 text-gray-600"
                          />
                        </div>

                        <div>
                          <Label htmlFor="telefone" className="text-sm font-medium text-gray-700 mb-2 block">
                            TELEFONE
                          </Label>
                          <Input
                            id="telefone"
                            placeholder="(00)00000-0000"
                            value={formData.telefone}
                            onChange={(e) => handleChange("telefone", e.target.value)}
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
