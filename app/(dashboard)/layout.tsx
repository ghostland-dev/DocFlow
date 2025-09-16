import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlobalSearch } from "@/components/global-search"
import { NotificationsDropdown } from "@/components/notifications-dropdown"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  BarChart,
  Calendar,
  FileSignature,
  FileText,
  HelpCircle,
  Inbox,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "DocuFlow Dashboard",
  description: "Secure Document Signing with Project Management",
}

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 border-r bg-background">
        <div className="flex items-center gap-2 p-6 border-b">
          <FileSignature className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">DocuFlow</span>
        </div>
        <div className="flex flex-col gap-1 p-2">
          <Link href="/dashboard">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </Button>
          </Link>
          <Link href="/dashboard/documents">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FileText className="h-4 w-4" />
              Documents
            </Button>
          </Link>
          <Link href="/dashboard/signatures">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FileSignature className="h-4 w-4" />
              Signatures
            </Button>
          </Link>
          <Link href="/dashboard/projects">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              Projects
            </Button>
          </Link>
          <Link href="/dashboard/organizations">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              Organizations
            </Button>
          </Link>
          <Link href="/dashboard/calendar">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Calendar className="h-4 w-4" />
              Calendar
            </Button>
          </Link>
          <Link href="/dashboard/reports">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <BarChart className="h-4 w-4" />
              Reports
            </Button>
          </Link>
        </div>
        <div className="mt-auto p-2">
          <Link href="/dashboard/help">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <HelpCircle className="h-4 w-4" />
              Help & Support
            </Button>
          </Link>
          <Link href="/dashboard/settings">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b bg-background">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <GlobalSearch />
            </div>
            <div className="flex items-center gap-4">
              <NotificationsDropdown />
              <Button variant="outline" size="icon">
                <Inbox className="h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/profile">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/settings">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

