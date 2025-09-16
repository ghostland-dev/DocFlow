"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Copy, Edit, FileText, MoreHorizontal, Plus, Settings, Trash, User, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

export default function OrganizationDetailsPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock organization data
  const organization = {
    id: params.id,
    name: "Acme Inc",
    description: "Global technology and innovation company",
    members: [
      {
        id: "user-001",
        name: "John Doe",
        email: "john@example.com",
        role: "Owner",
        status: "Active",
        lastActive: "Today",
      },
      {
        id: "user-002",
        name: "Jane Smith",
        email: "jane@example.com",
        role: "Admin",
        status: "Active",
        lastActive: "Yesterday",
      },
      {
        id: "user-003",
        name: "Robert Chen",
        email: "robert@example.com",
        role: "Member",
        status: "Active",
        lastActive: "2 days ago",
      },
      {
        id: "user-004",
        name: "Sarah Johnson",
        email: "sarah@example.com",
        role: "Member",
        status: "Active",
        lastActive: "Today",
      },
      {
        id: "user-005",
        name: "Michael Brown",
        email: "michael@example.com",
        role: "Member",
        status: "Inactive",
        lastActive: "2 weeks ago",
      },
    ],
    teams: [
      { id: "team-001", name: "Executive", members: 3, documents: 45 },
      { id: "team-002", name: "Marketing", members: 8, documents: 67 },
      { id: "team-003", name: "Engineering", members: 12, documents: 89 },
      { id: "team-004", name: "Sales", members: 6, documents: 34 },
    ],
    documents: 156,
    plan: "Enterprise",
    storage: {
      used: 7.5,
      total: 50,
      percentage: 15,
    },
    createdAt: "2022-05-12",
    logo: "/placeholder.svg?height=80&width=80",
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/organizations">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={organization.logo} alt={organization.name} />
            <AvatarFallback>
              {organization.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{organization.name}</h1>
            <p className="text-muted-foreground">{organization.description}</p>
          </div>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" className="gap-2">
            <Edit className="h-4 w-4" />
            Edit
          </Button>
          <Button variant="outline" className="gap-2">
            <Settings className="h-4 w-4" />
            Settings
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
                <Users className="h-4 w-4 mr-2" />
                Invite Members
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy className="h-4 w-4 mr-2" />
                Duplicate Organization
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash className="h-4 w-4 mr-2" />
                Delete Organization
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Organization Overview</CardTitle>
                <CardDescription>Key information about {organization.name}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Created</p>
                    <p className="font-medium">{new Date(organization.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Plan</p>
                    <p className="font-medium">
                      <Badge
                        variant={
                          organization.plan === "Enterprise"
                            ? "default"
                            : organization.plan === "Professional"
                              ? "outline"
                              : "secondary"
                        }
                      >
                        {organization.plan}
                      </Badge>
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Members</p>
                    <p className="font-medium">{organization.members.length}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Teams</p>
                    <p className="font-medium">{organization.teams.length}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-medium mb-2">Storage Usage</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{organization.storage.used} GB used</span>
                      <span>{organization.storage.total} GB total</span>
                    </div>
                    <Progress value={organization.storage.percentage} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {organization.storage.percentage}% of your storage has been used
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-medium mb-2">Document Statistics</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold">{organization.documents}</div>
                        <div className="text-xs text-muted-foreground">Total Documents</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold">42</div>
                        <div className="text-xs text-muted-foreground">Active Documents</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold">87</div>
                        <div className="text-xs text-muted-foreground">Completed Documents</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold">27</div>
                        <div className="text-xs text-muted-foreground">Pending Signatures</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions in this organization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Document created", user: "John Doe", time: "2 hours ago" },
                    { action: "Member added", user: "Jane Smith", time: "Yesterday" },
                    { action: "Document signed", user: "Robert Chen", time: "2 days ago" },
                    { action: "Team created", user: "Sarah Johnson", time: "3 days ago" },
                    { action: "Settings updated", user: "John Doe", time: "1 week ago" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 p-2 rounded-lg hover:bg-muted">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                          {activity.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">by {activity.user}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Teams</CardTitle>
                <CardDescription>Teams with the most activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {organization.teams.slice(0, 3).map((team, index) => (
                    <div key={team.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{team.name}</div>
                          <div className="text-xs text-muted-foreground">{team.members} members</div>
                        </div>
                      </div>
                      <div className="text-sm">{team.documents} documents</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="#teams" onClick={() => setActiveTab("teams")}>
                      View All Teams
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Members</CardTitle>
                <CardDescription>Organization administrators and owners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {organization.members
                    .filter((member) => member.role === "Owner" || member.role === "Admin")
                    .map((member, index) => (
                      <div key={member.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{member.name}</div>
                            <div className="text-xs text-muted-foreground">{member.email}</div>
                          </div>
                        </div>
                        <Badge variant={member.role === "Owner" ? "default" : "outline"}>{member.role}</Badge>
                      </div>
                    ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="#members" onClick={() => setActiveTab("members")}>
                      View All Members
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="members" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Organization Members</CardTitle>
                <CardDescription>Manage members and their roles</CardDescription>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Invite Member
              </Button>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase border-b">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-medium">
                        User
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Role
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Last Active
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {organization.members.map((member) => (
                      <tr key={member.id} className="border-b hover:bg-muted/50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="text-xs">
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{member.name}</div>
                              <div className="text-xs text-muted-foreground">{member.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <Badge
                            variant={
                              member.role === "Owner" ? "default" : member.role === "Admin" ? "outline" : "secondary"
                            }
                          >
                            {member.role}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">
                          <Badge variant={member.status === "Active" ? "success" : "outline"}>{member.status}</Badge>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{member.lastActive}</td>
                        <td className="px-6 py-4 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <User className="h-4 w-4 mr-2" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Change Role
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="h-4 w-4 mr-2" />
                                Remove Member
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teams" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Teams</CardTitle>
                <CardDescription>Manage teams within your organization</CardDescription>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Create Team
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {organization.teams.map((team) => (
                  <Card key={team.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle>{team.name}</CardTitle>
                      <CardDescription>{team.members} members</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>{team.documents} documents</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="outline" size="sm" className="w-full">
                        Manage Team
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Organization Documents</CardTitle>
              <CardDescription>Documents shared within this organization</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This tab would contain a list of all documents in the organization.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Organization Settings</CardTitle>
              <CardDescription>Manage organization settings and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">This tab would contain organization settings.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
