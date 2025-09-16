import Link from "next/link"
import { PlusCircle, Search, Filter, Grid3X3, List, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

// Mock data - in a real app, this would come from a database
const projects = [
  {
    id: "1",
    name: "Website Redesign",
    description: "Complete overhaul of company website with new branding",
    status: "in-progress",
    progress: 65,
    dueDate: "2023-12-15T00:00:00Z",
    documents: 8,
    members: [
      {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ],
  },
  {
    id: "2",
    name: "Client Onboarding",
    description: "New client documentation and contract signing process",
    status: "completed",
    progress: 100,
    dueDate: "2023-10-30T00:00:00Z",
    documents: 12,
    members: [
      {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "David Clark",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ],
  },
  {
    id: "3",
    name: "Product Launch",
    description: "Legal documents and agreements for new product launch",
    status: "pending",
    progress: 25,
    dueDate: "2024-01-20T00:00:00Z",
    documents: 5,
    members: [
      {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "Emily Davis",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "Robert Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ],
  },
  {
    id: "4",
    name: "HR Documentation",
    description: "Employee contracts and policy documents",
    status: "in-progress",
    progress: 50,
    dueDate: "2023-11-30T00:00:00Z",
    documents: 15,
    members: [
      {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      {
        name: "Jennifer Lee",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    ],
  },
]

export default function ProjectsPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage your document projects and collaborations</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/projects/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search projects..." className="w-full pl-8" />
        </div>
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Tabs defaultValue="grid" className="w-[120px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="grid">
                <Grid3X3 className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="list">
                <List className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <Tabs defaultValue="grid" className="w-full">
        <TabsContent value="grid" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>
                        <Link href={`/dashboard/projects/${project.id}`} className="hover:underline">
                          {project.name}
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-1 line-clamp-2">{project.description}</CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Link href={`/dashboard/projects/${project.id}`} className="w-full">
                            View details
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit project</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate project</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete project</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Badge className={getStatusColor(project.status)}>{getStatusText(project.status)}</Badge>
                      <span className="text-sm text-muted-foreground">Due {formatDate(project.dueDate)}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${project.progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <Separator />
                <CardFooter className="pt-3">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex -space-x-2">
                      {project.members.slice(0, 3).map((member, index) => (
                        <Avatar key={index} className="border-2 border-background h-8 w-8">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      ))}
                      {project.members.length > 3 && (
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-xs font-medium">
                          +{project.members.length - 3}
                        </div>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{project.documents} documents</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="list" className="mt-0">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {projects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <h3 className="font-medium">
                          <Link href={`/dashboard/projects/${project.id}`} className="hover:underline">
                            {project.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">{project.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className={getStatusColor(project.status)}>{getStatusText(project.status)}</Badge>
                      <div className="hidden md:flex items-center space-x-2">
                        <div className="flex -space-x-2">
                          {project.members.slice(0, 3).map((member, index) => (
                            <Avatar key={index} className="border-2 border-background h-6 w-6">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          ))}
                          {project.members.length > 3 && (
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-muted text-xs font-medium">
                              +{project.members.length - 3}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="hidden md:block text-sm text-muted-foreground">
                        Due {formatDate(project.dueDate)}
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Link href={`/dashboard/projects/${project.id}`} className="w-full">
                              View details
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Edit project</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate project</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete project</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

