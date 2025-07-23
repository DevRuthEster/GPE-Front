"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/login")
  }, [router])

  return (
    <div className="min-h-screen bg-verde-bandeira flex items-center justify-center">
      <div className="text-white text-xl">Carregando...</div>
    </div>
  )
}
