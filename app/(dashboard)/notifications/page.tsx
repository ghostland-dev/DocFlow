"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Check, Clock, FileSignature, FileText, MoreHorizontal, Settings, Trash, User, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "signature_request",
      title: "Signature Request",
      description: "Alex Johnson requested your signature on 'Marketing Agreement'",
      time: "10 minutes ago",
      read: false,
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "AJ",
      },
    },
    {
      id: 2,
      type: "document_signed",
      title: "Document Signed",
      description: "Sarah Williams signed 'Client Contract'",
      time: "1 hour ago",
      read: false,
      user: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SW",
      },
    },
    {
      id: 3,
      type: "mention",
      title: "Mentioned You",
      description: "Michael Brown mentioned you in a comment on 'Project Proposal'",
      time: "3 hours ago",
      read: true,
      user: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MB",
      },
    },
    {
      id: 4,
      type: "team_invite",
      title: "Team Invitation",
      description: "You've been invited to join the 'Marketing Team'",
      time: "Yesterday",
      read: true,
      user: {
        name: "Emily Davis",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "ED",
      },
    },
    {
      id: 5,
      type: "document_comment",
      title: "New Comment",
      description: "David Wilson commented on 'Financial Report'",
      time: "2 days ago",
      read: true,
      user: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "DW",
      },
    },
    {
      id: 6,
      type: "document_shared",
      title: "Document Shared",
      description: "Lisa Taylor shared 'Q3 Presentation' with you",
      time: "3 days ago",
      read: true,
      user: {
        name: "Lisa Taylor",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "LT",
      },
    },
  ])

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const getIcon = (type) => {
    switch (type) {
      case "signature_request":
        return <FileSignature className="h-4 w-4" />
      case "document_signed":
        return <FileText className="h-4 w-4" />
      case "mention":
        return <User className="h-4 w-4" />
      case "team_invite":
        return <Users className="h-4 w-4" />
      case "document_comment":
        return <FileText className="h-4 w-4" />
      case "document_shared":
        return <FileText className="h-4 w-4" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">Stay updated on your documents and team activity</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2" onClick={markAllAsRead}>
            <Check className="h-4 w-4" />
            Mark All as Read
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="/settings/notifications">
              <Settings className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>All</span>
            <Badge variant="secondary" className="ml-1">
              {notifications.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="unread" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Unread</span>
            <Badge variant="secondary" className="ml-1">
              {notifications.filter((n) => !n.read).length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="mentions" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Mentions</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>Your recent notifications from all sources</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 p-4 hover:bg-muted/50 ${!notification.read ? "bg-primary/5" : ""}`}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={notification.user.avatar} />
                        <AvatarFallback>{notification.user.initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{notification.title}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                            {!notification.read && <Badge variant="secondary" className="h-2 w-2 rounded-full p-0" />}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.description}</p>
                        <div className="flex items-center gap-2 pt-1">
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                            View
                          </Button>
                          {!notification.read && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 px-2 text-xs"
                              onClick={() => markAsRead(notification.id)}
                            >
                              Mark as read
                            </Button>
                          )}
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          {!notification.read ? (
                            <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                              <Check className="mr-2 h-4 w-4" />
                              <span>Mark as read</span>
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>
                              <Clock className="mr-2 h-4 w-4" />
                              <span>Mark as unread</span>
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem onClick={() => deleteNotification(notification.id)}>
                            <Trash className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-1">No notifications</h3>
                    <p className="text-sm text-muted-foreground">You're all caught up! No new notifications.</p>
                  </div>
                )}
              </div>
            </CardContent>
            {notifications.length > 0 && (
              <CardFooter className="flex justify-center border-t bg-muted/50 py-2">
                <Button variant="ghost">View All Notifications</Button>
              </CardFooter>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Unread Notifications</CardTitle>
              <CardDescription>Notifications you haven't read yet</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {notifications.filter((n) => !n.read).length > 0 ? (
                  notifications
                    .filter((n) => !n.read)
                    .map((notification) => (
                      <div key={notification.id} className="flex items-start gap-4 p-4 hover:bg-muted/50 bg-primary/5">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={notification.user.avatar} />
                          <AvatarFallback>{notification.user.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{notification.title}</p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">{notification.time}</span>
                              <Badge variant="secondary" className="h-2 w-2 rounded-full p-0" />
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                          <div className="flex items-center gap-2 pt-1">
                            <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                              View
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 px-2 text-xs"
                              onClick={() => markAsRead(notification.id)}
                            >
                              Mark as read
                            </Button>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                              <Check className="mr-2 h-4 w-4" />
                              <span>Mark as read</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => deleteNotification(notification.id)}>
                              <Trash className="mr-2 h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Check className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-1">All caught up!</h3>
                    <p className="text-sm text-muted-foreground">You have no unread notifications.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mentions" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Mentions</CardTitle>
              <CardDescription>Notifications where you were mentioned</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {notifications.filter((n) => n.type === "mention").length > 0 ? (
                  notifications
                    .filter((n) => n.type === "mention")
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start gap-4 p-4 hover:bg-muted/50 ${!notification.read ? "bg-primary/5" : ""}`}
                      >
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={notification.user.avatar} />
                          <AvatarFallback>{notification.user.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{notification.title}</p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">{notification.time}</span>
                              {!notification.read && <Badge variant="secondary" className="h-2 w-2 rounded-full p-0" />}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                          <div className="flex items-center gap-2 pt-1">
                            <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                              View
                            </Button>
                            {!notification.read && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 px-2 text-xs"
                                onClick={() => markAsRead(notification.id)}
                              >
                                Mark as read
                              </Button>
                            )}
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {!notification.read ? (
                              <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                                <Check className="mr-2 h-4 w-4" />
                                <span>Mark as read</span>
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem>
                                <Clock className="mr-2 h-4 w-4" />
                                <span>Mark as unread</span>
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem onClick={() => deleteNotification(notification.id)}>
                              <Trash className="mr-2 h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <User className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-1">No mentions</h3>
                    <p className="text-sm text-muted-foreground">
                      You haven't been mentioned in any documents or comments.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

