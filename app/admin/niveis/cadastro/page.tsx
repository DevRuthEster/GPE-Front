"use client"

import type React from "react"

import { useState } from "react"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function CadastroNiveisPage() {
  const [formData, setFormData] = useState({
    nome: "",
    codigo: "",
    descricao: "",
    ordem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Dados do nível:", formData)
    // Aqui você implementaria a lógica de salvamento no Supabase
  }

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    })
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
                    NÍVEL
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <Label htmlFor="nome" className="text-sm font-medium text-gray-700 mb-2 block">
                        NOME
                      </Label>
                      <Input
                        id="nome"
                        placeholder="digite o nome do nível"
                        value={formData.nome}
                        onChange={(e) => handleChange("nome", e.target.value)}
                        className="h-12 text-gray-600"
                        required
                      />
                    </div>

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
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="ordem" className="text-sm font-medium text-gray-700 mb-2 block">
                        ORDEM
                      </Label>
                      <Input
                        id="ordem"
                        type="number"
                        placeholder="1"
                        value={formData.ordem}
                        onChange={(e) => handleChange("ordem", e.target.value)}
                        className="h-12 text-gray-600"
                        required
                      />
                    </div>

                    <div className="col-span-2">
                      <Label htmlFor="descricao" className="text-sm font-medium text-gray-700 mb-2 block">
                        DESCRIÇÃO
                      </Label>
                      <Textarea
                        id="descricao"
                        placeholder="digite a descrição do nível"
                        value={formData.descricao}
                        onChange={(e) => handleChange("descricao", e.target.value)}
                        className="text-gray-600"
                        rows={4}
                      />
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
