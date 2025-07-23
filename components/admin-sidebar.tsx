"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Home, Users, GraduationCap, UserCheck, Users2, Trophy, Search, LogOut, BarChart3 } from "lucide-react"

const menuItems = [
  { name: "Home", icon: Home, href: "/admin/dashboard" },
  { name: "Aluno", icon: Users, href: "/admin/alunos" },
  { name: "Professor", icon: GraduationCap, href: "/admin/professores" },
  { name: "Matrícula", icon: UserCheck, href: "/admin/matriculas" },
  { name: "Turma", icon: Users2, href: "/admin/turmas" },
  { name: "Modalidade", icon: Trophy, href: "/admin/modalidades" },
  { name: "Nível", icon: BarChart3, href: "/admin/niveis" },
  { name: "Consulta", icon: Search, href: "/admin/consulta" },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <aside className="w-64 bg-white shadow-lg h-full">
      <nav className="p-4">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-verde-bandeira">Bloco Administrativo</h2>
        </div>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== "/admin/dashboard" && pathname.startsWith(item.href))
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
