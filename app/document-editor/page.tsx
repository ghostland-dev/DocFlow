"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Eye,
  FilePenLineIcon as Signature,
  Image,
  Layers,
  LayoutGrid,
  Pencil,
  Plus,
  Save,
  Send,
  Text,
  Type,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { KeyIcon as SignatureIcon } from "lucide-react"

export default function DocumentEditor() {
  const [activeTab, setActiveTab] = useState("edit")
  const [documentTitle, setDocumentTitle] = useState("Service Agreement - Draft")

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="border-b bg-background p-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="/dashboard">
                <ArrowLeft className="h-4 w-4" />
              </a>
            </Button>
            <div className="flex items-center gap-3">
              <Input
                value={documentTitle}
                onChange={(e) => setDocumentTitle(e.target.value)}
                className="text-lg font-medium h-9 w-[300px] border-transparent focus-visible:border-input"
              />
              <Badge variant="outline" className="text-xs font-normal">
                Draft
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <Save className="h-4 w-4" />
              Save
            </Button>
            <Button variant="outline" className="gap-2">
              <Eye className="h-4 w-4" />
              Preview
            </Button>
            <Button className="gap-2">
              <Send className="h-4 w-4" />
              Send for Signature
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar - Document structure */}
        <div className="w-64 border-r bg-background p-4 flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Document Structure</h3>
            <Button variant="ghost" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <div className="border rounded-md p-2 bg-muted/50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Cover Page</span>
                <div className="flex items-center">
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Layers className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="border rounded-md p-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Terms & Conditions</span>
                <div className="flex items-center">
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Layers className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="border rounded-md p-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Service Details</span>
                <div className="flex items-center">
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Layers className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="border rounded-md p-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Payment Terms</span>
                <div className="flex items-center">
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Layers className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="border rounded-md p-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Signature Page</span>
                <div className="flex items-center">
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Layers className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-2">Signers</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 border rounded-md">
                <Avatar className="h-7 w-7">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <div>John Doe</div>
                  <div className="text-xs text-muted-foreground">john@example.com</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 border rounded-md">
                <Avatar className="h-7 w-7">
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <div>Jane Smith</div>
                  <div className="text-xs text-muted-foreground">jane@example.com</div>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full gap-1 mt-2">
                <Plus className="h-3.5 w-3.5" />
                Add Signer
              </Button>
            </div>
          </div>
        </div>

        {/* Main content - Document editor */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="border-b">
            <div className="container">
              <Tabs defaultValue="edit" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="edit">Edit</TabsTrigger>
                  <TabsTrigger value="fields">Form Fields</TabsTrigger>
                  <TabsTrigger value="signatures">Signatures</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="flex-1 overflow-hidden flex">
            {/* Document preview */}
            <div className="flex-1 overflow-y-auto bg-muted/30 p-8 flex justify-center">
              <div className="w-[794px] bg-white shadow-md">
                {/* This would be the actual document content */}
                <div className="p-16 min-h-[1123px]">
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
                          <p>Company Name: _________________</p>
                          <p>Address: _______________________</p>
                          <p>Contact: _______________________</p>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Client:</p>
                          <p>Company Name: _________________</p>
                          <p>Address: _______________________</p>
                          <p>Contact: _______________________</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold border-b pb-2 mb-4">2. SERVICES</h2>
                      <p>The Service Provider agrees to provide the following services to the Client:</p>
                      <div className="my-4 pl-6">
                        <ul className="list-disc space-y-2">
                          <li>Service description item 1</li>
                          <li>Service description item 2</li>
                          <li>Service description item 3</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold border-b pb-2 mb-4">3. TERM</h2>
                      <p>This Agreement shall commence on _____________ and continue until _____________.</p>
                    </div>

                    {activeTab === "signatures" && (
                      <div className="mt-12 border-2 border-dashed border-primary/30 p-4 rounded-md bg-primary/5 flex items-center justify-center">
                        <div className="text-center">
                          <SignatureIcon className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="text-sm font-medium">Signature Field</p>
                          <p className="text-xs text-muted-foreground">Assigned to: John Doe</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right sidebar - Tools */}
            {activeTab !== "edit" && (
              <div className="w-64 border-l bg-background p-4 overflow-y-auto">
                {activeTab === "fields" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3">Form Fields</h3>
                      <div className="space-y-2">
                        <Card className="cursor-grab">
                          <CardContent className="p-3 flex items-center gap-2">
                            <Type className="h-4 w-4 text-primary" />
                            <span className="text-sm">Text Field</span>
                          </CardContent>
                        </Card>
                        <Card className="cursor-grab">
                          <CardContent className="p-3 flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span className="text-sm">Checkbox</span>
                          </CardContent>
                        </Card>
                        <Card className="cursor-grab">
                          <CardContent className="p-3 flex items-center gap-2">
                            <ChevronDown className="h-4 w-4 text-primary" />
                            <span className="text-sm">Dropdown</span>
                          </CardContent>
                        </Card>
                        <Card className="cursor-grab">
                          <CardContent className="p-3 flex items-center gap-2">
                            <Text className="h-4 w-4 text-primary" />
                            <span className="text-sm">Text Area</span>
                          </CardContent>
                        </Card>
                        <Card className="cursor-grab">
                          <CardContent className="p-3 flex items-center gap-2">
                            <LayoutGrid className="h-4 w-4 text-primary" />
                            <span className="text-sm">Radio Group</span>
                          </CardContent>
                        </Card>
                        <Card className="cursor-grab">
                          <CardContent className="p-3 flex items-center gap-2">
                            <Image className="h-4 w-4 text-primary" />
                            <span className="text-sm">Image Upload</span>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-3">Field Properties</h3>
                      <p className="text-xs text-muted-foreground mb-4">
                        Drag a field to the document, then configure its properties here
                      </p>
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-medium">Field Name</label>
                          <Input placeholder="Enter field name" className="h-8 mt-1" />
                        </div>
                        <div>
                          <label className="text-xs font-medium">Required Field</label>
                          <Select>
                            <SelectTrigger className="h-8 mt-1">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-xs font-medium">Assigned To</label>
                          <Select>
                            <SelectTrigger className="h-8 mt-1">
                              <SelectValue placeholder="Select signer" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="john">John Doe</SelectItem>
                              <SelectItem value="jane">Jane Smith</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "signatures" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3">Signature Fields</h3>
                      <div className="space-y-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Card className="cursor-grab">
                                <CardContent className="p-3 flex items-center gap-2">
                                  <Signature className="h-4 w-4 text-primary" />
                                  <span className="text-sm">Signature</span>
                                </CardContent>
                              </Card>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">Drag to add a signature field</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Card className="cursor-grab">
                                <CardContent className="p-3 flex items-center gap-2">
                                  <Type className="h-4 w-4 text-primary" />
                                  <span className="text-sm">Initial</span>
                                </CardContent>
                              </Card>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">Drag to add an initial field</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Card className="cursor-grab">
                                <CardContent className="p-3 flex items-center gap-2">
                                  <SignatureIcon className="h-4 w-4 text-primary" />
                                  <span className="text-sm">Date Signed</span>
                                </CardContent>
                              </Card>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">Drag to add a date field</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-3">Signature Settings</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-medium">Assigned To</label>
                          <Select>
                            <SelectTrigger className="h-8 mt-1">
                              <SelectValue placeholder="Select signer" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="john">John Doe</SelectItem>
                              <SelectItem value="jane">Jane Smith</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-xs font-medium">Signature Type</label>
                          <Select>
                            <SelectTrigger className="h-8 mt-1">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="electronic">Electronic</SelectItem>
                              <SelectItem value="digital">Digital Certificate</SelectItem>
                              <SelectItem value="drawn">Draw Signature</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-xs font-medium">Required Field</label>
                          <Select defaultValue="yes">
                            <SelectTrigger className="h-8 mt-1">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-3">Signing Order</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded-md bg-muted/50">
                          <div className="flex items-center gap-2">
                            <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs">
                              1
                            </span>
                            <span className="text-sm">John Doe</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center gap-2">
                            <span className="flex items-center justify-center h-5 w-5 rounded-full bg-muted text-muted-foreground text-xs">
                              2
                            </span>
                            <span className="text-sm">Jane Smith</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

