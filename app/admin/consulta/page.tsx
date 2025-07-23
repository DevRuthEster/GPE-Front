"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Users, Users2, GraduationCap, Trophy } from "lucide-react"

export default function ConsultaPage() {
  const [tipoConsulta, setTipoConsulta] = useState("")
  const [termoBusca, setTermoBusca] = useState("")
  const [resultados, setResultados] = useState<any[]>([])

  // Dados mockados para demonstração
  const dadosAlunos = [
    { id: 1, nome: "João Silva", cpf: "123.456.789-00", modalidade: "Futebol", status: "Ativo" },
    { id: 2, nome: "Maria Santos", cpf: "987.654.321-00", modalidade: "Natação", status: "Ativo" },
    { id: 3, nome: "Pedro Costa", cpf: "456.789.123-00", modalidade: "Basquete", status: "Inativo" },
  ]

  const dadosProfessores = [
    { id: 1, nome: "Prof. João Silva", cpf: "111.222.333-44", formacao: "Educação Física", status: "Ativo" },
    { id: 2, nome: "Prof. Maria Santos", cpf: "222.333.444-55", formacao: "Educação Física", status: "Ativo" },
  ]

  const dadosTurmas = [
    { id: 1, codigo: "FUT001", modalidade: "Futebol", professor: "Prof. João Silva", vagas: 20, nivel: "Iniciante" },
    {
      id: 2,
      codigo: "NAT001",
      modalidade: "Natação",
      professor: "Prof. Maria Santos",
      vagas: 15,
      nivel: "Intermediário",
    },
  ]

  const dadosModalidades = [
    { id: 1, nome: "Futebol", codigo: "FUT001", status: "Ativa" },
    { id: 2, nome: "Natação", codigo: "NAT001", status: "Ativa" },
    { id: 3, nome: "Basquete", codigo: "BAS001", status: "Inativa" },
  ]

  const handleBuscar = () => {
    let dados: any[] = []

    switch (tipoConsulta) {
      case "alunos":
        dados = dadosAlunos.filter(
          (item) => item.nome.toLowerCase().includes(termoBusca.toLowerCase()) || item.cpf.includes(termoBusca),
        )
        break
      case "professores":
        dados = dadosProfessores.filter(
          (item) => item.nome.toLowerCase().includes(termoBusca.toLowerCase()) || item.cpf.includes(termoBusca),
        )
        break
      case "turmas":
        dados = dadosTurmas.filter(
          (item) =>
            item.codigo.toLowerCase().includes(termoBusca.toLowerCase()) ||
            item.modalidade.toLowerCase().includes(termoBusca.toLowerCase()),
        )
        break
      case "modalidades":
        dados = dadosModalidades.filter(
          (item) =>
            item.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
            item.codigo.toLowerCase().includes(termoBusca.toLowerCase()),
        )
        break
    }

    setResultados(dados)
  }

  const renderResultados = () => {
    if (resultados.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          {tipoConsulta ? "Nenhum resultado encontrado" : "Selecione um tipo de consulta e faça uma busca"}
        </div>
      )
    }

    return (
      <div className="grid gap-4">
        {resultados.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              {tipoConsulta === "alunos" && (
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{item.nome}</h3>
                    <p className="text-gray-600">CPF: {item.cpf}</p>
                    <p className="text-gray-600">Modalidade: {item.modalidade}</p>
                  </div>
                  <Badge variant={item.status === "Ativo" ? "default" : "secondary"}>{item.status}</Badge>
                </div>
              )}

              {tipoConsulta === "professores" && (
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{item.nome}</h3>
                    <p className="text-gray-600">CPF: {item.cpf}</p>
                    <p className="text-gray-600">Formação: {item.formacao}</p>
                  </div>
                  <Badge variant={item.status === "Ativo" ? "default" : "secondary"}>{item.status}</Badge>
                </div>
              )}

              {tipoConsulta === "turmas" && (
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">Código: {item.codigo}</h3>
                    <p className="text-gray-600">Modalidade: {item.modalidade}</p>
                    <p className="text-gray-600">Professor: {item.professor}</p>
                    <p className="text-gray-600">Nível: {item.nivel}</p>
                  </div>
                  <Badge variant="outline">{item.vagas} vagas</Badge>
                </div>
              )}

              {tipoConsulta === "modalidades" && (
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{item.nome}</h3>
                    <p className="text-gray-600">Código: {item.codigo}</p>
                  </div>
                  <Badge variant={item.status === "Ativa" ? "default" : "secondary"}>{item.status}</Badge>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  const getIcon = () => {
    switch (tipoConsulta) {
      case "alunos":
        return <Users className="h-5 w-5" />
      case "professores":
        return <GraduationCap className="h-5 w-5" />
      case "turmas":
        return <Users2 className="h-5 w-5" />
      case "modalidades":
        return <Trophy className="h-5 w-5" />
      default:
        return <Search className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-verde-bandeira">
                  <Search className="h-6 w-6" />
                  <span>Consulta Geral</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Filtros de Busca */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="tipoConsulta" className="text-sm font-medium text-gray-700 mb-2 block">
                      TIPO DE CONSULTA
                    </Label>
                    <Select value={tipoConsulta} onValueChange={setTipoConsulta}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alunos">
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4" />
                            <span>Alunos</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="professores">
                          <div className="flex items-center space-x-2">
                            <GraduationCap className="h-4 w-4" />
                            <span>Professores</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="turmas">
                          <div className="flex items-center space-x-2">
                            <Users2 className="h-4 w-4" />
                            <span>Turmas</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="modalidades">
                          <div className="flex items-center space-x-2">
                            <Trophy className="h-4 w-4" />
                            <span>Modalidades</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="termoBusca" className="text-sm font-medium text-gray-700 mb-2 block">
                      TERMO DE BUSCA
                    </Label>
                    <Input
                      id="termoBusca"
                      placeholder="Digite nome, código ou CPF..."
                      value={termoBusca}
                      onChange={(e) => setTermoBusca(e.target.value)}
                      className="h-12"
                      onKeyPress={(e) => e.key === "Enter" && handleBuscar()}
                    />
                  </div>

                  <div className="flex items-end">
                    <Button
                      onClick={handleBuscar}
                      disabled={!tipoConsulta}
                      className="bg-verde-bandeira hover:bg-verde-bandeira-dark text-white h-12 px-8"
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Buscar
                    </Button>
                  </div>
                </div>

                {/* Resultados */}
                <div className="border-t pt-6">
                  <div className="flex items-center space-x-2 mb-4">
                    {getIcon()}
                    <h3 className="text-lg font-semibold text-gray-800">
                      {tipoConsulta
                        ? `Resultados - ${tipoConsulta.charAt(0).toUpperCase() + tipoConsulta.slice(1)}`
                        : "Resultados"}
                    </h3>
                    {resultados.length > 0 && (
                      <Badge variant="outline">
                        {resultados.length} {resultados.length === 1 ? "resultado" : "resultados"}
                      </Badge>
                    )}
                  </div>

                  {renderResultados()}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
