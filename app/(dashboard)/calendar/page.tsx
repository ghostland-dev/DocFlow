"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileSignature,
  FileText,
  Filter,
  MoreHorizontal,
  Plus,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState("October 2023")
  const [view, setView] = useState("month")

  // Sample calendar data
  const days = Array.from({ length: 35 }, (_, i) => {
    const day = i - 2 // Offset to start on Monday for October 2023
    return {
      date: day > 0 && day <= 31 ? day : null,
      events: getEventsForDay(day),
    }
  })

  function getEventsForDay(day) {
    // Sample events data
    const allEvents = [
      {
        id: 1,
        day: 3,
        title: "Contract Review",
        time: "10:00 AM",
        type: "document",
        status: "pending",
      },
      {
        id: 2,
        day: 5,
        title: "Team Meeting",
        time: "2:00 PM",
        type: "meeting",
        status: "confirmed",
      },
      {
        id: 3,
        day: 10,
        title: "Signature Deadline",
        time: "11:59 PM",
        type: "signature",
        status: "urgent",
      },
      {
        id: 4,
        day: 12,
        title: "Client Presentation",
        time: "3:30 PM",
        type: "meeting",
        status: "confirmed",
      },
      {
        id: 5,
        day: 15,
        title: "Document Review",
        time: "9:00 AM",
        type: "document",
        status: "pending",
      },
      {
        id: 6,
        day: 18,
        title: "Contract Signing",
        time: "1:00 PM",
        type: "signature",
        status: "confirmed",
      },
      {
        id: 7,
        day: 20,
        title: "Project Kickoff",
        time: "10:30 AM",
        type: "meeting",
        status: "confirmed",
      },
      {
        id: 8,
        day: 24,
        title: "Quarterly Review",
        time: "11:00 AM",
        type: "document",
        status: "pending",
      },
      {
        id: 9,
        day: 26,
        title: "Vendor Agreement",
        time: "2:30 PM",
        type: "signature",
        status: "urgent",
      },
      {
        id: 10,
        day: 31,
        title: "Month-End Report",
        time: "4:00 PM",
        type: "document",
        status: "pending",
      },
    ]

    return allEvents.filter((event) => event.day === day)
  }

  const getEventIcon = (type) => {
    switch (type) {
      case "document":
        return <FileText className="h-3 w-3" />
      case "signature":
        return <FileSignature className="h-3 w-3" />
      case "meeting":
        return <Users className="h-3 w-3" />
      default:
        return <CalendarIcon className="h-3 w-3" />
    }
  }

  const getEventStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-emerald-500"
      case "pending":
        return "bg-amber-500"
      case "urgent":
        return "bg-rose-500"
      default:
        return "bg-slate-500"
    }
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Calendar</h1>
          <p className="text-muted-foreground">Manage your document deadlines and meetings</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter</span>
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Event
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-lg font-semibold">{currentMonth}</h2>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            Today
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Select defaultValue={view} onValueChange={setView}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="agenda">Agenda</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="grid grid-cols-7 text-center border-b">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
              <div key={i} className="py-2 font-medium text-sm">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 auto-rows-fr">
            {days.map((day, i) => (
              <div
                key={i}
                className={`min-h-[120px] p-1 border-b border-r ${day.date ? "bg-background" : "bg-muted/30"} ${
                  day.date === 15 ? "ring-2 ring-primary ring-inset" : ""
                }`}
              >
                {day.date && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${day.date === 15 ? "text-primary" : ""}`}>{day.date}</span>
                      {day.events.length > 0 && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <MoreHorizontal className="h-3 w-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Plus className="mr-2 h-4 w-4" />
                              <span>Add Event</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>View Day</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </div>
                    <div className="mt-1 space-y-1">
                      {day.events.map((event) => (
                        <div
                          key={event.id}
                          className="text-xs rounded px-1.5 py-1 bg-primary/5 border border-primary/10 cursor-pointer hover:bg-primary/10"
                        >
                          <div className="flex items-center gap-1">
                            <div className={`h-1.5 w-1.5 rounded-full ${getEventStatusColor(event.status)}`}></div>
                            <span className="font-medium truncate">{event.title}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-0.5 text-muted-foreground">
                            <Clock className="h-2.5 w-2.5" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Your scheduled events for the next 7 days</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {[
                {
                  id: 1,
                  title: "Contract Review with Legal Team",
                  date: "Today",
                  time: "10:00 AM - 11:00 AM",
                  type: "document",
                  status: "confirmed",
                  participants: [
                    { name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32", initials: "AJ" },
                    { name: "Sarah Williams", avatar: "/placeholder.svg?height=32&width=32", initials: "SW" },
                    { name: "Michael Brown", avatar: "/placeholder.svg?height=32&width=32", initials: "MB" },
                  ],
                },
                {
                  id: 2,
                  title: "Signature Deadline: Client Agreement",
                  date: "Tomorrow",
                  time: "11:59 PM",
                  type: "signature",
                  status: "urgent",
                  participants: [
                    { name: "David Wilson", avatar: "/placeholder.svg?height=32&width=32", initials: "DW" },
                    { name: "Emily Davis", avatar: "/placeholder.svg?height=32&width=32", initials: "ED" },
                  ],
                },
                {
                  id: 3,
                  title: "Team Meeting: Project Status",
                  date: "Oct 18, 2023",
                  time: "2:00 PM - 3:00 PM",
                  type: "meeting",
                  status: "confirmed",
                  participants: [
                    { name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32", initials: "AJ" },
                    { name: "Sarah Williams", avatar: "/placeholder.svg?height=32&width=32", initials: "SW" },
                    { name: "Michael Brown", avatar: "/placeholder.svg?height=32&width=32", initials: "MB" },
                    { name: "Lisa Taylor", avatar: "/placeholder.svg?height=32&width=32", initials: "LT" },
                  ],
                },
                {
                  id: 4,
                  title: "Document Review: Q3 Report",
                  date: "Oct 20, 2023",
                  time: "9:00 AM - 10:30 AM",
                  type: "document",
                  status: "pending",
                  participants: [
                    { name: "Emily Davis", avatar: "/placeholder.svg?height=32&width=32", initials: "ED" },
                    { name: "David Wilson", avatar: "/placeholder.svg?height=32&width=32", initials: "DW" },
                  ],
                },
              ].map((event) => (
                <div key={event.id} className="p-4 hover:bg-muted/50">
                  <div className="flex items-start gap-4">
                    <div
                      className={`rounded-full p-2 ${
                        event.type === "document"
                          ? "bg-blue-500/10 text-blue-500"
                          : event.type === "signature"
                            ? "bg-amber-500/10 text-amber-500"
                            : "bg-emerald-500/10 text-emerald-500"
                      }`}
                    >
                      {getEventIcon(event.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">{event.title}</h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <CalendarIcon className="h-3.5 w-3.5" />
                            <span>{event.date}</span>
                            <span>•</span>
                            <Clock className="h-3.5 w-3.5" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <Badge
                          variant={
                            event.status === "confirmed"
                              ? "outline"
                              : event.status === "pending"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {event.status === "confirmed"
                            ? "Confirmed"
                            : event.status === "pending"
                              ? "Pending"
                              : "Urgent"}
                        </Badge>
                      </div>
                      <div className="flex items-center mt-3">
                        <div className="flex -space-x-2 mr-2">
                          {event.participants.slice(0, 3).map((participant, i) => (
                            <Avatar key={i} className="h-6 w-6 border-2 border-background">
                              <AvatarImage src={participant.avatar} />
                              <AvatarFallback className="text-[10px]">{participant.initials}</AvatarFallback>
                            </Avatar>
                          ))}
                          {event.participants.length > 3 && (
                            <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-[10px] border-2 border-background">
                              +{event.participants.length - 3}
                            </div>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {event.participants.length} participant{event.participants.length !== 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t bg-muted/50 py-2">
            <Button variant="ghost">View All Events</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reminders</CardTitle>
            <CardDescription>Upcoming deadlines and important dates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: "Contract Expiration",
                  description: "Acme Corp service agreement",
                  daysLeft: 3,
                  priority: "high",
                },
                {
                  id: 2,
                  title: "Document Review",
                  description: "Legal team feedback needed",
                  daysLeft: 5,
                  priority: "medium",
                },
                {
                  id: 3,
                  title: "Signature Collection",
                  description: "All board members must sign",
                  daysLeft: 7,
                  priority: "medium",
                },
                {
                  id: 4,
                  title: "License Renewal",
                  description: "Software subscription",
                  daysLeft: 14,
                  priority: "low",
                },
              ].map((reminder) => (
                <div key={reminder.id} className="flex items-start gap-3 p-3 rounded-lg border">
                  <div
                    className={`rounded-full h-2 w-2 mt-1.5 ${
                      reminder.priority === "high"
                        ? "bg-rose-500"
                        : reminder.priority === "medium"
                          ? "bg-amber-500"
                          : "bg-emerald-500"
                    }`}
                  ></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{reminder.title}</h4>
                      <Badge
                        variant={
                          reminder.daysLeft <= 3 ? "destructive" : reminder.daysLeft <= 7 ? "secondary" : "outline"
                        }
                      >
                        {reminder.daysLeft} day{reminder.daysLeft !== 1 ? "s" : ""} left
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{reminder.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" size="sm">
              Dismiss All
            </Button>
            <Button size="sm">Add Reminder</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

