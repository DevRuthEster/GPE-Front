"use client"

import type React from "react"

import { useState } from "react"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CadastroModalidadesPage() {
  const [formData, setFormData] = useState({
    nome: "",
    codigo: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Dados da modalidade:", formData)
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
                    MODALIDADE
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
                        placeholder="digite o nome da modalidade"
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
