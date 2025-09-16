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
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
  Eye,
  Mail,
  PenTool,
  RefreshCw,
  XCircle,
} from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export default function SignatureDetailsPage({ params }: { params: { id: string } }) {
  // Mock signature request data
  const signatureRequest = {
    id: params.id,
    title: "Service Agreement - Client XYZ",
    status: "in_progress", // in_progress, completed, expired
    createdAt: "March 25, 2025",
    expiresAt: "April 25, 2025",
    document: {
      name: "Service Agreement Contract",
      type: "PDF",
      size: "1.2 MB",
      id: "doc-123",
    },
    creator: {
      name: "Alex Johnson",
      email: "alex@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    progress: 50, // percentage of completed signatures
    message: "Please review and sign this service agreement for our upcoming project.",
  }

  // Mock signers data
  const signers = [
    {
      id: "1",
      name: "David Clark",
      email: "david@clientcompany.com",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "completed",
      role: "Client Representative",
      signedAt: "March 27, 2025",
      viewedAt: "March 26, 2025",
      deliveryStatus: "delivered",
    },
    {
      id: "2",
      name: "Jennifer Lee",
      email: "jennifer@clientcompany.com",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "pending",
      role: "Legal Counsel",
      signedAt: null,
      viewedAt: "March 28, 2025",
      deliveryStatus: "delivered",
    },
    {
      id: "3",
      name: "Robert Wilson",
      email: "robert@clientcompany.com",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "waiting",
      role: "CEO",
      signedAt: null,
      viewedAt: null,
      deliveryStatus: "delivered",
      waitingFor: "Jennifer Lee",
    },
  ]

  // Mock activity data
  const activities = [
    {
      id: "1",
      type: "created",
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "March 25, 2025",
      time: "10:30 AM",
      description: "Created signature request",
    },
    {
      id: "2",
      type: "sent",
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "March 25, 2025",
      time: "10:32 AM",
      description: "Sent signature request to all signers",
    },
    {
      id: "3",
      type: "viewed",
      user: {
        name: "David Clark",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "March 26, 2025",
      time: "9:15 AM",
      description: "Viewed the document",
    },
    {
      id: "4",
      type: "signed",
      user: {
        name: "David Clark",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "March 27, 2025",
      time: "2:45 PM",
      description: "Signed the document",
    },
    {
      id: "5",
      type: "viewed",
      user: {
        name: "Jennifer Lee",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      date: "March 28, 2025",
      time: "11:20 AM",
      description: "Viewed the document",
    },
  ]

  // Helper function to get activity icon
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "created":
        return <FileText className="h-4 w-4 text-blue-500" />
      case "sent":
        return <Send className="h-4 w-4 text-blue-500" />
      case "viewed":
        return <Eye className="h-4 w-4 text-gray-500" />
      case "signed":
        return <PenTool className="h-4 w-4 text-green-500" />
      case "reminder":
        return <RefreshCw className="h-4 w-4 text-orange-500" />
      case "expired":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  // Helper function to get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="success" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            <CheckCircle className="mr-1 h-3 w-3" />
            Completed
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="warning" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
            <Clock className="mr-1 h-3 w-3" />
            Pending
          </Badge>
        )
      case "waiting":
        return (
          <Badge variant="secondary">
            <Clock className="mr-1 h-3 w-3" />
            Waiting
          </Badge>
        )
      default:
        return (
          <Badge variant="outline">
            <AlertCircle className="mr-1 h-3 w-3" />
            Unknown
          </Badge>
        )
    }
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/signatures">
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{signatureRequest.title}</h1>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Created on {signatureRequest.createdAt}</span>
              <span>•</span>
              <span>Expires on {signatureRequest.expiresAt}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Send Reminder
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
                <Send className="mr-2 h-4 w-4" />
                Resend to All
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                Preview Document
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                View Document Details
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <XCircle className="mr-2 h-4 w-4" />
                Cancel Request
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Signature Progress</CardTitle>
              <CardDescription>Track the progress of all signers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>{signatureRequest.progress}% Complete</span>
                </div>
                <Progress value={signatureRequest.progress} className="h-2" />
              </div>

              <div className="space-y-4">
                {signers.map((signer) => (
                  <div
                    key={signer.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={signer.avatar} alt={signer.name} />
                        <AvatarFallback>
                          {signer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{signer.name}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Mail className="mr-1 h-3 w-3" />
                          <span>{signer.email}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{signer.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 sm:mt-0 gap-2 sm:gap-4">
                      {getStatusBadge(signer.status)}
                      <div className="text-sm text-muted-foreground">
                        {signer.status === "completed"
                          ? `Signed on ${signer.signedAt}`
                          : signer.status === "pending"
                            ? signer.viewedAt
                              ? `Viewed on ${signer.viewedAt}`
                              : "Not viewed yet"
                            : `Waiting for ${signer.waitingFor}`}
                      </div>
                      <Button size="sm" variant="outline">
                        {signer.status === "completed" ? "View Signature" : "Send Reminder"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="activity" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="activity">Activity Log</TabsTrigger>
              <TabsTrigger value="document">Document</TabsTrigger>
            </TabsList>
            <TabsContent value="activity" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Activity History</CardTitle>
                  <CardDescription>Track all activities related to this signature request</CardDescription>
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
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Complete History
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="document" className="mt-4">
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
                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/dashboard/documents/${signatureRequest.document.id}`}>View Document Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Request Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                <div className="flex items-center mt-1">
                  <Badge
                    variant={
                      signatureRequest.status === "completed"
                        ? "success"
                        : signatureRequest.status === "in_progress"
                          ? "warning"
                          : "destructive"
                    }
                    className={
                      signatureRequest.status === "completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                        : signatureRequest.status === "in_progress"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                    }
                  >
                    {signatureRequest.status === "completed"
                      ? "Completed"
                      : signatureRequest.status === "in_progress"
                        ? "In Progress"
                        : "Expired"}
                  </Badge>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Document</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>{signatureRequest.document.name}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {signatureRequest.document.type} • {signatureRequest.document.size}
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Created By</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={signatureRequest.creator.avatar} alt={signatureRequest.creator.name} />
                    <AvatarFallback>
                      {signatureRequest.creator.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span>{signatureRequest.creator.name}</span>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Message to Signers</h3>
                <p className="mt-1 text-sm">{signatureRequest.message}</p>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Created</h3>
                <p className="mt-1">{signatureRequest.createdAt}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Expires</h3>
                <p className="mt-1">{signatureRequest.expiresAt}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Edit Request
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
              <CardDescription>Manage this signature request</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">
                <RefreshCw className="mr-2 h-4 w-4" />
                Send Reminder to All
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Document
              </Button>
              <Button variant="outline" className="w-full">
                <Eye className="mr-2 h-4 w-4" />
                Preview Document
              </Button>
              <Button variant="outline" className="w-full text-destructive">
                <XCircle className="mr-2 h-4 w-4" />
                Cancel Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
