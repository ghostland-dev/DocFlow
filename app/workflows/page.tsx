"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Clock,
  Copy,
  Edit,
  Filter,
  MoreHorizontal,
  Play,
  Plus,
  Search,
  Settings,
  Trash,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function WorkflowsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreateDialog, setShowCreateDialog] = useState(false)

  // Mock workflow data
  const workflows = [
    {
      id: "wf-001",
      name: "Client Onboarding",
      description: "Standard client onboarding process with document collection and signatures",
      status: "Active",
      steps: 5,
      completedSteps: 3,
      assignees: [
        { name: "John Doe", email: "john@example.com" },
        { name: "Jane Smith", email: "jane@example.com" },
      ],
      lastRun: "2023-10-15",
      documents: 3,
    },
    {
      id: "wf-002",
      name: "Employee Hiring",
      description: "New employee hiring workflow with contract signing and document collection",
      status: "Active",
      steps: 7,
      completedSteps: 7,
      assignees: [
        { name: "Sarah Johnson", email: "sarah@example.com" },
        { name: "Michael Brown", email: "michael@example.com" },
      ],
      lastRun: "2023-10-10",
      documents: 5,
    },
    {
      id: "wf-003",
      name: "Vendor Agreement",
      description: "Vendor agreement process with approval steps and document signing",
      status: "Draft",
      steps: 4,
      completedSteps: 0,
      assignees: [{ name: "Robert Chen", email: "robert@example.com" }],
      lastRun: "Never",
      documents: 2,
    },
    {
      id: "wf-004",
      name: "Contract Renewal",
      description: "Automated contract renewal process with notifications and signatures",
      status: "Paused",
      steps: 6,
      completedSteps: 2,
      assignees: [
        { name: "Emily Davis", email: "emily@example.com" },
        { name: "David Wilson", email: "david@example.com" },
      ],
      lastRun: "2023-09-28",
      documents: 4,
    },
    {
      id: "wf-005",
      name: "Project Approval",
      description: "Multi-step project approval workflow with document reviews and sign-offs",
      status: "Active",
      steps: 5,
      completedSteps: 4,
      assignees: [
        { name: "John Doe", email: "john@example.com" },
        { name: "Sarah Johnson", email: "sarah@example.com" },
      ],
      lastRun: "2023-10-12",
      documents: 3,
    },
  ]

  const filteredWorkflows = workflows.filter(
    (workflow) =>
      workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workflow.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Signature Workflows</h1>
          <p className="text-muted-foreground">Create and manage automated document workflows</p>
        </div>
        <Button className="gap-2" onClick={() => setShowCreateDialog(true)}>
          <Plus className="h-4 w-4" />
          Create Workflow
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search workflows..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Workflows</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
          <TabsTrigger value="paused">Paused</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkflows.length > 0 ? (
              filteredWorkflows.map((workflow) => (
                <Card key={workflow.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{workflow.name}</CardTitle>
                        <CardDescription className="mt-1">{workflow.description}</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Workflow
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="h-4 w-4 mr-2" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="h-4 w-4 mr-2" />
                            Settings
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          {workflow.status === "Active" ? (
                            <DropdownMenuItem>
                              <Clock className="h-4 w-4 mr-2" />
                              Pause Workflow
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>
                              <Play className="h-4 w-4 mr-2" />
                              Activate Workflow
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Badge
                          variant={
                            workflow.status === "Active"
                              ? "success"
                              : workflow.status === "Draft"
                                ? "outline"
                                : "warning"
                          }
                        >
                          {workflow.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          <span>Last run: {workflow.lastRun}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>
                            {workflow.completedSteps} of {workflow.steps} steps
                          </span>
                        </div>
                        <Progress value={(workflow.completedSteps / workflow.steps) * 100} className="h-2" />
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                          {workflow.assignees.slice(0, 3).map((assignee, i) => (
                            <Avatar key={i} className="h-7 w-7 border-2 border-background">
                              <AvatarFallback className="text-xs">
                                {assignee.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                          {workflow.assignees.length > 3 && (
                            <div className="flex items-center justify-center h-7 w-7 rounded-full bg-muted border-2 border-background text-xs font-medium">
                              +{workflow.assignees.length - 3}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="h-3.5 w-3.5" />
                          <span>{workflow.documents} documents</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/workflows/${workflow.id}`}>View Workflow</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center p-8 text-center">
                <Users className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No workflows found</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">Try adjusting your search or filters</p>
                <Button className="gap-2" onClick={() => setShowCreateDialog(true)}>
                  <Plus className="h-4 w-4" />
                  Create New Workflow
                </Button>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="active">
          <div className="mt-6">
            <p className="text-muted-foreground">This tab would show only active workflows.</p>
          </div>
        </TabsContent>

        <TabsContent value="draft">
          <div className="mt-6">
            <p className="text-muted-foreground">This tab would show only draft workflows.</p>
          </div>
        </TabsContent>

        <TabsContent value="paused">
          <div className="mt-6">
            <p className="text-muted-foreground">This tab would show only paused workflows.</p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Create Workflow Dialog */}
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New Workflow</DialogTitle>
            <DialogDescription>Set up an automated document workflow for your team</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" placeholder="Workflow name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Describe the purpose of this workflow"
                className="col-span-3 min-h-[100px]"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="template" className="text-right">
                Template
              </Label>
              <Select>
                <SelectTrigger id="template" className="col-span-3">
                  <SelectValue placeholder="Select a template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blank">Blank Workflow</SelectItem>
                  <SelectItem value="onboarding">Client Onboarding</SelectItem>
                  <SelectItem value="hiring">Employee Hiring</SelectItem>
                  <SelectItem value="vendor">Vendor Agreement</SelectItem>
                  <SelectItem value="approval">Approval Process</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="assignees" className="text-right">
                Assignees
              </Label>
              <div className="col-span-3 flex gap-2">
                <Select>
                  <SelectTrigger id="assignees">
                    <SelectValue placeholder="Add assignees" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Doe</SelectItem>
                    <SelectItem value="jane">Jane Smith</SelectItem>
                    <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    <SelectItem value="michael">Michael Brown</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreateDialog(false)}>
              Cancel
            </Button>
            <Button type="submit" className="gap-2">
              <ArrowRight className="h-4 w-4" />
              Continue to Editor
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

