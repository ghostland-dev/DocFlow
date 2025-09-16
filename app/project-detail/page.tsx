"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Calendar,
  Check,
  Clock,
  FileSignature,
  FileText,
  MoreHorizontal,
  Paperclip,
  Plus,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export default function ProjectDetail() {
  const [activeTab, setActiveTab] = useState("overview")

  const project = {
    id: "PRJ-001",
    title: "Website Redesign",
    description: "Complete redesign of the company website with new branding and improved user experience.",
    status: "In Progress",
    progress: 65,
    startDate: "2023-09-01",
    dueDate: "2023-11-15",
    members: [
      { name: "John Doe", email: "john@example.com", role: "Project Manager" },
      { name: "Jane Smith", email: "jane@example.com", role: "Designer" },
      { name: "Alex Johnson", email: "alex@example.com", role: "Developer" },
      { name: "Maria Garcia", email: "maria@example.com", role: "Content Writer" },
    ],
    documents: [
      { id: "DOC-001", title: "Project Brief", status: "Completed", date: "2023-09-01" },
      { id: "DOC-002", title: "Design Specifications", status: "Completed", date: "2023-09-15" },
      { id: "DOC-003", title: "Content Plan", status: "In Progress", date: "2023-09-30" },
      { id: "DOC-004", title: "Development Contract", status: "Pending Signature", date: "2023-10-05" },
    ],
    tasks: [
      { id: "TASK-001", title: "Sitemap Creation", status: "Completed", assignee: "Jane Smith" },
      { id: "TASK-002", title: "Wireframe Design", status: "Completed", assignee: "Jane Smith" },
      { id: "TASK-003", title: "Content Creation", status: "In Progress", assignee: "Maria Garcia" },
      { id: "TASK-004", title: "Frontend Development", status: "In Progress", assignee: "Alex Johnson" },
      { id: "TASK-005", title: "Backend Integration", status: "Not Started", assignee: "Alex Johnson" },
      { id: "TASK-006", title: "User Testing", status: "Not Started", assignee: "John Doe" },
    ],
    comments: [
      {
        id: "CMT-001",
        user: "John Doe",
        text: "Let's schedule a meeting to review the wireframes this week.",
        date: "2023-09-20",
      },
      {
        id: "CMT-002",
        user: "Jane Smith",
        text: "I've completed the wireframes and uploaded them to the shared folder.",
        date: "2023-09-22",
      },
      {
        id: "CMT-003",
        user: "Alex Johnson",
        text: "I'll start working on the frontend implementation next week.",
        date: "2023-09-25",
      },
    ],
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            {project.title}
            <Badge variant="warning" className="ml-2">
              In Progress
            </Badge>
          </h1>
          <p className="text-muted-foreground">{project.id}</p>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" />
            Documents
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Task
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>Overview of the project and its progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Description</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Timeline</h3>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Start Date:</span>
                      <span>{new Date(project.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Due Date:</span>
                      <span>{new Date(project.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium">Progress</h3>
                    <span className="text-sm">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Task Status</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold">
                          {project.tasks.filter((t) => t.status === "Completed").length}
                        </div>
                        <div className="text-xs text-muted-foreground">Completed</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold">
                          {project.tasks.filter((t) => t.status === "In Progress").length}
                        </div>
                        <div className="text-xs text-muted-foreground">In Progress</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold">
                          {project.tasks.filter((t) => t.status === "Not Started").length}
                        </div>
                        <div className="text-xs text-muted-foreground">Not Started</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold">{project.tasks.length}</div>
                        <div className="text-xs text-muted-foreground">Total Tasks</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>People working on this project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.members.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{member.name}</div>
                      <div className="text-xs text-muted-foreground">{member.role}</div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Send Message</DropdownMenuItem>
                        <DropdownMenuItem>Remove from Project</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full gap-1 mt-2">
                  <Plus className="h-3.5 w-3.5" />
                  Add Team Member
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Documents</CardTitle>
                <CardDescription>Documents associated with this project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.documents.slice(0, 3).map((doc, index) => (
                    <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted">
                      <div className="p-2 rounded-md bg-primary/10">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm">{doc.title}</div>
                          <Badge
                            variant={
                              doc.status === "Completed"
                                ? "success"
                                : doc.status === "In Progress"
                                  ? "warning"
                                  : "outline"
                            }
                            className="text-xs"
                          >
                            {doc.status}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Updated {new Date(doc.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-4">
                  View All Documents
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates and comments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.comments.slice(0, 3).map((comment, index) => (
                    <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                          {comment.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm">{comment.user}</div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(comment.date).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="text-sm mt-1">{comment.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-4">
                  View All Activity
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Tasks</CardTitle>
                <CardDescription>Manage and track project tasks</CardDescription>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Task
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.tasks.map((task, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50">
                    <div className="flex-shrink-0">
                      {task.status === "Completed" ? (
                        <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary-foreground" />
                        </div>
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div
                          className={`font-medium ${task.status === "Completed" ? "line-through text-muted-foreground" : ""}`}
                        >
                          {task.title}
                        </div>
                        <Badge
                          variant={
                            task.status === "Completed"
                              ? "success"
                              : task.status === "In Progress"
                                ? "warning"
                                : "outline"
                          }
                        >
                          {task.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Avatar className="h-5 w-5">
                          <AvatarFallback className="text-xs">
                            {task.assignee
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">{task.assignee}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Project Documents</CardTitle>
                <CardDescription>Manage documents and signatures</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <FileSignature className="h-4 w-4" />
                  Request Signature
                </Button>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Upload Document
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.documents.map((doc, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-muted/50">
                    <div className="p-2 rounded-md bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{doc.title}</div>
                        <Badge
                          variant={
                            doc.status === "Completed"
                              ? "success"
                              : doc.status === "In Progress"
                                ? "warning"
                                : doc.status === "Pending Signature"
                                  ? "outline"
                                  : "outline"
                          }
                        >
                          {doc.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        <span>Updated {new Date(doc.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage project team and roles</CardDescription>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Member
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.members.map((member, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-muted/50">
                    <Avatar>
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">{member.email}</div>
                    </div>
                    <Badge variant="outline">{member.role}</Badge>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comments" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Comments & Discussion</CardTitle>
              <CardDescription>Team communication and updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                {project.comments.map((comment, index) => (
                  <div key={index} className="flex gap-4">
                    <Avatar>
                      <AvatarFallback>
                        {comment.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{comment.user}</span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(comment.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm">{comment.text}</p>
                      <div className="flex gap-4 pt-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                        >
                          Reply
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                        >
                          React
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <Textarea placeholder="Add a comment..." className="min-h-[100px]" />
                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Paperclip className="h-3.5 w-3.5" />
                        Attach
                      </Button>
                      <Button size="sm">Post Comment</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
