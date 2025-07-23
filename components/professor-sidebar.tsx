"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Home, BookOpen, Calendar, Users2, LogOut } from "lucide-react"

const menuItems = [
  { name: "Home", icon: Home, href: "/professor/dashboard" },
  { name: "Diário de Aula", icon: BookOpen, href: "/professor/diario" },
  { name: "Minhas Turmas", icon: Users2, href: "/professor/turmas" },
  { name: "Calendário", icon: Calendar, href: "/professor/calendario" },
]

export function ProfessorSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <aside className="w-64 bg-white shadow-lg h-full">
      <nav className="p-4">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-verde-bandeira">Bloco Professor</h2>
        </div>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== "/professor/dashboard" && pathname.startsWith(item.href))
            const Icon = item.icon

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "text-verde-bandeira bg-verde-bandeira-light"
                      : "text-gray-700 hover:text-verde-bandeira hover:bg-verde-bandeira-light"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Botão de Sair */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <button
            onClick={() => router.push("/login")}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-red-600 hover:text-red-700 hover:bg-red-50 w-full"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Sair do Sistema</span>
          </button>
        </div>
      </nav>
    </aside>
  )
}
