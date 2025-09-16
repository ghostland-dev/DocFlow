import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ChevronLeft,
  Download,
  MoreHorizontal,
  Pencil,
  Share2,
  Trash2,
  FileText,
  History,
  Eye,
  MessageSquare,
  PenTool,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function DocumentDetailsPage({ params }: { params: { id: string } }) {
  // Mock document data
  const document = {
    id: params.id,
    title: "Service Agreement Contract",
    description:
      "Standard service agreement contract for client projects outlining terms, conditions, and scope of work.",
    status: "active",
    type: "PDF",
    size: "1.2 MB",
    createdAt: "March 15, 2025",
    updatedAt: "March 28, 2025",
    owner: {
      name: "Alex Johnson",
      email: "alex@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    tags: ["contract", "legal", "client"],
    project: "Website Redesign",
    version: "2.1",
  }

  // Mock activity data
  const activities = [
    {
      id: "1",
      type: "edit",
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "March 28, 2025",
      time: "2:45 PM",
      description: "Updated contract terms in section 3.2",
    },
    {
      id: "2",
      type: "view",
      user: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "March 27, 2025",
      time: "11:20 AM",
      description: "Viewed the document",
    },
    {
      id: "3",
      type: "comment",
      user: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "March 26, 2025",
      time: "4:15 PM",
      description: "Added comment on payment terms",
      comment: "We should clarify the payment schedule in this section.",
    },
    {
      id: "4",
      type: "signature_request",
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "March 25, 2025",
      time: "10:30 AM",
      description: "Sent signature request to client",
    },
    {
      id: "5",
      type: "version",
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "March 24, 2025",
      time: "3:50 PM",
      description: "Created new version (v2.1)",
    },
  ]

  // Mock signature data
  const signatures = [
    {
      id: "1",
      signer: {
        name: "David Clark",
        email: "david@clientcompany.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      status: "pending",
      requestedAt: "March 25, 2025",
      viewedAt: "March 26, 2025",
      completedAt: null,
    },
    {
      id: "2",
      signer: {
        name: "Jennifer Lee",
        email: "jennifer@clientcompany.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      status: "completed",
      requestedAt: "March 25, 2025",
      viewedAt: "March 26, 2025",
      completedAt: "March 27, 2025",
    },
  ]

  // Mock versions data
  const versions = [
    {
      version: "2.1",
      date: "March 24, 2025",
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      changes: "Updated payment terms and delivery schedule",
      current: true,
    },
    {
      version: "2.0",
      date: "March 20, 2025",
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      changes: "Major revision with updated scope of work",
      current: false,
    },
    {
      version: "1.1",
      date: "March 18, 2025",
      user: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      changes: "Fixed typos and clarified terms in section 2",
      current: false,
    },
    {
      version: "1.0",
      date: "March 15, 2025",
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      changes: "Initial document creation",
      current: false,
    },
  ]

  // Helper function to get activity icon
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "edit":
        return <Pencil className="h-4 w-4 text-blue-500" />
      case "view":
        return <Eye className="h-4 w-4 text-gray-500" />
      case "comment":
        return <MessageSquare className="h-4 w-4 text-purple-500" />
      case "signature_request":
        return <PenTool className="h-4 w-4 text-green-500" />
      case "version":
        return <History className="h-4 w-4 text-orange-500" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/documents">
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{document.title}</h1>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>{document.type}</span>
              <span>•</span>
              <span>{document.size}</span>
              <span>•</span>
              <span>Version {document.version}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button size="sm" asChild>
            <Link href={`/dashboard/signatures/request?document=${document.id}`}>
              <PenTool className="mr-2 h-4 w-4" />
              Request Signature
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Pencil className="mr-2 h-4 w-4" />
                Edit Document
              </DropdownMenuItem>
              <DropdownMenuItem>
                <History className="mr-2 h-4 w-4" />
                View Version History
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share2 className="mr-2 h-4 w-4" />
                Share Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Document
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">Document Preview</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Preview is available for this document. Click below to open the full document.
                  </p>
                  <Button className="mt-4">Open Document</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="activity" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="signatures">Signatures</TabsTrigger>
              <TabsTrigger value="versions">Versions</TabsTrigger>
            </TabsList>
            <TabsContent value="activity" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Track all activities related to this document</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {activities.map((activity) => (
                      <div key={activity.id} className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                            {getActivityIcon(activity.type)}
                          </div>
                          {activity.id !== activities[activities.length - 1].id && (
                            <div className="h-full w-px bg-border mt-1"></div>
                          )}
                        </div>
                        <div className="space-y-1 pt-1">
                          <div className="flex items-center gap-x-2">
                            <div className="flex items-center gap-x-1">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                                <AvatarFallback>
                                  {activity.user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{activity.user.name}</span>
                            </div>
                            <span className="text-muted-foreground">
                              {activity.date} at {activity.time}
                            </span>
                          </div>
                          <p>{activity.description}</p>
                          {activity.type === "comment" && activity.comment && (
                            <div className="mt-2 rounded-lg bg-muted p-3 text-sm">{activity.comment}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Activity
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="signatures" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Signature Status</CardTitle>
                  <CardDescription>Track the status of signature requests for this document</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {signatures.map((signature) => (
                      <div
                        key={signature.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={signature.signer.avatar} alt={signature.signer.name} />
                            <AvatarFallback>
                              {signature.signer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{signature.signer.name}</p>
                            <p className="text-sm text-muted-foreground">{signature.signer.email}</p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 sm:mt-0 gap-2 sm:gap-4">
                          <Badge
                            variant={
                              signature.status === "completed"
                                ? "success"
                                : signature.status === "pending"
                                  ? "warning"
                                  : "secondary"
                            }
                            className={
                              signature.status === "completed"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                : signature.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                                  : ""
                            }
                          >
                            {signature.status === "completed"
                              ? "Completed"
                              : signature.status === "pending"
                                ? "Pending"
                                : signature.status}
                          </Badge>
                          <div className="text-sm text-muted-foreground">
                            {signature.status === "completed"
                              ? `Signed on ${signature.completedAt}`
                              : `Requested on ${signature.requestedAt}`}
                          </div>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View All Signatures</Button>
                  <Button asChild>
                    <Link href={`/dashboard/signatures/request?document=${document.id}`}>Request New Signature</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="versions" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Version History</CardTitle>
                  <CardDescription>Track all versions of this document</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {versions.map((version) => (
                      <div
                        key={version.version}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-muted rounded">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="flex items-center">
                              <p className="font-medium">Version {version.version}</p>
                              {version.current && <Badge className="ml-2">Current</Badge>}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {version.date} by {version.user.name}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 sm:mt-0 gap-2 sm:gap-4">
                          <p className="text-sm">{version.changes}</p>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                            {!version.current && (
                              <Button size="sm" variant="outline">
                                Restore
                              </Button>
                            )}
                          </div>
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
              <CardTitle>Document Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                <div className="flex items-center mt-1">
                  <Badge
                    variant="success"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                  >
                    Active
                  </Badge>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Description</h3>
                <p className="mt-1">{document.description}</p>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Owner</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={document.owner.avatar} alt={document.owner.name} />
                    <AvatarFallback>
                      {document.owner.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span>{document.owner.name}</span>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Project</h3>
                <p className="mt-1">{document.project}</p>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Tags</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {document.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Created</h3>
                <p className="mt-1">{document.createdAt}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Last Updated</h3>
                <p className="mt-1">{document.updatedAt}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Pencil className="mr-2 h-4 w-4" />
                Edit Details
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Document Access</CardTitle>
              <CardDescription>People with access to this document</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Alex Johnson" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Alex Johnson</p>
                    <p className="text-xs text-muted-foreground">Owner</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sarah Williams" />
                    <AvatarFallback>SW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Sarah Williams</p>
                    <p className="text-xs text-muted-foreground">Editor</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Michael Brown" />
                    <AvatarFallback>MB</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Michael Brown</p>
                    <p className="text-xs text-muted-foreground">Viewer</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Share2 className="mr-2 h-4 w-4" />
                Manage Access
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

