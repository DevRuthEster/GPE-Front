import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { QuickAccessCard } from "@/components/quick-access-card"
import { Users, GraduationCap, Trophy, Users2, BarChart3, UserCheck } from "lucide-react"

export default function DashboardPage() {
  const quickAccessItems = [
    { title: "Cadastro de Alunos", href: "/alunos/cadastro", icon: Users },
    { title: "Cadastro de Professores", href: "/professores/cadastro", icon: GraduationCap },
    { title: "Cadastro de Modalidades", href: "/modalidades/cadastro", icon: Trophy },
    { title: "Cadastro de Turma", href: "/turmas/cadastro", icon: Users2 },
    { title: "Cadastro de Nível", href: "/niveis/cadastro", icon: BarChart3 },
    { title: "Matrícula", href: "/matriculas", icon: UserCheck },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Painel de Controle</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickAccessItems.map((item) => (
                <QuickAccessCard key={item.title} title={item.title} href={item.href} icon={item.icon} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
