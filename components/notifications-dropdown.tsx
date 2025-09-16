"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Check, FileSignature, FileText, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function NotificationsDropdown() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Document ready for signature",
      description: "Contract with Acme Corp requires your signature",
      time: "10 minutes ago",
      read: false,
      icon: FileSignature,
      path: "/dashboard/signatures/1",
    },
    {
      id: 2,
      title: "New comment on document",
      description: "John Doe commented on Marketing Agreement",
      time: "1 hour ago",
      read: false,
      icon: FileText,
      path: "/dashboard/documents/2",
    },
    {
      id: 3,
      title: "Project update",
      description: "Product Launch project has been updated",
      time: "3 hours ago",
      read: true,
      icon: Users,
      path: "/dashboard/projects/1",
    },
    {
      id: 4,
      title: "Document signed",
      description: "Partnership Agreement has been signed by all parties",
      time: "Yesterday",
      read: true,
      icon: FileSignature,
      path: "/dashboard/signatures/2",
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead} className="h-auto p-0 text-xs">
              <Check className="mr-1 h-3 w-3" />
              Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[300px] overflow-y-auto">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-0">
                <Link
                  href={notification.path}
                  className="w-full p-2 hover:bg-muted"
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex gap-2">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${notification.read ? "bg-muted" : "bg-primary/10"}`}
                    >
                      <notification.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className={`text-sm font-medium ${!notification.read ? "text-primary" : ""}`}>
                          {notification.title}
                        </p>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{notification.description}</p>
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="py-4 text-center text-sm text-muted-foreground">No notifications</div>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard/notifications" className="w-full text-center justify-center">
            View all notifications
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

