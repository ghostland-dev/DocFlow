"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { FileSignature, Menu } from "lucide-react"
import { SidebarNav } from "@/components/sidebar-nav"
import { useSidebar } from "@/components/sidebar-provider"
import Link from "next/link"

export function MobileNav() {
  const { isOpen, toggle, close } = useSidebar()

  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 pt-10">
        <div className="flex items-center gap-2 p-6 border-b">
          <FileSignature className="h-6 w-6 text-primary" />
          <Link href="/dashboard" onClick={close}>
            <span className="text-xl font-bold">DocuFlow</span>
          </Link>
        </div>
        <SidebarNav />
      </SheetContent>
    </Sheet>
  )
}

