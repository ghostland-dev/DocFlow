"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Calendar, Check, Clock, FileSignature, FileText, MoreHorizontal, Users, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all")

  // Mock notification data
  const notifications = [
    {
      id: "notif-001",
      type: "document",
      title: "Document ready for signature",
      description: "Service Agreement - Acme Corp is ready for your signature",
      time: "10 minutes ago",
      read: false,
      actionUrl: "/signature/doc-123",
      sender: { name: "John Doe", avatar: "/placeholder.svg?height=32&width=32" },
    },
    {
      id: "notif-002",
      type: "signature",
      title: "Document signed",
      description: "Jane Smith has signed Employment Contract",
      time: "2 hours ago",
      read: false,
      actionUrl: "/documents/doc-456",
      sender: { name: "Jane Smith", avatar: "/placeholder.svg?height=32&width=32" },
    },
    {
      id: "notif-003",
      type: "mention",
      title: "You were mentioned in a comment",
      description: "Robert Chen mentioned you in a comment on Project Proposal",
      time: "Yesterday",
      read: true,
      actionUrl: "/documents/doc-789#comments",
      sender: { name: "Robert Chen", avatar: "/placeholder.svg?height=32&width=32" },
    },
    {
      id: "notif-004",
      type: "reminder",
      title: "Signature reminder",
      description: "Reminder: NDA - Project Alpha needs your signature",
      time: "Yesterday",
      read: true,
      actionUrl: "/signature/doc-101",
      sender: { name: "System", avatar: "/placeholder.svg?height=32&width=32" },
    },
    {
      id: "notif-005",
      type: "team",
      title: "Added to team",
      description: "You were added to the Marketing team by Sarah Johnson",
      time: "3 days ago",
      read: true,
      actionUrl: "/teams/team-202",
      sender: { name: "Sarah Johnson", avatar: "/placeholder.svg?height=32&width=32" },
    },
    {
      id: "notif-006",
      type: "document",
      title: "Document shared with you",
      description: "Michael Brown shared Vendor Agreement with you",
      time: "5 days ago",
      read: true,
      actionUrl: "/documents/doc-303",
      sender: { name: "Michael Brown", avatar: "/placeholder.svg?height=32&width=32" },
    },
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="h-5 w-5 text-blue-500" />
      case "signature":
        return <FileSignature className="h-5 w-5 text-green-500" />
      case "mention":
        return <Users className="h-5 w-5 text-purple-500" />
      case "reminder":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "team":
        return <Users className="h-5 w-5 text-indigo-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  const filteredNotifications =
    activeTab === "all"
      ? notifications
      : activeTab === "unread"
        ? notifications.filter((n) => !n.read)
        : notifications.filter((n) => n.type === activeTab)

  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Notifications</h1>
        <p className="text-muted-foreground">Stay updated with your document and team activity</p>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="all" className="gap-2">
              <Bell className="h-4 w-4" />
              All
            </TabsTrigger>
            <TabsTrigger value="unread" className="gap-2">
              <Badge variant="secondary" className="h-5 w-5 p-0 text-xs rounded-full">
                {notifications.filter((n) => !n.read).length}
              </Badge>
              Unread
            </TabsTrigger>
            <TabsTrigger value="document" className="gap-2">
              <FileText className="h-4 w-4" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="signature" className="gap-2">
              <FileSignature className="h-4 w-4" />
              Signatures
            </TabsTrigger>
          </TabsList>

          <Button variant="outline" size="sm" className="gap-2">
            <Check className="h-4 w-4" />
            Mark all as read
          </Button>
        </div>

        <Card>
          <CardContent className="p-0">
            {filteredNotifications.length > 0 ? (
              <div className="divide-y">
                {filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 flex gap-4 hover:bg-muted/50 ${!notification.read ? "bg-muted/20" : ""}`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        {getNotificationIcon(notification.type)}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-base">{notification.title}</h3>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.time}</span>
                          {!notification.read && <div className="h-2 w-2 rounded-full bg-primary"></div>}
                        </div>
                      </div>

                      <div className="mt-2 flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <Avatar className="h-5 w-5">
                            <AvatarImage src={notification.sender.avatar} />
                            <AvatarFallback className="text-[10px]">
                              {notification.sender.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-xs">{notification.sender.name}</span>
                        </div>

                        <div className="flex gap-2 ml-auto">
                          <Button variant="ghost" size="sm" asChild>
                            <a href={notification.actionUrl}>View</a>
                          </Button>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Check className="h-4 w-4 mr-2" />
                                Mark as read
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Clock className="h-4 w-4 mr-2" />
                                Snooze
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <X className="h-4 w-4 mr-2" />
                                Dismiss
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No notifications</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  You don't have any {activeTab !== "all" ? activeTab : ""} notifications at the moment
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Manage how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            You can customize your notification preferences in the{" "}
            <Button variant="link" className="h-auto p-0" asChild>
              <a href="/settings">Settings</a>
            </Button>{" "}
            page.
          </p>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Quick Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Pause All Notifications
              </Button>
              <Button variant="outline" className="justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Daily Digest
              </Button>
              <Button variant="outline" className="justify-start">
                <FileSignature className="h-4 w-4 mr-2" />
                Signature Alerts Only
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

