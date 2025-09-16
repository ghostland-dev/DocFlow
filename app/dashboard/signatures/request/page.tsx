import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft, FileText, Plus, Trash2, Calendar } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function RequestSignaturePage() {
  // Mock data for documents
  const documents = [
    {
      id: "1",
      name: "Contract Agreement",
      date: "Mar 28, 2025",
      status: "draft",
      type: "PDF",
    },
    {
      id: "2",
      name: "NDA Document",
      date: "Mar 27, 2025",
      status: "draft",
      type: "DOCX",
    },
    {
      id: "3",
      name: "Project Proposal",
      date: "Mar 26, 2025",
      status: "draft",
      type: "PDF",
    },
  ]

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/signatures">
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Request Signature</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Select Document</CardTitle>
              <CardDescription>Choose a document that needs to be signed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="existing" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="existing">Existing Document</TabsTrigger>
                  <TabsTrigger value="upload">Upload New</TabsTrigger>
                </TabsList>

                <TabsContent value="existing" className="mt-4 space-y-4">
                  <div className="relative">
                    <Input type="search" placeholder="Search documents..." className="pl-8" />
                    <FileText className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>

                  <div className="space-y-2">
                    {documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {doc.type} · {doc.date}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary">{doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}</Badge>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Load More Documents
                  </Button>
                </TabsContent>

                <TabsContent value="upload" className="mt-4 space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <FileText className="h-8 w-8 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Drag and drop your file here</p>
                        <p className="text-sm text-muted-foreground">Supports PDF, DOCX, and TXT files up to 10MB</p>
                      </div>
                      <Button variant="outline">Browse Files</Button>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="document-title">Document Title</Label>
                      <Input id="document-title" placeholder="Enter document title" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="document-description">Description (Optional)</Label>
                      <Textarea
                        id="document-description"
                        placeholder="Enter a brief description of the document"
                        rows={3}
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Add Signers</CardTitle>
              <CardDescription>Add people who need to sign this document</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Signer 1" />
                        <AvatarFallback>S1</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Signer 1</p>
                        <p className="text-sm text-muted-foreground">Will sign the document first</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Separator className="my-4" />
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="signer1-name">Name</Label>
                        <Input id="signer1-name" placeholder="Enter signer's name" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="signer1-email">Email</Label>
                        <Input id="signer1-email" type="email" placeholder="Enter signer's email" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="signer1-message">Personal Message (Optional)</Label>
                      <Textarea id="signer1-message" placeholder="Add a personal message to this signer" rows={2} />
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Another Signer
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Signing Options</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="signing-order">Sequential Signing</Label>
                    <p className="text-sm text-muted-foreground">
                      Signers will receive the document in the order listed above
                    </p>
                  </div>
                  <Switch id="signing-order" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="reminders">Automatic Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Send reminders to signers who haven't signed after 3 days
                    </p>
                  </div>
                  <Switch id="reminders" defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Request Details</CardTitle>
              <CardDescription>Configure additional options for this signature request</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="request-title">Request Title</Label>
                <Input id="request-title" placeholder="Enter a title for this request" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="request-message">Message to All Signers</Label>
                <Textarea id="request-message" placeholder="Add a message that all signers will see" rows={3} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="expiration">Expiration Date</Label>
                <div className="flex">
                  <div className="relative flex-1">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="expiration" type="date" className="pl-8" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">The request will expire if not completed by this date</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="project-select">Project (Optional)</Label>
                <Select>
                  <SelectTrigger id="project-select">
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website-redesign">Website Redesign</SelectItem>
                    <SelectItem value="client-onboarding">Client Onboarding</SelectItem>
                    <SelectItem value="product-launch">Product Launch</SelectItem>
                    <SelectItem value="hr-documentation">HR Documentation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Options</CardTitle>
              <CardDescription>Add extra security for your signature request</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="password-protection">Password Protection</Label>
                  <p className="text-sm text-muted-foreground">Require a password to access the document</p>
                </div>
                <Switch id="password-protection" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sms-authentication">SMS Authentication</Label>
                  <p className="text-sm text-muted-foreground">Verify signer identity with SMS code</p>
                </div>
                <Switch id="sms-authentication" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="private-signing">Private Signing</Label>
                  <p className="text-sm text-muted-foreground">Hide signers from each other</p>
                </div>
                <Switch id="private-signing" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Configure notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notify-signed">When Document is Signed</Label>
                  <p className="text-sm text-muted-foreground">Get notified when someone signs</p>
                </div>
                <Switch id="notify-signed" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notify-viewed">When Document is Viewed</Label>
                  <p className="text-sm text-muted-foreground">Get notified when someone views the document</p>
                </div>
                <Switch id="notify-viewed" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notify-completed">When Request is Completed</Label>
                  <p className="text-sm text-muted-foreground">Get notified when all signatures are completed</p>
                </div>
                <Switch id="notify-completed" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between space-x-2">
            <Button variant="outline" asChild className="flex-1">
              <Link href="/dashboard/signatures">Cancel</Link>
            </Button>
            <Button className="flex-1">Send for Signature</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

