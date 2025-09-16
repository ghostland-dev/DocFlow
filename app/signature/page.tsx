"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Check, Download, Info, Pen, Send, Upload } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SignaturePage() {
  const [signatureMethod, setSignatureMethod] = useState("draw")
  const [signatureComplete, setSignatureComplete] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  // Mock document data
  const document = {
    id: "DOC-1234",
    title: "Service Agreement - Acme Corp",
    status: "Awaiting Signature",
    created: "2023-10-15",
    pages: 3,
    signers: [
      { name: "John Doe", email: "john@example.com", status: "Completed", role: "Service Provider" },
      { name: "Jane Smith", email: "jane@example.com", status: "Pending", role: "Client" },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b bg-background p-4 sticky top-0 z-10">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-semibold">{document.title}</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{document.id}</span>
                <span>•</span>
                <Badge variant="outline">{document.status}</Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
            <Button variant="outline" className="gap-2">
              <Send className="h-4 w-4" />
              Share
            </Button>
            <Button className="gap-2" disabled={!signatureComplete}>
              <Check className="h-4 w-4" />
              Complete Signing
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar - Document info */}
        <div className="w-80 border-r bg-background p-4 flex flex-col overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Document Information</h3>
              <Card>
                <CardContent className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <Badge variant="warning">Awaiting Signature</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Created</span>
                    <span className="text-sm">{document.created}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Pages</span>
                    <span className="text-sm">{document.pages}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Completion</span>
                    <span className="text-sm">1 of 2 signed</span>
                  </div>
                  <Progress value={50} className="h-1.5 mt-1" />
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="font-medium mb-3">Signers</h3>
              <div className="space-y-3">
                {document.signers.map((signer, index) => (
                  <Card key={index} className={signer.status === "Completed" ? "bg-muted/50" : ""}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback>
                            {signer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-medium">{signer.name}</div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1">
                            <span>{signer.email}</span>
                            <span>•</span>
                            <span>{signer.role}</span>
                          </div>
                        </div>
                        {signer.status === "Completed" ? (
                          <div className="h-6 w-6 rounded-full bg-success flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-success-foreground" />
                          </div>
                        ) : (
                          <div className="h-6 w-6 rounded-full border-2 border-warning flex items-center justify-center">
                            <Pen className="h-3 w-3 text-warning" />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Legally Binding</AlertTitle>
              <AlertDescription>This document will be legally binding once all parties have signed.</AlertDescription>
            </Alert>

            <div>
              <h3 className="font-medium mb-3">Audit Trail</h3>
              <Card>
                <CardContent className="p-4 space-y-4 text-sm">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-success"></div>
                      <span className="font-medium">Document Created</span>
                    </div>
                    <div className="ml-4 text-xs text-muted-foreground">Oct 15, 2023 at 10:30 AM</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-success"></div>
                      <span className="font-medium">John Doe Signed</span>
                    </div>
                    <div className="ml-4 text-xs text-muted-foreground">Oct 16, 2023 at 2:15 PM</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-warning"></div>
                      <span className="font-medium">Awaiting Jane Smith</span>
                    </div>
                    <div className="ml-4 text-xs text-muted-foreground">Signature requested Oct 16, 2023</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Main content - Document viewer */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto bg-muted/50 p-8 flex justify-center">
            <div className="w-[794px] bg-white shadow-md">
              {/* Document page */}
              <div className="p-16 min-h-[1123px] relative">
                {currentPage === 1 && (
                  <>
                    <div className="text-center mb-16">
                      <h1 className="text-3xl font-bold mb-4">SERVICE AGREEMENT</h1>
                      <p className="text-muted-foreground">This agreement is made between the parties listed below</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold border-b pb-2 mb-4">1. PARTIES</h2>
                        <div className="grid grid-cols-2 gap-8">
                          <div>
                            <p className="font-medium mb-2">Service Provider:</p>
                            <p>Company Name: Acme Services Inc.</p>
                            <p>Address: 123 Business Ave, Suite 100</p>
                            <p>Contact: John Doe</p>
                          </div>
                          <div>
                            <p className="font-medium mb-2">Client:</p>
                            <p>Company Name: Client Corp</p>
                            <p>Address: 456 Client Street</p>
                            <p>Contact: Jane Smith</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold border-b pb-2 mb-4">2. SERVICES</h2>
                        <p>The Service Provider agrees to provide the following services to the Client:</p>
                        <div className="my-4 pl-6">
                          <ul className="list-disc space-y-2">
                            <li>Website development and design</li>
                            <li>Content management system implementation</li>
                            <li>Search engine optimization</li>
                            <li>Ongoing maintenance and support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {currentPage === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold border-b pb-2 mb-4">3. TERM</h2>
                      <p>
                        This Agreement shall commence on October 20, 2023 and continue until October 19, 2024, unless
                        terminated earlier in accordance with this Agreement.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold border-b pb-2 mb-4">4. PAYMENT</h2>
                      <p className="mb-2">
                        In consideration for the Services, the Client shall pay the Service Provider as follows:
                      </p>
                      <p>
                        <strong>Fee:</strong> $10,000 USD
                      </p>
                      <p>
                        <strong>Payment Schedule:</strong> 50% upon signing, 50% upon completion
                      </p>
                      <p>
                        <strong>Payment Method:</strong> Bank transfer to account specified in invoice
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold border-b pb-2 mb-4">5. CONFIDENTIALITY</h2>
                      <p>
                        Both parties agree to maintain the confidentiality of any proprietary information shared during
                        the course of this Agreement. This includes, but is not limited to, business strategies,
                        customer lists, and technical specifications.
                      </p>
                    </div>
                  </div>
                )}

                {currentPage === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold border-b pb-2 mb-4">6. TERMINATION</h2>
                      <p>
                        Either party may terminate this Agreement with 30 days written notice. In the event of
                        termination, the Client shall pay for all Services rendered up to the date of termination.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold border-b pb-2 mb-4">7. SIGNATURES</h2>
                      <p className="mb-6">
                        By signing below, the parties agree to be bound by the terms of this Agreement.
                      </p>

                      <div className="grid grid-cols-2 gap-8 mt-10">
                        <div>
                          <p className="font-medium mb-2">Service Provider:</p>
                          <div className="border-b border-dashed border-black h-12 mb-2 flex items-center">
                            <img src="/placeholder.svg?height=40&width=150" alt="John Doe Signature" className="h-10" />
                          </div>
                          <p>Name: John Doe</p>
                          <p>Date: October 16, 2023</p>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Client:</p>
                          <div className="border-b border-dashed border-black h-12 mb-2 relative">
                            {!signatureComplete && (
                              <div className="absolute inset-0 bg-warning/10 border-2 border-warning flex items-center justify-center">
                                <span className="text-sm text-warning font-medium">Your Signature Required</span>
                              </div>
                            )}
                            {signatureComplete && (
                              <img src="/placeholder.svg?height=40&width=150" alt="Your Signature" className="h-10" />
                            )}
                          </div>
                          <p>Name: Jane Smith</p>
                          <p>Date: {signatureComplete ? "October 18, 2023" : "_______________"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Page number */}
                <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
                  Page {currentPage} of {document.pages}
                </div>
              </div>
            </div>
          </div>

          {/* Document navigation */}
          <div className="border-t bg-background p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span className="text-sm">
                Page {currentPage} of {document.pages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, document.pages))}
                disabled={currentPage === document.pages}
              >
                Next
              </Button>
            </div>

            {currentPage === 3 && !signatureComplete && (
              <div className="flex items-center gap-4">
                <Tabs defaultValue={signatureMethod} onValueChange={setSignatureMethod} className="w-[400px]">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="draw">Draw</TabsTrigger>
                    <TabsTrigger value="type">Type</TabsTrigger>
                    <TabsTrigger value="upload">Upload</TabsTrigger>
                  </TabsList>
                  <TabsContent value="draw" className="mt-2">
                    <Card>
                      <CardContent className="p-4">
                        <div className="border-2 border-dashed border-muted-foreground rounded-md h-24 flex items-center justify-center bg-muted/30">
                          <p className="text-sm text-muted-foreground">Draw your signature here</p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          Clear
                        </Button>
                        <Button size="sm" onClick={() => setSignatureComplete(true)}>
                          Sign Document
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="type" className="mt-2">
                    <Card>
                      <CardContent className="p-4 space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Type your full name</label>
                          <input type="text" className="w-full p-2 border rounded-md" placeholder="Jane Smith" />
                        </div>
                        <div className="border rounded-md p-4 bg-muted/30">
                          <p className="italic text-center">Jane Smith</p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end">
                        <Button size="sm" onClick={() => setSignatureComplete(true)}>
                          Sign Document
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="upload" className="mt-2">
                    <Card>
                      <CardContent className="p-4">
                        <div className="border-2 border-dashed border-muted-foreground rounded-md h-24 flex flex-col items-center justify-center bg-muted/30 p-4">
                          <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground text-center">
                            Drag and drop your signature image or click to browse
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end">
                        <Button size="sm" onClick={() => setSignatureComplete(true)}>
                          Sign Document
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {(currentPage !== 3 || signatureComplete) && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-[400px] flex justify-end">
                      <Button
                        variant={signatureComplete ? "success" : "outline"}
                        className="gap-2"
                        onClick={() => setCurrentPage(3)}
                      >
                        {signatureComplete ? (
                          <>
                            <Check className="h-4 w-4" />
                            Signed Successfully
                          </>
                        ) : (
                          <>
                            <Pen className="h-4 w-4" />
                            Go to Signature Page
                          </>
                        )}
                      </Button>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    {signatureComplete
                      ? "You have successfully signed this document"
                      : "Navigate to page 3 to sign this document"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
