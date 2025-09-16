"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/sidebar-provider"
import { BarChart, Calendar, FileSignature, FileText, HelpCircle, LayoutDashboard, Settings, Users } from "lucide-react"

interface SidebarNavProps {
  className?: string
}

export function SidebarNav({ className }: SidebarNavProps) {
  const pathname = usePathname()
  const { close } = useSidebar()

  const routes = [
    {
      href: "/dashboard",
      icon: LayoutDashboard,
      label: "Overview",
    },
    {
      href: "/dashboard/documents",
      icon: FileText,
      label: "Documents",
    },
    {
      href: "/dashboard/signatures",
      icon: FileSignature,
      label: "Signatures",
    },
    {
      href: "/dashboard/projects",
      icon: Users,
      label: "Projects",
    },
    {
      href: "/dashboard/organizations",
      icon: Users,
      label: "Organizations",
    },
    {
      href: "/dashboard/calendar",
      icon: Calendar,
      label: "Calendar",
    },
    {
      href: "/dashboard/reports",
      icon: BarChart,
      label: "Reports",
    },
  ]

  const bottomRoutes = [
    {
      href: "/dashboard/help",
      icon: HelpCircle,
      label: "Help & Support",
    },
    {
      href: "/dashboard/settings",
      icon: Settings,
      label: "Settings",
    },
  ]

  const handleLinkClick = () => {
    // Close sidebar on mobile when a link is clicked
    close()
  }

  return (
    <>
      <div className="flex flex-col gap-1 p-2">
        {routes.map((route) => (
          <Link key={route.href} href={route.href} onClick={handleLinkClick}>
            <Button variant={pathname === route.href ? "secondary" : "ghost"} className="w-full justify-start gap-2">
              <route.icon className="h-4 w-4" />
              {route.label}
            </Button>
          </Link>
        ))}
      </div>
      <div className="mt-auto p-2">
        {bottomRoutes.map((route) => (
          <Link key={route.href} href={route.href} onClick={handleLinkClick}>
            <Button variant={pathname === route.href ? "secondary" : "ghost"} className="w-full justify-start gap-2">
              <route.icon className="h-4 w-4" />
              {route.label}
            </Button>
          </Link>
        ))}
      </div>
    </>
  )
}
