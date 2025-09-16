"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Clock, FileSignature, FileText, MoreHorizontal, Plus, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState<"month" | "week" | "day">("month")
  const [showEventDialog, setShowEventDialog] = useState(false)

  // Mock calendar events
  const events = [
    {
      id: "event-001",
      title: "Contract Deadline",
      description: "Service Agreement with Acme Corp due for signature",
      date: new Date(2025, 2, 15),
      type: "deadline",
      relatedItem: { type: "document", id: "doc-123", title: "Service Agreement - Acme Corp" },
    },
    {
      id: "event-002",
      title: "Team Meeting",
      description: "Weekly team sync meeting",
      date: new Date(2025, 2, 18),
      type: "meeting",
      relatedItem: { type: "project", id: "proj-456", title: "Website Redesign" },
    },
    {
      id: "event-003",
      title: "Document Review",
      description: "Review and approve project proposal",
      date: new Date(2025, 2, 20),
      type: "task",
      relatedItem: { type: "document", id: "doc-789", title: "Project Proposal" },
    },
    {
      id: "event-004",
      title: "Client Onboarding",
      description: "Complete client onboarding process",
      date: new Date(2025, 2, 22),
      type: "workflow",
      relatedItem: { type: "workflow", id: "wf-101", title: "Client Onboarding" },
    },
    {
      id: "event-005",
      title: "Signature Reminder",
      description: "Reminder to sign NDA documents",
      date: new Date(2025, 2, 25),
      type: "reminder",
      relatedItem: { type: "document", id: "doc-202", title: "NDA - Project Alpha" },
    },
  ]

  const getEventBadgeVariant = (type: string) => {
    switch (type) {
      case "deadline":
        return "destructive"
      case "meeting":
        return "default"
      case "task":
        return "secondary"
      case "workflow":
        return "outline"
      case "reminder":
        return "warning"
      default:
        return "outline"
    }
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case "deadline":
        return <Clock className="h-4 w-4" />
      case "meeting":
        return <Users className="h-4 w-4" />
      case "task":
        return <FileText className="h-4 w-4" />
      case "workflow":
        return <Users className="h-4 w-4" />
      case "reminder":
        return <FileSignature className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  // Filter events for the selected date
  const selectedDateEvents = events.filter(
    (event) =>
      date &&
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear(),
  )

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Calendar</h1>
          <p className="text-muted-foreground">Manage your schedule and document deadlines</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue={view} onValueChange={(value) => setView(value as "month" | "week" | "day")}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="View" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="day">Day</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2" onClick={() => setDate(new Date())}>
            Today
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              if (date) {
                const newDate = new Date(date)
                newDate.setMonth(newDate.getMonth() - 1)
                setDate(newDate)
              }
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              if (date) {
                const newDate = new Date(date)
                newDate.setMonth(newDate.getMonth() + 1)
                setDate(newDate)
              }
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button className="gap-2" onClick={() => setShowEventDialog(true)}>
            <Plus className="h-4 w-4" />
            Add Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardContent className="p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              {date
                ? date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
                : "Selected Date"}
            </CardTitle>
            <CardDescription>{selectedDateEvents.length} events scheduled</CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      {getEventIcon(event.type)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{event.title}</p>
                        <Badge variant={getEventBadgeVariant(event.type)}>{event.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>Related to: {event.relatedItem.title}</span>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Event</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Related Item</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No events</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">No events scheduled for this date</p>
                <Button size="sm" onClick={() => setShowEventDialog(true)}>
                  Add Event
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Your upcoming deadlines and events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .slice(0, 5)
              .map((event) => (
                <div key={event.id} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    {getEventIcon(event.type)}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{event.title}</p>
                      <span className="text-xs text-muted-foreground">{event.date.toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant={getEventBadgeVariant(event.type)}>{event.type}</Badge>
                      <span className="text-xs text-muted-foreground">Related to: {event.relatedItem.title}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Event Dialog */}
      <Dialog open={showEventDialog} onOpenChange={setShowEventDialog}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Add Calendar Event</DialogTitle>
            <DialogDescription>Create a new event or deadline in your calendar</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input id="title" placeholder="Event title" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea id="description" placeholder="Event description" className="col-span-3 min-h-[80px]" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <div className="col-span-3">
                <Input id="date" type="date" defaultValue={date?.toISOString().split("T")[0]} />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="time" className="text-right">
                Time
              </Label>
              <Input id="time" type="time" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Event Type
              </Label>
              <Select defaultValue="task">
                <SelectTrigger id="type" className="col-span-3">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="deadline">Deadline</SelectItem>
                  <SelectItem value="meeting">Meeting</SelectItem>
                  <SelectItem value="task">Task</SelectItem>
                  <SelectItem value="workflow">Workflow</SelectItem>
                  <SelectItem value="reminder">Reminder</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="related" className="text-right">
                Related Item
              </Label>
              <Select>
                <SelectTrigger id="related" className="col-span-3">
                  <SelectValue placeholder="Select related item" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="doc-123">Service Agreement - Acme Corp</SelectItem>
                  <SelectItem value="doc-456">Project Proposal</SelectItem>
                  <SelectItem value="proj-789">Website Redesign</SelectItem>
                  <SelectItem value="wf-101">Client Onboarding</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEventDialog(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Event</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

