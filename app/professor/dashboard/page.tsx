import { ProfessorHeader } from "@/components/professor-header"
import { ProfessorSidebar } from "@/components/professor-sidebar"
import { QuickAccessCard } from "@/components/quick-access-card"
import { BookOpen, Users2, Calendar } from "lucide-react"

export default function ProfessorDashboardPage() {
  const quickAccessItems = [
    { title: "Diário de Aula", href: "/professor/diario", icon: BookOpen },
    { title: "Minhas Turmas", href: "/professor/turmas", icon: Users2 },
    { title: "Calendário de Aulas", href: "/professor/calendario", icon: Calendar },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfessorHeader />

      <div className="flex">
        <ProfessorSidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Painel do Professor</h1>
            <p className="text-gray-600 mb-8">Gerencie suas aulas e acompanhe o desenvolvimento dos alunos</p>

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
