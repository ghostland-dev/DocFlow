"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowUpDown,
  Building,
  Copy,
  Edit,
  Filter,
  MoreHorizontal,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OrganizationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreateDialog, setShowCreateDialog] = useState(false)

  // Mock organization data
  const organizations = [
    {
      id: "org-001",
      name: "Acme Inc",
      description: "Global technology and innovation company",
      members: 24,
      documents: 156,
      plan: "Enterprise",
      createdAt: "2022-05-12",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "org-002",
      name: "Tech Solutions",
      description: "Software development and consulting services",
      members: 18,
      documents: 87,
      plan: "Professional",
      createdAt: "2022-08-23",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "org-003",
      name: "Global Enterprises",
      description: "International business conglomerate",
      members: 42,
      documents: 215,
      plan: "Enterprise",
      createdAt: "2022-03-05",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "org-004",
      name: "Startup Innovators",
      description: "Early-stage technology startup",
      members: 8,
      documents: 32,
      plan: "Standard",
      createdAt: "2023-01-18",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "org-005",
      name: "Creative Studios",
      description: "Design and creative services agency",
      members: 15,
      documents: 64,
      plan: "Professional",
      createdAt: "2022-11-09",
      logo: "/placeholder.svg?height=40&width=40",
    },
  ]

  const filteredOrganizations = organizations.filter(
    (org) =>
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Organizations</h1>
          <p className="text-muted-foreground">Manage your organizations and teams</p>
        </div>
        <Button className="gap-2" onClick={() => setShowCreateDialog(true)}>
          <Plus className="h-4 w-4" />
          Create Organization
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search organizations..."
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
          <TabsTrigger value="all">All Organizations</TabsTrigger>
          <TabsTrigger value="owned">Owned</TabsTrigger>
          <TabsTrigger value="member">Member</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase border-b">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-medium flex items-center gap-1">
                        Organization
                        <ArrowUpDown className="h-3 w-3" />
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Members
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Documents
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Plan
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Created
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrganizations.length > 0 ? (
                      filteredOrganizations.map((org) => (
                        <tr key={org.id} className="border-b hover:bg-muted/50">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={org.logo} alt={org.name} />
                                <AvatarFallback>
                                  {org.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{org.name}</div>
                                <div className="text-xs text-muted-foreground">{org.description}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span>{org.members}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1">
                              <Copy className="h-4 w-4 text-muted-foreground" />
                              <span>{org.documents}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Badge
                              variant={
                                org.plan === "Enterprise"
                                  ? "default"
                                  : org.plan === "Professional"
                                    ? "outline"
                                    : "secondary"
                              }
                            >
                              {org.plan}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            {new Date(org.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                  <Link href={`/organizations/${org.id}`}>
                                    <Building className="h-4 w-4 mr-2" />
                                    View Organization
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit Organization
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Users className="h-4 w-4 mr-2" />
                                  Manage Members
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Settings className="h-4 w-4 mr-2" />
                                  Settings
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                  <Trash className="h-4 w-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-6 py-8 text-center">
                          <div className="flex flex-col items-center gap-2">
                            <Building className="h-8 w-8 text-muted-foreground" />
                            <h3 className="font-medium">No organizations found</h3>
                            <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="owned">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">This tab would show only organizations you own.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="member">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">This tab would show organizations where you are a member.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Create Organization Dialog */}
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Create New Organization</DialogTitle>
            <DialogDescription>Create a new organization to collaborate with your team</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" placeholder="Organization name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Brief description of your organization"
                className="col-span-3 min-h-[80px]"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="plan" className="text-right">
                Plan
              </Label>
              <Select defaultValue="standard">
                <SelectTrigger id="plan" className="col-span-3">
                  <SelectValue placeholder="Select plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="logo" className="text-right">
                Logo
              </Label>
              <div className="col-span-3">
                <Input id="logo" type="file" />
                <p className="text-xs text-muted-foreground mt-1">Optional. Recommended size: 256x256px. Max 2MB.</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreateDialog(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Organization</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

