"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import { useState } from "react"
import { LogoutDialog } from "./logout-dialog"

export function AdminHeader() {
  const router = useRouter()
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)

  const handleLogout = () => {
    // Aqui você pode adicionar lógica de limpeza de sessão se necessário
    router.push("/login")
  }

  return (
    <>
      <header className="bg-verde-bandeira h-16 flex items-center justify-between px-6 shadow-md">
        <div className="flex items-center space-x-4">
          <div className="text-white text-xl font-bold">GPE</div>
          <Badge variant="secondary" className="bg-verde-bandeira-dark text-white">
            Administrativo
          </Badge>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-white font-medium">ADMIN</span>
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-white text-verde-bandeira text-sm font-semibold">A</AvatarFallback>
          </Avatar>
          <button
            onClick={() => setShowLogoutDialog(true)}
            className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors px-3 py-2 rounded-md hover:bg-verde-bandeira-dark"
            title="Sair do sistema"
          >
            <LogOut className="h-5 w-5" />
            <span className="text-sm font-medium">Sair</span>
          </button>
        </div>
      </header>

      <LogoutDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog} onConfirm={handleLogout} />
    </>
  )
}
