import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, PlusCircle, MoreHorizontal, Users, Calendar, FileText, Clock, Edit, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

// Mock data - in a real app, this would come from a database
const getProjectById = (id: string) => {
  const projects = [
    {
      id: "1",
      name: "Website Redesign",
      description: "Complete overhaul of company website with new branding",
      status: "in-progress",
      progress: 65,
      dueDate: "2023-12-15T00:00:00Z",
      createdAt: "2023-09-10T00:00:00Z",
      updatedAt: "2023-10-25T00:00:00Z",
      members: [
        {
          id: "1",
          name: "Alex Johnson",
          email: "alex@example.com",
          role: "Project Manager",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "2",
          name: "Sarah Williams",
          email: "sarah@example.com",
          role: "Designer",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "3",
          name: "Michael Brown",
          email: "michael@example.com",
          role: "Developer",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      ],
      documents: [
        {
          id: "1",
          title: "Website Design Contract",
          type: "PDF",
          status: "signed",
          updatedAt: "2023-09-15T00:00:00Z",
        },
        {
          id: "2",
          title: "Brand Guidelines",
          type: "PDF",
          status: "signed",
          updatedAt: "2023-09-20T00:00:00Z",
        },
        {
          id: "3",
          title: "Content Strategy",
          type: "DOCX",
          status: "pending",
          updatedAt: "2023-10-05T00:00:00Z",
        },
        {
          id: "4",
          title: "Technical Specifications",
          type: "PDF",
          status: "draft",
          updatedAt: "2023-10-10T00:00:00Z",
        },
        {
          id: "5",
          title: "Project Timeline",
          type: "XLSX",
          status: "signed",
          updatedAt: "2023-09-12T00:00:00Z",
        },
      ],
      activities: [
        {
          id: "1",
          action: "created the project",
          user: "Alex Johnson",
          date: "2023-09-10T00:00:00Z",
        },
        {
          id: "2",
          action: "added Sarah Williams to the project",
          user: "Alex Johnson",
          date: "2023-09-11T00:00:00Z",
        },
        {
          id: "3",
          action: "uploaded Website Design Contract",
          user: "Alex Johnson",
          date: "2023-09-15T00:00:00Z",
        },
        {
          id: "4",
          action: "signed Website Design Contract",
          user: "Sarah Williams",
          date: "2023-09-16T00:00:00Z",
        },
        {
          id: "5",
          action: "added Michael Brown to the project",
          user: "Alex Johnson",
          date: "2023-09-18T00:00:00Z",
        },
        {
          id: "6",
          action: "uploaded Brand Guidelines",
          user: "Sarah Williams",
          date: "2023-09-20T00:00:00Z",
        },
        {
          id: "7",
          action: "uploaded Content Strategy",
          user: "Michael Brown",
          date: "2023-10-05T00:00:00Z",
        },
        {
          id: "8",
          action: "updated project progress to 65%",
          user: "Alex Johnson",
          date: "2023-10-25T00:00:00Z",
        },
      ],
    },
  ]

  return projects.find((project) => project.id === id)
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getDocumentStatusColor = (status: string) => {
    switch (status) {
      case "signed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "draft":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "in-progress":
        return "In Progress"
      default:
        return status.charAt(0).toUpperCase() + status.slice(1)
    }
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/projects">
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <Badge className={getStatusColor(project.status)}>{getStatusText(project.status)}</Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Edit className="mr-2 h-4 w-4" />
            Edit Project
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Duplicate Project</DropdownMenuItem>
              <DropdownMenuItem>Archive Project</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Delete Project</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Due Date</p>
                    <p className="text-sm text-muted-foreground">{formatDate(project.dueDate)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Documents</p>
                    <p className="text-sm text-muted-foreground">{project.documents.length} total</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Team Members</p>
                    <p className="text-sm text-muted-foreground">{project.members.length} members</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="documents">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="documents" className="mt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Project Documents</CardTitle>
                    <CardDescription>Manage and track all documents related to this project</CardDescription>
                  </div>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Document
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.documents.map((document) => (
                      <div key={document.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-muted rounded">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <Link href={`/dashboard/documents/${document.id}`} className="font-medium hover:underline">
                              {document.title}
                            </Link>
                            <p className="text-sm text-muted-foreground">
                              {document.type} · Updated {formatDate(document.updatedAt)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getDocumentStatusColor(document.status)}>
                            {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
                          </Badge>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Link href={`/dashboard/documents/${document.id}`} className="w-full">
                                  View Document
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>Download</DropdownMenuItem>
                              <DropdownMenuItem>Share</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">Remove from Project</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="activity" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Log</CardTitle>
                  <CardDescription>Recent activity in this project</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.activities.map((activity, index) => (
                      <div key={activity.id} className="flex items-start space-x-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-primary"></div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-1">
                            <span className="font-medium">{activity.user}</span>
                            <span>{activity.action}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {formatDateTime(activity.date)}
                          </div>
                          {index < project.activities.length - 1 && <Separator className="my-3" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>People working on this project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {project.members.map((member) => (
                <div key={member.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Team Member
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Created</h3>
                <p className="mt-1">{formatDate(project.createdAt)}</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Last Updated</h3>
                <p className="mt-1">{formatDate(project.updatedAt)}</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                <div className="mt-1">
                  <Badge className={getStatusColor(project.status)}>{getStatusText(project.status)}</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="w-full">
                <Edit className="mr-2 h-4 w-4" />
                Edit Details
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-red-200 dark:border-red-800">
            <CardHeader className="text-red-600 dark:text-red-400">
              <CardTitle>Danger Zone</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="destructive" className="w-full">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

