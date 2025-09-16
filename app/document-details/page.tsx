"use client"

import { SelectItem } from "@/components/ui/select"

import { SelectContent } from "@/components/ui/select"

import { SelectValue } from "@/components/ui/select"

import { SelectTrigger } from "@/components/ui/select"

import { Select } from "@/components/ui/select"

import { Checkbox } from "@/components/ui/checkbox"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  Check,
  Clock,
  Download,
  Eye,
  FileSignature,
  FileText,
  History,
  Info,
  MoreHorizontal,
  Pencil,
  Send,
  Share2,
  Shield,
  Trash,
  User,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
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

export default function DocumentDetailsPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [showShareDialog, setShowShareDialog] = useState(false)

  // Mock document data
  const document = {
    id: "DOC-1234",
    title: "Service Agreement - Acme Corp",
    status: "In Progress",
    created: "2023-10-15",
    updated: "2023-10-18",
    expires: "2024-10-15",
    pages: 3,
    creator: {
      name: "John Doe",
      email: "john@example.com",
    },
    signers: [
      {
        name: "John Doe",
        email: "john@example.com",
        status: "Completed",
        role: "Service Provider",
        signedAt: "2023-10-16",
      },
      { name: "Jane Smith", email: "jane@example.com", status: "Pending", role: "Client" },
    ],
    history: [
      {
        action: "Document Created",
        user: "John Doe",
        timestamp: "2023-10-15 10:30 AM",
        ip: "192.168.1.1",
        userAgent: "Chrome/Windows",
      },
      {
        action: "Document Sent",
        user: "John Doe",
        timestamp: "2023-10-15 10:35 AM",
        ip: "192.168.1.1",
        userAgent: "Chrome/Windows",
      },
      {
        action: "Document Viewed",
        user: "John Doe",
        timestamp: "2023-10-16 09:15 AM",
        ip: "192.168.1.1",
        userAgent: "Chrome/Windows",
      },
      {
        action: "Document Signed",
        user: "John Doe",
        timestamp: "2023-10-16 09:20 AM",
        ip: "192.168.1.1",
        userAgent: "Chrome/Windows",
      },
      {
        action: "Document Viewed",
        user: "Jane Smith",
        timestamp: "2023-10-17 02:45 PM",
        ip: "192.168.1.2",
        userAgent: "Safari/MacOS",
      },
      {
        action: "Reminder Sent",
        user: "System",
        timestamp: "2023-10-18 10:00 AM",
        ip: "10.0.0.1",
        userAgent: "System",
      },
    ],
    securityInfo: {
      encryption: "AES-256",
      certificateIssuer: "DocuFlow CA",
      certificateSerial: "DF-2023-10-15-1234",
      hashAlgorithm: "SHA-256",
      timestampAuthority: "DocuFlow TSA",
      auditTrailEnabled: true,
    },
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/documents">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            {document.title}
            <Badge variant="warning" className="ml-2">
              In Progress
            </Badge>
          </h1>
          <p className="text-muted-foreground">{document.id}</p>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" className="gap-2" onClick={() => setShowShareDialog(true)}>
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <MoreHorizontal className="h-4 w-4" />
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Pencil className="h-4 w-4 mr-2" />
                Edit Document
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Send className="h-4 w-4 mr-2" />
                Send Reminder
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash className="h-4 w-4 mr-2" />
                Delete Document
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="signers">Signers</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Document Details</CardTitle>
                <CardDescription>Overview of the document and its status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Created</p>
                    <p className="font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      {document.created}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Last Updated</p>
                    <p className="font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {document.updated}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Expires</p>
                    <p className="font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      {document.expires}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Pages</p>
                    <p className="font-medium flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      {document.pages}
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-medium mb-2">Created By</h3>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback>
                        {document.creator.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{document.creator.name}</div>
                      <div className="text-xs text-muted-foreground">{document.creator.email}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium">Signature Progress</h3>
                    <span className="text-sm">1 of 2 signed (50%)</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>

                <div className="flex justify-end">
                  <Button asChild>
                    <Link href={`/document-editor?id=${document.id}`}>View Document</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status</CardTitle>
                <CardDescription>Current document status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-md bg-warning/10 border border-warning/20 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
                  <div>
                    <h4 className="font-medium text-warning">Awaiting Signature</h4>
                    <p className="text-sm text-muted-foreground">This document is waiting for Jane Smith to sign.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Next Steps</h4>
                  <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Send className="h-4 w-4" />
                    </Button>
                    <span className="text-sm">Send reminder to Jane Smith</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <User className="h-4 w-4" />
                    </Button>
                    <span className="text-sm">Add another signer</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Calendar className="h-4 w-4" />
                    </Button>
                    <span className="text-sm">Set signing deadline</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions on this document</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {document.history.slice(0, 4).map((event, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      {event.action.includes("Created") ? (
                        <FileText className="h-4 w-4 text-primary" />
                      ) : event.action.includes("Sent") ? (
                        <Send className="h-4 w-4 text-primary" />
                      ) : event.action.includes("Viewed") ? (
                        <Eye className="h-4 w-4 text-primary" />
                      ) : event.action.includes("Signed") ? (
                        <FileSignature className="h-4 w-4 text-primary" />
                      ) : (
                        <Info className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{event.action}</p>
                        <span className="text-xs text-muted-foreground">{event.timestamp}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">by {event.user}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="ghost" size="sm" className="gap-1" onClick={() => setActiveTab("history")}>
                  <History className="h-3.5 w-3.5" />
                  View Full History
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="signers" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Document Signers</CardTitle>
                <CardDescription>People who need to sign this document</CardDescription>
              </div>
              <Button className="gap-2">
                <User className="h-4 w-4" />
                Add Signer
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {document.signers.map((signer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>
                          {signer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{signer.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <span>{signer.email}</span>
                          <span>•</span>
                          <span>{signer.role}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {signer.status === "Completed" ? (
                        <div className="flex items-center gap-2">
                          <Badge variant="success" className="flex items-center gap-1">
                            <Check className="h-3 w-3" />
                            Signed
                          </Badge>
                          <span className="text-xs text-muted-foreground">{signer.signedAt}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Badge variant="warning" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Pending
                          </Badge>
                          <Button variant="ghost" size="sm" className="h-8 gap-1">
                            <Send className="h-3 w-3" />
                            Remind
                          </Button>
                        </div>
                      )}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <User className="h-4 w-4 mr-2" />
                            Edit Signer
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Send className="h-4 w-4 mr-2" />
                            Resend Invitation
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="h-4 w-4 mr-2" />
                            Remove Signer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Signing Order</CardTitle>
              <CardDescription>The order in which signers must sign the document</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1 p-4 border rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        1
                      </div>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-xs text-muted-foreground">Service Provider</div>
                      </div>
                      <Badge variant="success" className="ml-auto">
                        Completed
                      </Badge>
                    </div>
                  </div>
                  <div className="flex-1 p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        2
                      </div>
                      <div>
                        <div className="font-medium">Jane Smith</div>
                        <div className="text-xs text-muted-foreground">Client</div>
                      </div>
                      <Badge variant="warning" className="ml-auto">
                        Pending
                      </Badge>
                    </div>
                  </div>
                </div>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Sequential Signing</AlertTitle>
                  <AlertDescription>
                    This document is set up for sequential signing. Jane Smith will receive the document after John Doe
                    completes their signature.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Document History</CardTitle>
              <CardDescription>Complete audit trail of all document activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {document.history.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {event.action.includes("Created") ? (
                          <FileText className="h-5 w-5 text-primary" />
                        ) : event.action.includes("Sent") ? (
                          <Send className="h-5 w-5 text-primary" />
                        ) : event.action.includes("Viewed") ? (
                          <Eye className="h-5 w-5 text-primary" />
                        ) : event.action.includes("Signed") ? (
                          <FileSignature className="h-5 w-5 text-primary" />
                        ) : (
                          <Info className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      {index < document.history.length - 1 && (
                        <div className="w-0.5 bg-muted-foreground/20 h-full mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{event.action}</h4>
                        <span className="text-sm text-muted-foreground">{event.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">by {event.user}</p>
                      <div className="mt-2 text-xs text-muted-foreground bg-muted/50 p-2 rounded-md">
                        <div className="flex items-center gap-2">
                          <span>IP Address: {event.ip}</span>
                          <span>•</span>
                          <span>Device: {event.userAgent}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Information</CardTitle>
              <CardDescription>Security and compliance details for this document</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Document Security</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-md bg-muted/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <h4 className="font-medium">Encryption</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{document.securityInfo.encryption}</p>
                  </div>
                  <div className="p-4 rounded-md bg-muted/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <h4 className="font-medium">Hash Algorithm</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{document.securityInfo.hashAlgorithm}</p>
                  </div>
                  <div className="p-4 rounded-md bg-muted/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <h4 className="font-medium">Certificate Issuer</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{document.securityInfo.certificateIssuer}</p>
                  </div>
                  <div className="p-4 rounded-md bg-muted/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <h4 className="font-medium">Certificate Serial</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{document.securityInfo.certificateSerial}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Timestamp Information</h3>
                <div className="p-4 rounded-md bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">Timestamp Authority</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{document.securityInfo.timestampAuthority}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Compliance</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 rounded-md bg-success/10">
                    <Check className="h-4 w-4 text-success" />
                    <span className="text-sm">eIDAS Compliant (EU)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-md bg-success/10">
                    <Check className="h-4 w-4 text-success" />
                    <span className="text-sm">ESIGN Act Compliant (US)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-md bg-success/10">
                    <Check className="h-4 w-4 text-success" />
                    <span className="text-sm">UETA Compliant (US)</span>
                  </div>
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Audit Trail Enabled</AlertTitle>
                <AlertDescription>
                  This document has a complete audit trail that tracks all actions and is stored securely. The audit
                  trail is tamper-proof and can be used as evidence of the signing process.
                </AlertDescription>
              </Alert>

              <div className="flex justify-end">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download Certificate
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download the security certificate for this document</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Share Document Dialog */}
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Share Document</DialogTitle>
            <DialogDescription>Share this document with others via email or link</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Share via Email</Label>
              <div className="flex gap-2">
                <Input placeholder="Enter email address" className="flex-1" />
                <Button>Send</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Share via Link</Label>
              <div className="flex gap-2">
                <Input value="https://docuflow.com/d/s/1a2b3c4d5e6f7g8h9i0j" readOnly className="flex-1" />
                <Button variant="outline">Copy</Button>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox id="link-password" />
                <label htmlFor="link-password" className="text-sm">
                  Protect with password
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Access Permissions</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="perm-view" defaultChecked />
                  <label htmlFor="perm-view" className="text-sm">
                    Allow viewing
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="perm-download" defaultChecked />
                  <label htmlFor="perm-download" className="text-sm">
                    Allow downloading
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="perm-sign" />
                  <label htmlFor="perm-sign" className="text-sm">
                    Allow signing
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Link Expiration</Label>
              <Select defaultValue="7days">
                <SelectTrigger>
                  <SelectValue placeholder="Select expiration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1day">1 day</SelectItem>
                  <SelectItem value="7days">7 days</SelectItem>
                  <SelectItem value="30days">30 days</SelectItem>
                  <SelectItem value="never">Never expires</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowShareDialog(false)}>
              Cancel
            </Button>
            <Button type="submit">Share Document</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

