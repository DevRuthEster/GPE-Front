import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="bg-verde-bandeira h-16 flex items-center justify-between px-6 shadow-md">
      <div className="text-white text-xl font-bold">GPE</div>

      <div className="flex items-center space-x-3">
        <span className="text-white font-medium">NOME</span>
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-white text-verde-bandeira text-sm font-semibold">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
