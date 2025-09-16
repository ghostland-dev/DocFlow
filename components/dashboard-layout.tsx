import Link from "next/link"
import { FileSignature } from "lucide-react"
import { GlobalSearch } from "@/components/global-search"
import { NotificationsDropdown } from "@/components/notifications-dropdown"
import { UserNav } from "@/components/user-nav"
import { SidebarNav } from "@/components/sidebar-nav"
import { MobileNav } from "@/components/mobile-nav"

export function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex flex-col w-64 border-r bg-background">
        <div className="flex items-center gap-2 p-6 border-b">
          <FileSignature className="h-6 w-6 text-primary" />
          <Link href="/dashboard">
            <span className="text-xl font-bold">DocuFlow</span>
          </Link>
        </div>
        <SidebarNav />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b bg-background">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <MobileNav />
              <div className="w-full max-w-sm">
                <GlobalSearch />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <NotificationsDropdown />
              <UserNav />
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
