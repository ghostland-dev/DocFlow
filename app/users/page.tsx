"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowUpDown,
  Check,
  Lock,
  Mail,
  MoreHorizontal,
  Search,
  Shield,
  Trash,
  User,
  UserCog,
  UserPlus,
  X,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddUserDialog, setShowAddUserDialog] = useState(false)
  const [showUserDetailsDialog, setShowUserDetailsDialog] = useState(false)
  const [selectedUser, setSelectedUser] = useState<any>(null)

  // Mock user data
  const users = [
    {
      id: "user-001",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      organization: "Acme Inc",
      lastActive: "Today",
      created: "2023-01-15",
      permissions: [
        "documents.create",
        "documents.edit",
        "documents.delete",
        "users.view",
        "users.edit",
        "templates.all",
      ],
      twoFactorEnabled: true,
    },
    {
      id: "user-002",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
      organization: "Acme Inc",
      lastActive: "Yesterday",
      created: "2023-02-20",
      permissions: ["documents.create", "documents.edit", "templates.view"],
      twoFactorEnabled: false,
    },
    {
      id: "user-003",
      name: "Robert Chen",
      email: "robert@example.com",
      role: "User",
      status: "Inactive",
      organization: "Tech Solutions",
      lastActive: "2 weeks ago",
      created: "2023-03-10",
      permissions: ["documents.create", "documents.edit"],
      twoFactorEnabled: false,
    },
    {
      id: "user-004",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Admin",
      status: "Active",
      organization: "Global Enterprises",
      lastActive: "Today",
      created: "2023-04-05",
      permissions: ["documents.all", "users.all", "templates.all"],
      twoFactorEnabled: true,
    },
    {
      id: "user-005",
      name: "Michael Brown",
      email: "michael@example.com",
      role: "User",
      status: "Active",
      organization: "Global Enterprises",
      lastActive: "3 days ago",
      created: "2023-05-12",
      permissions: ["documents.create", "documents.edit", "templates.view"],
      twoFactorEnabled: true,
    },
    {
      id: "user-006",
      name: "Emily Davis",
      email: "emily@example.com",
      role: "User",
      status: "Pending",
      organization: "Acme Inc",
      lastActive: "Never",
      created: "2023-06-01",
      permissions: ["documents.create"],
      twoFactorEnabled: false,
    },
    {
      id: "user-007",
      name: "David Wilson",
      email: "david@example.com",
      role: "Manager",
      status: "Active",
      organization: "Tech Solutions",
      lastActive: "Today",
      created: "2023-06-15",
      permissions: ["documents.create", "documents.edit", "documents.delete", "users.view", "templates.view"],
      twoFactorEnabled: true,
    },
  ]

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.organization.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleUserDetails = (user: any) => {
    setSelectedUser(user)
    setShowUserDetailsDialog(true)
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-muted-foreground">Manage users, roles, and permissions</p>
        </div>
        <Button className="gap-2" onClick={() => setShowAddUserDialog(true)}>
          <UserPlus className="h-4 w-4" />
          Add User
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Users</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase border-b">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-medium flex items-center gap-1">
                        User
                        <ArrowUpDown className="h-3 w-3" />
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Role
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Organization
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Last Active
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Security
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-muted/50">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback>
                                  {user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{user.name}</div>
                                <div className="text-xs text-muted-foreground">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Badge
                              variant={
                                user.role === "Admin" ? "default" : user.role === "Manager" ? "outline" : "secondary"
                              }
                            >
                              {user.role}
                            </Badge>
                          </td>
                          <td className="px-6 py-4">{user.organization}</td>
                          <td className="px-6 py-4">
                            <Badge
                              variant={
                                user.status === "Active"
                                  ? "success"
                                  : user.status === "Inactive"
                                    ? "outline"
                                    : "warning"
                              }
                            >
                              {user.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">{user.lastActive}</td>
                          <td className="px-6 py-4">
                            {user.twoFactorEnabled ? (
                              <Badge variant="success" className="flex w-fit items-center gap-1">
                                <Shield className="h-3 w-3" />
                                2FA Enabled
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="flex w-fit items-center gap-1">
                                <Shield className="h-3 w-3" />
                                2FA Disabled
                              </Badge>
                            )}
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
                                <DropdownMenuItem onClick={() => handleUserDetails(user)}>
                                  <User className="h-4 w-4 mr-2" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <UserCog className="h-4 w-4 mr-2" />
                                  Edit User
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Mail className="h-4 w-4 mr-2" />
                                  Send Email
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                {user.status === "Active" ? (
                                  <DropdownMenuItem>
                                    <X className="h-4 w-4 mr-2" />
                                    Deactivate
                                  </DropdownMenuItem>
                                ) : (
                                  <DropdownMenuItem>
                                    <Check className="h-4 w-4 mr-2" />
                                    Activate
                                  </DropdownMenuItem>
                                )}
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
                        <td colSpan={7} className="px-6 py-8 text-center">
                          <div className="flex flex-col items-center gap-2">
                            <User className="h-8 w-8 text-muted-foreground" />
                            <h3 className="font-medium">No users found</h3>
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

        <TabsContent value="active">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">This tab would show only active users.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">This tab would show only pending users.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inactive">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">This tab would show only inactive users.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add User Dialog */}
      <Dialog open={showAddUserDialog} onOpenChange={setShowAddUserDialog}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>Create a new user account and set their permissions.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" placeholder="Full name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" type="email" placeholder="Email address" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Select defaultValue="user">
                <SelectTrigger id="role" className="col-span-3">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="organization" className="text-right">
                Organization
              </Label>
              <Select defaultValue="acme">
                <SelectTrigger id="organization" className="col-span-3">
                  <SelectValue placeholder="Select organization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="acme">Acme Inc</SelectItem>
                  <SelectItem value="tech">Tech Solutions</SelectItem>
                  <SelectItem value="global">Global Enterprises</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Send Invite</Label>
              <div className="flex items-center space-x-2 col-span-3">
                <Switch id="send-invite" defaultChecked />
                <Label htmlFor="send-invite">Send email invitation</Label>
              </div>
            </div>
            <div className="grid grid-cols-4 items-start gap-4 pt-4">
              <Label className="text-right pt-2">Permissions</Label>
              <div className="col-span-3 space-y-3">
                <div className="space-y-1.5">
                  <Label className="text-sm font-semibold">Documents</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-doc-view" />
                      <label htmlFor="perm-doc-view" className="text-sm font-normal">
                        View Documents
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-doc-create" />
                      <label htmlFor="perm-doc-create" className="text-sm font-normal">
                        Create Documents
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-doc-edit" />
                      <label htmlFor="perm-doc-edit" className="text-sm font-normal">
                        Edit Documents
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-doc-delete" />
                      <label htmlFor="perm-doc-delete" className="text-sm font-normal">
                        Delete Documents
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-sm font-semibold">Templates</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-temp-view" />
                      <label htmlFor="perm-temp-view" className="text-sm font-normal">
                        View Templates
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-temp-create" />
                      <label htmlFor="perm-temp-create" className="text-sm font-normal">
                        Create Templates
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-temp-edit" />
                      <label htmlFor="perm-temp-edit" className="text-sm font-normal">
                        Edit Templates
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-temp-delete" />
                      <label htmlFor="perm-temp-delete" className="text-sm font-normal">
                        Delete Templates
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-sm font-semibold">Users</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-user-view" />
                      <label htmlFor="perm-user-view" className="text-sm font-normal">
                        View Users
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-user-create" />
                      <label htmlFor="perm-user-create" className="text-sm font-normal">
                        Create Users
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-user-edit" />
                      <label htmlFor="perm-user-edit" className="text-sm font-normal">
                        Edit Users
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-user-delete" />
                      <label htmlFor="perm-user-delete" className="text-sm font-normal">
                        Delete Users
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddUserDialog(false)}>
              Cancel
            </Button>
            <Button type="submit">Create User</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* User Details Dialog */}
      {selectedUser && (
        <Dialog open={showUserDetailsDialog} onOpenChange={setShowUserDetailsDialog}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>User Details</DialogTitle>
              <DialogDescription>Detailed information about {selectedUser.name}</DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-xl">
                    {selectedUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{selectedUser.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-3.5 w-3.5" />
                    <span>{selectedUser.email}</span>
                  </div>
                </div>
                <Badge
                  variant={
                    selectedUser.status === "Active"
                      ? "success"
                      : selectedUser.status === "Inactive"
                        ? "outline"
                        : "warning"
                  }
                  className="ml-auto"
                >
                  {selectedUser.status}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-muted-foreground">Role</p>
                  <p className="font-medium">{selectedUser.role}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Organization</p>
                  <p className="font-medium">{selectedUser.organization}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Last Active</p>
                  <p className="font-medium">{selectedUser.lastActive}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Created</p>
                  <p className="font-medium">{selectedUser.created}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Security</h4>
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    <span>Two-Factor Authentication</span>
                  </div>
                  <Badge variant={selectedUser.twoFactorEnabled ? "success" : "outline"}>
                    {selectedUser.twoFactorEnabled ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Permissions</h4>
                <div className="p-3 rounded-md bg-muted/50 space-y-3">
                  {selectedUser.permissions.map((permission: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-sm">{permission}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowUserDetailsDialog(false)}>
                Close
              </Button>
              <Button>Edit User</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

