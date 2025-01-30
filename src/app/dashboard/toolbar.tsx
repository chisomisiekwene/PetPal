"use client"

import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { AlignLeft, Bell, ChevronDown, Menu, Search } from "lucide-react"
import { useState } from "react"

interface ToolbarProps {
  onMenuClick: () => void
}

export default function Toolbar({ onMenuClick }: ToolbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="sticky top-0 z-20 bg-white border-b">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={onMenuClick}>
             <AlignLeft size={64} />  
            <span className="sr-only">Toggle menu</span>
          </Button>
          <h1 className="text-xl font-semibold">PetStore Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products, pets..." className="pl-8 w-64" />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Toggle search</span>
          </Button>
          
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="Staff" />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <span className="hidden md:inline font-medium">Sarah Smith</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
      {isSearchOpen && (
        <div className="md:hidden p-4 border-t">
          <Input placeholder="Search products, pets..." />
        </div>
      )}
    </div>
  )
}

