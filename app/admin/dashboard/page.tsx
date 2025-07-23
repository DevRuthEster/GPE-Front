import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { QuickAccessCard } from "@/components/quick-access-card"
import { Users, GraduationCap, Trophy, Users2, BarChart3, UserCheck } from "lucide-react"

export default function AdminDashboardPage() {
  const quickAccessItems = [
    { title: "Cadastro de Alunos", href: "/admin/alunos/cadastro", icon: Users },
    { title: "Cadastro de Professores", href: "/admin/professores/cadastro", icon: GraduationCap },
    { title: "Cadastro de Modalidades", href: "/admin/modalidades/cadastro", icon: Trophy },
    { title: "Cadastro de Turma", href: "/admin/turmas/cadastro", icon: Users2 },
    { title: "Cadastro de Nível", href: "/admin/niveis/cadastro", icon: BarChart3 },
    { title: "Matrícula", href: "/admin/matriculas", icon: UserCheck },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Painel Administrativo</h1>
            <p className="text-gray-600 mb-8">Gerencie alunos, professores, turmas e modalidades do sistema</p>

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
