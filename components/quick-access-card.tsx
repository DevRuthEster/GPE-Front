import Link from "next/link"
import { type LucideIcon, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface QuickAccessCardProps {
  title: string
  href: string
  icon?: LucideIcon
}

export function QuickAccessCard({ title, href, icon: Icon = User }: QuickAccessCardProps) {
  return (
    <Link href={href}>
      <Card className="bg-verde-bandeira-pastel border-verde-bandeira hover:shadow-lg transition-shadow cursor-pointer h-32">
        <CardContent className="flex flex-col items-center justify-center h-full p-4">
          <Icon className="h-8 w-8 text-gray-700 mb-3" />
          <h3 className="text-sm font-medium text-gray-800 text-center leading-tight">{title}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}
