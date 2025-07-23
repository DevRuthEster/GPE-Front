"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, GraduationCap, UserCheck, Users2, Trophy, Search } from "lucide-react"

const menuItems = [
  { name: "Aluno", icon: Users, href: "/alunos" },
  { name: "Professor", icon: GraduationCap, href: "/professores" },
  { name: "Matrícula", icon: UserCheck, href: "/matriculas" },
  { name: "Turma", icon: Users2, href: "/turmas" },
  { name: "Modalidade", icon: Trophy, href: "/modalidades" },
  { name: "Consulta", icon: Search, href: "/consulta" },
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
