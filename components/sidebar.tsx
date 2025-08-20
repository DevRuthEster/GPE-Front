"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, GraduationCap, UserCheck, Users2, Trophy, Search, Home, BarChart3 } from "lucide-react"

const menuItems = [
  { name: "Home", icon: Home, href: "/admin/dashboard" },
  { name: "Aluno", icon: Users, href: "/admin/alunos/cadastro" },
  { name: "Professor", icon: GraduationCap, href: "/admin/professores/cadastro" },
  { name: "Matrícula", icon: UserCheck, href: "/admin/matriculas" },
  { name: "Turma", icon: Users2, href: "/admin/turmas/cadastro" },
  { name: "Modalidade", icon: Trophy, href: "/admin/modalidades/cadastro" },
  { name: "Nível", icon: BarChart3, href: "/admin/niveis/cadastro" },
  { name: "Consulta", icon: Search, href: "/admin/consulta" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white shadow-lg h-full">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.href)
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
      </nav>
    </aside>
  )
}
