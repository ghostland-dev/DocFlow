"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, CreditCard, Key, Palette, Save, Shield, User, Check, Download, Moon, Sun, Laptop } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useTheme } from "next-themes"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto">
          <TabsTrigger value="profile" className="flex items-center gap-2 py-2">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2 py-2">
            <Shield className="h-4 w-4" />
            <span>Security</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2 py-2">
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2 py-2">
            <Palette className="h-4 w-4" />
            <span>Appearance</span>
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2 py-2">
            <CreditCard className="h-4 w-4" />
            <span>Billing</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and profile settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input id="title" defaultValue="Product Manager" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" defaultValue="Acme Inc" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Language & Region</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="pt">Português</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="utc-8">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                        <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                        <SelectItem value="utc+0">Greenwich Mean Time (UTC+0)</SelectItem>
                        <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                        <SelectItem value="utc+8">China Standard Time (UTC+8)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <Select defaultValue="mdy">
                      <SelectTrigger id="dateFormat">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your password and security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Password must be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and
                special characters.
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Update Password
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Authenticator App</div>
                  <div className="text-sm text-muted-foreground">
                    Use an authenticator app to generate one-time codes
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="success">Enabled</Badge>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">SMS Authentication</div>
                  <div className="text-sm text-muted-foreground">Receive one-time codes via SMS</div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Disabled</Badge>
                  <Button variant="outline" size="sm">
                    Enable
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Backup Codes</div>
                  <div className="text-sm text-muted-foreground">Generate backup codes for emergency access</div>
                </div>
                <Button variant="outline" size="sm">
                  Generate Codes
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>Manage API keys for programmatic access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Production API Key</div>
                  <div className="text-sm text-muted-foreground">Created on October 10, 2023</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Reveal
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive">
                    Revoke
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Development API Key</div>
                  <div className="text-sm text-muted-foreground">Created on September 5, 2023</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Reveal
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive">
                    Revoke
                  </Button>
                </div>
              </div>
              <div className="pt-4">
                <Button variant="outline" className="gap-2">
                  <Key className="h-4 w-4" />
                  Generate New API Key
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-documents">Document Updates</Label>
                      <div className="text-sm text-muted-foreground">
                        Receive notifications about document status changes
                      </div>
                    </div>
                    <Switch id="email-documents" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-signatures">Signature Requests</Label>
                      <div className="text-sm text-muted-foreground">
                        Receive notifications when you need to sign a document
                      </div>
                    </div>
                    <Switch id="email-signatures" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-completed">Completed Documents</Label>
                      <div className="text-sm text-muted-foreground">
                        Receive notifications when all signatures are completed
                      </div>
                    </div>
                    <Switch id="email-completed" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-marketing">Marketing & Updates</Label>
                      <div className="text-sm text-muted-foreground">
                        Receive product updates and marketing communications
                      </div>
                    </div>
                    <Switch id="email-marketing" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Mobile Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="mobile-documents">Document Updates</Label>
                      <div className="text-sm text-muted-foreground">
                        Receive push notifications about document status changes
                      </div>
                    </div>
                    <Switch id="mobile-documents" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="mobile-signatures">Signature Requests</Label>
                      <div className="text-sm text-muted-foreground">
                        Receive push notifications when you need to sign a document
                      </div>
                    </div>
                    <Switch id="mobile-signatures" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="mobile-completed">Completed Documents</Label>
                      <div className="text-sm text-muted-foreground">
                        Receive push notifications when all signatures are completed
                      </div>
                    </div>
                    <Switch id="mobile-completed" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Schedule</h3>
                <div className="space-y-2">
                  <Label>Quiet Hours</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quietStart" className="text-sm">
                        Start Time
                      </Label>
                      <Select defaultValue="22">
                        <SelectTrigger id="quietStart">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }).map((_, i) => (
                            <SelectItem key={i} value={i.toString()}>
                              {i.toString().padStart(2, "0")}:00
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quietEnd" className="text-sm">
                        End Time
                      </Label>
                      <Select defaultValue="7">
                        <SelectTrigger id="quietEnd">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }).map((_, i) => (
                            <SelectItem key={i} value={i.toString()}>
                              {i.toString().padStart(2, "0")}:00
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    You won't receive notifications during quiet hours, except for critical alerts.
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize the look and feel of the application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Theme</h3>
                <RadioGroup
                  defaultValue={theme}
                  onValueChange={setTheme}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div
                    className={`border rounded-md p-4 cursor-pointer ${theme === "light" ? "border-primary bg-primary/5" : ""}`}
                  >
                    <RadioGroupItem value="light" id="theme-light" className="sr-only" />
                    <Label htmlFor="theme-light" className="cursor-pointer">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Sun className="h-4 w-4" />
                          <span className="font-medium">Light</span>
                        </div>
                        {theme === "light" && <Check className="h-4 w-4 text-primary" />}
                      </div>
                      <div className="h-24 bg-white border rounded-md flex flex-col">
                        <div className="h-6 bg-slate-100 border-b"></div>
                        <div className="flex-1 p-2">
                          <div className="w-full h-2 bg-slate-200 rounded-full mb-2"></div>
                          <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div
                    className={`border rounded-md p-4 cursor-pointer ${theme === "dark" ? "border-primary bg-primary/5" : ""}`}
                  >
                    <RadioGroupItem value="dark" id="theme-dark" className="sr-only" />
                    <Label htmlFor="theme-dark" className="cursor-pointer">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Moon className="h-4 w-4" />
                          <span className="font-medium">Dark</span>
                        </div>
                        {theme === "dark" && <Check className="h-4 w-4 text-primary" />}
                      </div>
                      <div className="h-24 bg-slate-900 border border-slate-700 rounded-md flex flex-col">
                        <div className="h-6 bg-slate-800 border-b border-slate-700"></div>
                        <div className="flex-1 p-2">
                          <div className="w-full h-2 bg-slate-700 rounded-full mb-2"></div>
                          <div className="w-2/3 h-2 bg-slate-700 rounded-full"></div>
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div
                    className={`border rounded-md p-4 cursor-pointer ${theme === "system" ? "border-primary bg-primary/5" : ""}`}
                  >
                    <RadioGroupItem value="system" id="theme-system" className="sr-only" />
                    <Label htmlFor="theme-system" className="cursor-pointer">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-4 w-4" />
                          <span className="font-medium">System</span>
                        </div>
                        {theme === "system" && <Check className="h-4 w-4 text-primary" />}
                      </div>
                      <div className="h-24 bg-gradient-to-r from-white to-slate-900 border rounded-md flex flex-col">
                        <div className="h-6 bg-gradient-to-r from-slate-100 to-slate-800 border-b"></div>
                        <div className="flex-1 p-2">
                          <div className="w-full h-2 bg-gradient-to-r from-slate-200 to-slate-700 rounded-full mb-2"></div>
                          <div className="w-2/3 h-2 bg-gradient-to-r from-slate-200 to-slate-700 rounded-full"></div>
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Density</h3>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="density-compact" className="flex items-center gap-2 cursor-pointer">
                    <Checkbox id="density-compact" />
                    <span>Compact Mode</span>
                  </Label>
                </div>
                <div className="text-sm text-muted-foreground">
                  Compact mode reduces padding and spacing to show more content on screen.
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Accessibility</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="high-contrast">High Contrast</Label>
                      <div className="text-sm text-muted-foreground">Increase contrast for better visibility</div>
                    </div>
                    <Switch id="high-contrast" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="reduce-motion">Reduce Motion</Label>
                      <div className="text-sm text-muted-foreground">Minimize animations and transitions</div>
                    </div>
                    <Switch id="reduce-motion" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="larger-text">Larger Text</Label>
                      <div className="text-sm text-muted-foreground">Increase text size throughout the application</div>
                    </div>
                    <Switch id="larger-text" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Plan</CardTitle>
              <CardDescription>Manage your subscription and billing information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-md bg-primary/5 border border-primary/20">
                <div>
                  <h3 className="font-medium">Professional Plan</h3>
                  <p className="text-sm text-muted-foreground">$29/month, billed annually</p>
                </div>
                <Badge>Current Plan</Badge>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Plan Features</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    <span>Unlimited documents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    <span>Up to 25 users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    <span>Advanced security features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    <span>Custom branding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    <span>API access</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="outline" className="text-destructive">
                    Cancel Subscription
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Payment Method</h3>
                <div className="flex items-center gap-4 p-4 border rounded-md">
                  <div className="h-10 w-14 bg-slate-100 rounded-md flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-slate-500" />
                  </div>
                  <div>
                    <div className="font-medium">Visa ending in 4242</div>
                    <div className="text-sm text-muted-foreground">Expires 12/2025</div>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    Edit
                  </Button>
                </div>
                <Button variant="outline" className="gap-2">
                  <CreditCard className="h-4 w-4" />
                  Add Payment Method
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Billing History</h3>
                <div className="relative overflow-x-auto rounded-md border">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3 font-medium">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                          Description
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                          Amount
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium text-right">
                          Invoice
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-6 py-4">Oct 1, 2023</td>
                        <td className="px-6 py-4">Professional Plan - Annual</td>
                        <td className="px-6 py-4">$348.00</td>
                        <td className="px-6 py-4 text-right">
                          <Button variant="ghost" size="sm" className="h-8 gap-1">
                            <Download className="h-3.5 w-3.5" />
                            PDF
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-6 py-4">Oct 1, 2022</td>
                        <td className="px-6 py-4">Professional Plan - Annual</td>
                        <td className="px-6 py-4">$348.00</td>
                        <td className="px-6 py-4 text-right">
                          <Button variant="ghost" size="sm" className="h-8 gap-1">
                            <Download className="h-3.5 w-3.5" />
                            PDF
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Sep 15, 2022</td>
                        <td className="px-6 py-4">Plan Upgrade - Standard to Professional</td>
                        <td className="px-6 py-4">$19.00</td>
                        <td className="px-6 py-4 text-right">
                          <Button variant="ghost" size="sm" className="h-8 gap-1">
                            <Download className="h-3.5 w-3.5" />
                            PDF
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
