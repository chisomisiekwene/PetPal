"use client"

import { Home, ShoppingBag, Calendar, Scissors, PawPrint, Package, Settings, View, X } from "lucide-react"
import { Button } from "@/Components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: View, label: "Manage Pets", href: "/dashboard/pets" }
  ]

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden ${isOpen ? "block" : "hidden"}`}
        onClick={onClose}
      />
      <aside
        className={`
          fixed top-0 left-0 z-30 w-64 h-screen 
          transition-transform duration-300 ease-in-out transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0
          bg-accent-light text-white
        `}
      >
        <div className="flex justify-between items-center p-4 md:hidden">
          <h2 className="text-2xl font-bold">PetPal</h2>
          
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="size-16"/>
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <div className="hidden md:block p-4">
          <h2 className="text-2xl font-bold">PetPal</h2>

        </div>
        <nav className="flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className={`w-full justify-start text-white text-lg hover:bg-primary ${
                pathname === item.href ? "bg-primary" : ""
              }`}
              asChild
              onClick={() => {
                if (window.innerWidth < 768) {
                  onClose()
                }
              }}
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
      </aside>
    </>
  )
}

