"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  Building,
  CreditCard,
  FileText,
  Key,
  LayoutDashboard,
  Lock,
  type LucideIcon,
  MailOpen,
  MessageSquare,
  Plus,
  Search,
  Settings,
  Shield,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"

interface NavItemProps {
  icon: LucideIcon
  title: string
  href: string
  active?: boolean
  badge?: string
}

function NavItem({ icon: Icon, title, href, active, badge }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md ${
        active ? "bg-primary/10 text-primary" : "hover:bg-muted"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="flex-1">{title}</span>
      {badge && (
        <Badge variant={active ? "default" : "outline"} className="ml-auto">
          {badge}
        </Badge>
      )}
    </Link>
  )
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <div className="hidden lg:flex flex-col w-64 border-r bg-background">
        <div className="flex items-center gap-2 p-6 border-b">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Admin Portal</span>
        </div>

        <div className="flex-1 py-4 px-3 space-y-6">
          <div className="space-y-1">
            <NavItem icon={LayoutDashboard} title="Dashboard" href="/admin" active={true} />
            <NavItem icon={Users} title="Users" href="/admin/users" badge="42" />
            <NavItem icon={FileText} title="Documents" href="/admin/documents" badge="156" />
            <NavItem icon={Building} title="Organizations" href="/admin/organizations" badge="8" />
          </div>

          <div>
            <h3 className="text-xs font-medium text-muted-foreground px-3 mb-2">SETTINGS</h3>
            <div className="space-y-1">
              <NavItem icon={Key} title="API Keys" href="/admin/api-keys" />
              <NavItem icon={Lock} title="Security" href="/admin/security" />
              <NavItem icon={CreditCard} title="Billing" href="/admin/billing" />
              <NavItem icon={Settings} title="General" href="/admin/settings" />
            </div>
          </div>
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Admin User</div>
              <div className="text-xs text-muted-foreground">admin@docuflow.com</div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                  <Settings className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b bg-background p-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users, documents..."
                className="border-none shadow-none focus-visible:ring-0"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 p-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <UserPlus className="h-4 w-4" />
                  Add User
                </Button>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  New Organization
                </Button>
              </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Stats cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Total Users</CardDescription>
                      <CardTitle className="text-3xl">42</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">+5 since last month</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Active Documents</CardDescription>
                      <CardTitle className="text-3xl">156</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">+23 since last month</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Signatures</CardDescription>
                      <CardTitle className="text-3xl">289</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">+41 since last month</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Organizations</CardDescription>
                      <CardTitle className="text-3xl">8</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">+2 since last month</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Usage and activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>System Usage</CardTitle>
                      <CardDescription>Resource utilization over the past 30 days</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Storage</span>
                          <span>65% (6.5 GB / 10 GB)</span>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>API Calls</span>
                          <span>42% (4.2K / 10K)</span>
                        </div>
                        <Progress value={42} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Bandwidth</span>
                          <span>28% (28 GB / 100 GB)</span>
                        </div>
                        <Progress value={28} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Compute</span>
                          <span>53% (53 hrs / 100 hrs)</span>
                        </div>
                        <Progress value={53} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Latest system events and actions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            action: "New user registered",
                            user: "Sarah Johnson",
                            time: "10 minutes ago",
                            icon: <User className="h-4 w-4" />,
                          },
                          {
                            action: "Document signed",
                            user: "Michael Brown",
                            time: "25 minutes ago",
                            icon: <FileText className="h-4 w-4" />,
                          },
                          {
                            action: "New organization created",
                            user: "Tech Solutions Inc.",
                            time: "1 hour ago",
                            icon: <Building className="h-4 w-4" />,
                          },
                          {
                            action: "API key generated",
                            user: "Admin User",
                            time: "2 hours ago",
                            icon: <Key className="h-4 w-4" />,
                          },
                          {
                            action: "Billing plan updated",
                            user: "Global Enterprises",
                            time: "3 hours ago",
                            icon: <CreditCard className="h-4 w-4" />,
                          },
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-4 p-2 rounded-lg hover:bg-muted">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                              {item.icon}
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium">{item.action}</p>
                                <span className="text-xs text-muted-foreground">{item.time}</span>
                              </div>
                              <div className="text-xs text-muted-foreground">{item.user}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Security overview */}
                <Card>
                  <CardHeader>
                    <CardTitle>Security Overview</CardTitle>
                    <CardDescription>System security status and recommendations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-success/10 rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-success/20 flex items-center justify-center">
                            <Shield className="h-4 w-4 text-success" />
                          </div>
                          <div>
                            <div className="font-medium">SSL Certificate</div>
                            <div className="text-xs text-muted-foreground">Valid for 285 days</div>
                          </div>
                        </div>
                        <Badge variant="success">Secure</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-success/10 rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-success/20 flex items-center justify-center">
                            <Lock className="h-4 w-4 text-success" />
                          </div>
                          <div>
                            <div className="font-medium">Two-Factor Authentication</div>
                            <div className="text-xs text-muted-foreground">Enabled for all admin users</div>
                          </div>
                        </div>
                        <Badge variant="success">Enabled</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-warning/10 rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-warning/20 flex items-center justify-center">
                            <Key className="h-4 w-4 text-warning" />
                          </div>
                          <div>
                            <div className="font-medium">API Key Rotation</div>
                            <div className="text-xs text-muted-foreground">3 keys older than 90 days</div>
                          </div>
                        </div>
                        <Badge variant="warning">Action Needed</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-success/10 rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-success/20 flex items-center justify-center">
                            <MailOpen className="h-4 w-4 text-success" />
                          </div>
                          <div>
                            <div className="font-medium">DKIM/SPF Records</div>
                            <div className="text-xs text-muted-foreground">Email authentication configured</div>
                          </div>
                        </div>
                        <Badge variant="success">Configured</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="users" className="space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>User Management</CardTitle>
                      <CardDescription>Manage system users and permissions</CardDescription>
                    </div>
                    <Button className="gap-2">
                      <UserPlus className="h-4 w-4" />
                      Add User
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
                              Organization
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
                          {[
                            {
                              name: "John Doe",
                              email: "john@example.com",
                              role: "Admin",
                              org: "Acme Inc",
                              status: "Active",
                              lastActive: "Today",
                            },
                            {
                              name: "Jane Smith",
                              email: "jane@example.com",
                              role: "User",
                              org: "Acme Inc",
                              status: "Active",
                              lastActive: "Yesterday",
                            },
                            {
                              name: "Robert Chen",
                              email: "robert@example.com",
                              role: "User",
                              org: "Tech Solutions",
                              status: "Inactive",
                              lastActive: "2 weeks ago",
                            },
                            {
                              name: "Sarah Johnson",
                              email: "sarah@example.com",
                              role: "Admin",
                              org: "Global Enterprises",
                              status: "Active",
                              lastActive: "Today",
                            },
                            {
                              name: "Michael Brown",
                              email: "michael@example.com",
                              role: "User",
                              org: "Global Enterprises",
                              status: "Active",
                              lastActive: "3 days ago",
                            },
                          ].map((user, index) => (
                            <tr key={index} className="border-b hover:bg-muted/50">
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
                                <Badge variant={user.role === "Admin" ? "default" : "outline"}>{user.role}</Badge>
                              </td>
                              <td className="px-6 py-4">{user.org}</td>
                              <td className="px-6 py-4">
                                <Badge variant={user.status === "Active" ? "success" : "outline"}>{user.status}</Badge>
                              </td>
                              <td className="px-6 py-4 text-muted-foreground">{user.lastActive}</td>
                              <td className="px-6 py-4 text-right">
                                <Button variant="ghost" size="icon">
                                  <Settings className="h-4 w-4" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Document Management</CardTitle>
                    <CardDescription>Manage system documents and templates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">This tab would contain document management functionality.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Configure system security and access controls</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Authentication</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Two-Factor Authentication</div>
                            <div className="text-sm text-muted-foreground">Require 2FA for all admin users</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Single Sign-On (SSO)</div>
                            <div className="text-sm text-muted-foreground">Enable SSO with SAML or OAuth</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Password Policy</div>
                            <div className="text-sm text-muted-foreground">Enforce strong password requirements</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Data Protection</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">End-to-End Encryption</div>
                            <div className="text-sm text-muted-foreground">Encrypt all document data</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Data Retention Policy</div>
                            <div className="text-sm text-muted-foreground">Automatically archive old documents</div>
                          </div>
                          <Switch />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">IP Restriction</div>
                            <div className="text-sm text-muted-foreground">Limit access to specific IP ranges</div>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

