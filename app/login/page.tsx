"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function LoginPage() {
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  const [perfil, setPerfil] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (usuario && senha && perfil) {
      if (perfil === "administrativo") {
        router.push("/admin/dashboard")
      } else if (perfil === "professor") {
        router.push("/professor/dashboard")
      }
    }
  }

  return (
    <div className="min-h-screen bg-verde-bandeira flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-2xl">
        <CardHeader className="bg-verde-bandeira-dark rounded-t-lg">
          <h1 className="text-2xl font-bold text-white text-center py-2">GPE</h1>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="perfil" className="text-gray-700">
                Perfil de Acesso
              </Label>
              <Select value={perfil} onValueChange={setPerfil} required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione seu perfil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="administrativo">Administrativo</SelectItem>
                  <SelectItem value="professor">Professor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="usuario" className="text-gray-700">
                Usuário
              </Label>
              <Input
                id="usuario"
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha" className="text-gray-700">
                Senha
              </Label>
              <Input
                id="senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div className="text-center">
              <Link href="/esqueceu-senha" className="text-verde-bandeira hover:text-verde-bandeira-dark text-sm">
                Esqueceu sua senha?
              </Link>
            </div>

            <Button type="submit" className="w-full bg-verde-bandeira hover:bg-verde-bandeira-dark text-white">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
