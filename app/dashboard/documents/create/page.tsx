import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, FileText, Upload, File, FileUp, Plus } from "lucide-react"
import Link from "next/link"

export default function CreateDocumentPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/documents">
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Create New Document</h1>
        </div>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upload">Upload Document</TabsTrigger>
          <TabsTrigger value="template">Use Template</TabsTrigger>
          <TabsTrigger value="create">Create from Scratch</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Document</CardTitle>
              <CardDescription>Upload an existing document from your computer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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

              <Separator />

              <div className="grid gap-2">
                <Label>Upload File</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Drag and drop your file here</p>
                      <p className="text-sm text-muted-foreground">Supports PDF, DOCX, and TXT files up to 10MB</p>
                    </div>
                    <Button variant="outline">
                      <FileUp className="mr-2 h-4 w-4" />
                      Browse Files
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="project">Project (Optional)</Label>
                <Select>
                  <SelectTrigger id="project">
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website-redesign">Website Redesign</SelectItem>
                    <SelectItem value="client-onboarding">Client Onboarding</SelectItem>
                    <SelectItem value="product-launch">Product Launch</SelectItem>
                    <SelectItem value="hr-documentation">HR Documentation</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Associate this document with a project for better organization
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline" asChild>
                <Link href="/dashboard/documents">Cancel</Link>
              </Button>
              <Button>Upload Document</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="template" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Use Template</CardTitle>
              <CardDescription>Start with a pre-designed template for common document types</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                  <CardHeader className="p-4">
                    <div className="p-2 bg-primary/10 rounded-full w-fit">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg mt-2">NDA Agreement</CardTitle>
                    <CardDescription>Standard non-disclosure agreement template</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="ghost" className="w-full">
                      Use Template
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                  <CardHeader className="p-4">
                    <div className="p-2 bg-primary/10 rounded-full w-fit">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg mt-2">Employment Contract</CardTitle>
                    <CardDescription>Standard employment agreement template</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="ghost" className="w-full">
                      Use Template
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                  <CardHeader className="p-4">
                    <div className="p-2 bg-primary/10 rounded-full w-fit">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg mt-2">Service Agreement</CardTitle>
                    <CardDescription>Template for service-based contracts</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="ghost" className="w-full">
                      Use Template
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                  <CardHeader className="p-4">
                    <div className="p-2 bg-primary/10 rounded-full w-fit">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg mt-2">Invoice Template</CardTitle>
                    <CardDescription>Professional invoice with payment terms</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="ghost" className="w-full">
                      Use Template
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                  <CardHeader className="p-4">
                    <div className="p-2 bg-primary/10 rounded-full w-fit">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg mt-2">Project Proposal</CardTitle>
                    <CardDescription>Template for client project proposals</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="ghost" className="w-full">
                      Use Template
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="cursor-pointer hover:bg-accent/50 transition-colors border-dashed border-2">
                  <CardHeader className="p-4 flex items-center justify-center h-full">
                    <div className="flex flex-col items-center text-center">
                      <Plus className="h-8 w-8 text-muted-foreground mb-2" />
                      <CardTitle className="text-lg">Browse More Templates</CardTitle>
                      <CardDescription>Explore our template library</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              <Separator />

              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="template-title">Document Title</Label>
                  <Input id="template-title" placeholder="Enter document title" />
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
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline" asChild>
                <Link href="/dashboard/documents">Cancel</Link>
              </Button>
              <Button disabled>Continue with Template</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Create from Scratch</CardTitle>
              <CardDescription>Create a new document using our online editor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="new-document-title">Document Title</Label>
                  <Input id="new-document-title" placeholder="Enter document title" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="document-type">Document Type</Label>
                  <Select>
                    <SelectTrigger id="document-type">
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="agreement">Agreement</SelectItem>
                      <SelectItem value="proposal">Proposal</SelectItem>
                      <SelectItem value="letter">Letter</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="new-document-description">Description (Optional)</Label>
                  <Textarea
                    id="new-document-description"
                    placeholder="Enter a brief description of the document"
                    rows={3}
                  />
                </div>
              </div>

              <Separator />

              <div className="border rounded-lg p-6 text-center">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <File className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Start with a blank document</p>
                    <p className="text-sm text-muted-foreground">Create your document using our online editor</p>
                  </div>
                  <Button>Open Editor</Button>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="project-create">Project (Optional)</Label>
                <Select>
                  <SelectTrigger id="project-create">
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website-redesign">Website Redesign</SelectItem>
                    <SelectItem value="client-onboarding">Client Onboarding</SelectItem>
                    <SelectItem value="product-launch">Product Launch</SelectItem>
                    <SelectItem value="hr-documentation">HR Documentation</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Associate this document with a project for better organization
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline" asChild>
                <Link href="/dashboard/documents">Cancel</Link>
              </Button>
              <Button>Create Document</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
