"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  Check,
  Copy,
  Edit,
  FileSignature,
  FileText,
  Mail,
  MoreHorizontal,
  Plus,
  Save,
  Settings,
  Trash,
  User,
  Users,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

export default function WorkflowEditorPage() {
  const [activeTab, setActiveTab] = useState("editor")
  const [showAddStepDialog, setShowAddStepDialog] = useState(false)
  const [selectedStepType, setSelectedStepType] = useState<string | null>(null)

  // Mock workflow data
  const workflow = {
    id: "wf-001",
    name: "Client Onboarding",
    description: "Standard client onboarding process with document collection and signatures",
    status: "Draft",
    steps: [
      {
        id: "step-1",
        type: "form",
        name: "Client Information Form",
        description: "Collect basic client information",
        assignee: { name: "John Doe", email: "john@example.com" },
        status: "Completed",
      },
      {
        id: "step-2",
        type: "document",
        name: "Service Agreement",
        description: "Send service agreement for signature",
        assignee: { name: "Jane Smith", email: "jane@example.com" },
        status: "In Progress",
      },
      {
        id: "step-3",
        type: "approval",
        name: "Manager Approval",
        description: "Get manager approval for the client",
        assignee: { name: "Sarah Johnson", email: "sarah@example.com" },
        status: "Pending",
      },
      {
        id: "step-4",
        type: "email",
        name: "Welcome Email",
        description: "Send welcome email to the client",
        assignee: { name: "System", email: "system@example.com" },
        status: "Pending",
      },
      {
        id: "step-5",
        type: "document",
        name: "Project Scope Document",
        description: "Send project scope document for review",
        assignee: { name: "John Doe", email: "john@example.com" },
        status: "Pending",
      },
    ],
    created: "2023-10-15",
    lastEdited: "2023-10-18",
    createdBy: { name: "John Doe", email: "john@example.com" },
  }

  const stepTypeIcons: Record<string, any> = {
    form: <FileText className="h-5 w-5" />,
    document: <FileSignature className="h-5 w-5" />,
    approval: <Check className="h-5 w-5" />,
    email: <Mail className="h-5 w-5" />,
    user: <User className="h-5 w-5" />,
  }

  const stepTypeColors: Record<string, string> = {
    form: "bg-blue-100 text-blue-700",
    document: "bg-purple-100 text-purple-700",
    approval: "bg-green-100 text-green-700",
    email: "bg-yellow-100 text-yellow-700",
    user: "bg-slate-100 text-slate-700",
  }

  const stepStatusColors: Record<string, string> = {
    Completed: "success",
    "In Progress": "warning",
    Pending: "outline",
  }

  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b bg-background p-4 sticky top-0 z-10">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/workflows">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div>
              <div className="flex items-center gap-2">
                <Input
                  value={workflow.name}
                  className="text-xl font-semibold h-9 w-[300px] border-transparent focus-visible:border-input"
                />
                <Badge variant="outline">{workflow.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{workflow.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
            <Button variant="outline" className="gap-2">
              <Users className="h-4 w-4" />
              Assignees
            </Button>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Save
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 container py-6">
        <Tabs defaultValue="editor" className="space-y-6" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="editor">Workflow Editor</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="editor" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-medium">Workflow Steps</h2>
                <p className="text-sm text-muted-foreground">Configure the steps in your workflow</p>
              </div>
              <Button className="gap-2" onClick={() => setShowAddStepDialog(true)}>
                <Plus className="h-4 w-4" />
                Add Step
              </Button>
            </div>

            <div className="space-y-4">
              {workflow.steps.map((step, index) => (
                <Card key={step.id} className="relative">
                  <div
                    className="absolute left-0 inset-y-0 w-1 rounded-l-lg"
                    style={{
                      backgroundColor: stepTypeColors[step.type].split(" ")[0].replace("bg-", "var(--") + ")",
                    }}
                  ></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center ${stepTypeColors[step.type]}`}
                        >
                          {stepTypeIcons[step.type]}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg">{step.name}</CardTitle>
                            <Badge variant={stepStatusColors[step.status] as any}>{step.status}</Badge>
                          </div>
                          <CardDescription>{step.description}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" disabled={index === 0}>
                                <ArrowUp className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Move step up</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" disabled={index === workflow.steps.length - 1}>
                                <ArrowDown className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Move step down</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Step
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Copy className="h-4 w-4 mr-2" />
                              Duplicate
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Assignee:</span>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">
                              {step.assignee.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{step.assignee.name}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          Step {index + 1} of {workflow.steps.length}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Settings className="h-3.5 w-3.5" />
                      Configure Step
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Workflow Preview</CardTitle>
                <CardDescription>Preview how your workflow will appear to participants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">Preview Mode</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-4 max-w-md">
                    This tab would show a preview of how the workflow will appear to participants, including all steps
                    and forms.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Workflow Settings</CardTitle>
                <CardDescription>Configure general settings for this workflow</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="workflow-name">Workflow Name</Label>
                    <Input id="workflow-name" defaultValue={workflow.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workflow-status">Status</Label>
                    <Select defaultValue="draft">
                      <SelectTrigger id="workflow-status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="paused">Paused</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="workflow-description">Description</Label>
                    <Textarea id="workflow-description" defaultValue={workflow.description} className="min-h-[100px]" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Automation Settings</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="auto-reminders">Automatic Reminders</Label>
                        <div className="text-sm text-muted-foreground">Send automatic reminders for pending steps</div>
                      </div>
                      <Switch id="auto-reminders" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="auto-progress">Auto Progress</Label>
                        <div className="text-sm text-muted-foreground">
                          Automatically progress to the next step when current step is completed
                        </div>
                      </div>
                      <Switch id="auto-progress" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="deadline-alerts">Deadline Alerts</Label>
                        <div className="text-sm text-muted-foreground">
                          Send alerts when steps are approaching deadlines
                        </div>
                      </div>
                      <Switch id="deadline-alerts" defaultChecked />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Access Control</h3>
                  <div className="space-y-2">
                    <Label>Who can view this workflow</Label>
                    <Select defaultValue="team">
                      <SelectTrigger>
                        <SelectValue placeholder="Select access level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="private">Only me</SelectItem>
                        <SelectItem value="team">My team</SelectItem>
                        <SelectItem value="organization">Entire organization</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Who can edit this workflow</Label>
                    <Select defaultValue="private">
                      <SelectTrigger>
                        <SelectValue placeholder="Select access level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="private">Only me</SelectItem>
                        <SelectItem value="team">My team</SelectItem>
                        <SelectItem value="organization">Entire organization</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Add Step Dialog */}
      <Dialog open={showAddStepDialog} onOpenChange={setShowAddStepDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add Workflow Step</DialogTitle>
            <DialogDescription>Choose a step type and configure its settings</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {!selectedStepType ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(stepTypeIcons).map(([type, icon]) => (
                  <Card
                    key={type}
                    className="cursor-pointer hover:border-primary transition-colors"
                    onClick={() => setSelectedStepType(type)}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div
                        className={`h-12 w-12 rounded-full flex items-center justify-center mb-4 ${stepTypeColors[type]}`}
                      >
                        {icon}
                      </div>
                      <h3 className="font-medium capitalize">{type}</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {type === "form" && "Collect information with a form"}
                        {type === "document" && "Request document signatures"}
                        {type === "approval" && "Request approval from stakeholders"}
                        {type === "email" && "Send automated email notifications"}
                        {type === "user" && "Assign a manual task to a user"}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${stepTypeColors[selectedStepType]}`}
                  >
                    {stepTypeIcons[selectedStepType]}
                  </div>
                  <div>
                    <h3 className="font-medium capitalize">{selectedStepType} Step</h3>
                    <p className="text-sm text-muted-foreground">Configure your {selectedStepType} step</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="step-name" className="text-right">
                      Step Name
                    </Label>
                    <Input id="step-name" placeholder="Enter step name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="step-description" className="text-right">
                      Description
                    </Label>
                    <Textarea
                      id="step-description"
                      placeholder="Describe what this step does"
                      className="col-span-3 min-h-[80px]"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="step-assignee" className="text-right">
                      Assignee
                    </Label>
                    <Select>
                      <SelectTrigger id="step-assignee" className="col-span-3">
                        <SelectValue placeholder="Select assignee" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="john">John Doe</SelectItem>
                        <SelectItem value="jane">Jane Smith</SelectItem>
                        <SelectItem value="sarah">Sarah Johnson</SelectItem>
                        <SelectItem value="system">System (Automated)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedStepType === "document" && (
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="document-template" className="text-right">
                        Document Template
                      </Label>
                      <Select>
                        <SelectTrigger id="document-template" className="col-span-3">
                          <SelectValue placeholder="Select template" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="service">Service Agreement</SelectItem>
                          <SelectItem value="nda">Non-Disclosure Agreement</SelectItem>
                          <SelectItem value="contract">Employment Contract</SelectItem>
                          <SelectItem value="custom">Custom Document</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {selectedStepType === "email" && (
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email-template" className="text-right">
                        Email Template
                      </Label>
                      <Select>
                        <SelectTrigger id="email-template" className="col-span-3">
                          <SelectValue placeholder="Select template" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="welcome">Welcome Email</SelectItem>
                          <SelectItem value="reminder">Reminder Email</SelectItem>
                          <SelectItem value="completion">Completion Email</SelectItem>
                          <SelectItem value="custom">Custom Email</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {selectedStepType === "approval" && (
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="approval-type" className="text-right">
                        Approval Type
                      </Label>
                      <Select>
                        <SelectTrigger id="approval-type" className="col-span-3">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single Approver</SelectItem>
                          <SelectItem value="sequential">Sequential Approval</SelectItem>
                          <SelectItem value="parallel">Parallel Approval</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="step-deadline" className="text-right">
                      Deadline
                    </Label>
                    <div className="col-span-3 flex gap-2">
                      <Input id="step-deadline" type="number" placeholder="Days" className="w-20" />
                      <Select defaultValue="days">
                        <SelectTrigger>
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hours">Hours</SelectItem>
                          <SelectItem value="days">Days</SelectItem>
                          <SelectItem value="weeks">Weeks</SelectItem>
                        </SelectContent>
                      </Select>
                      <span className="flex items-center text-sm text-muted-foreground">after previous step</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center pt-4">
                  <Button variant="ghost" className="gap-2" onClick={() => setSelectedStepType(null)}>
                    <ArrowLeft className="h-4 w-4" />
                    Back to Step Types
                  </Button>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowAddStepDialog(false)
                setSelectedStepType(null)
              }}
            >
              Cancel
            </Button>
            {selectedStepType && <Button type="submit">Add Step</Button>}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

