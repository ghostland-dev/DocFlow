"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3Icon, FileTextIcon, GaugeIcon, PenToolIcon, SettingsIcon, UsersIcon } from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    icon: GaugeIcon,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Documents",
    icon: FileTextIcon,
    href: "/dashboard/documents",
    color: "text-violet-500",
    subRoutes: [
      {
        label: "All Documents",
        href: "/dashboard/documents",
      },
      {
        label: "Create Document",
        href: "/dashboard/documents/create",
      },
    ],
  },
  {
    label: "Signatures",
    icon: PenToolIcon,
    href: "/dashboard/signatures",
    color: "text-pink-700",
    subRoutes: [
      {
        label: "All Signatures",
        href: "/dashboard/signatures",
      },
      {
        label: "Request Signature",
        href: "/dashboard/signatures/request",
      },
    ],
  },
  {
    label: "Team",
    icon: UsersIcon,
    href: "/dashboard/team",
    color: "text-orange-500",
  },
  {
    label: "Analytics",
    icon: BarChart3Icon,
    href: "/dashboard/analytics",
    color: "text-emerald-500",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/dashboard/settings",
    color: "text-gray-500",
    subRoutes: [
      {
        label: "Profile",
        href: "/dashboard/settings/profile",
      },
      {
        label: "Billing",
        href: "/dashboard/settings/billing",
      },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">
            Docu<span className="text-primary">Flow</span>
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <div key={route.href} className="space-y-1">
              <Link
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition",
                  pathname === route.href || pathname.startsWith(route.href + "/")
                    ? "text-primary bg-slate-100 dark:bg-slate-800"
                    : "text-slate-500 dark:text-slate-400",
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>

              {route.subRoutes && (pathname === route.href || pathname.startsWith(route.href + "/")) && (
                <div className="pl-8 space-y-1">
                  {route.subRoutes.map((subRoute) => (
                    <Link
                      key={subRoute.href}
                      href={subRoute.href}
                      className={cn(
                        "text-sm flex p-2 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition",
                        pathname === subRoute.href
                          ? "text-primary bg-slate-100 dark:bg-slate-800"
                          : "text-slate-500 dark:text-slate-400",
                      )}
                    >
                      {subRoute.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

