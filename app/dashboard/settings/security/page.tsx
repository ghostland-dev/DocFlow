import Link from "next/link"
import { ChevronLeft, Smartphone, Mail, Key, Shield, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

export default function SecuritySettingsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/settings">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Security Settings</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Update your password to keep your account secure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
            <p className="text-sm text-muted-foreground">
              Password must be at least 8 characters and include a number and a special character.
            </p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Update Password</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>Add an extra layer of security to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Two-Factor Authentication</Label>
              <p className="text-sm text-muted-foreground">Require a verification code when signing in</p>
            </div>
            <Switch id="2fa" />
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Authentication Methods</h3>

            <div className="flex items-center space-x-4">
              <Smartphone className="h-8 w-8 text-muted-foreground" />
              <div className="flex-1">
                <p className="font-medium">Authenticator App</p>
                <p className="text-sm text-muted-foreground">
                  Use an authenticator app like Google Authenticator or Authy to generate verification codes
                </p>
              </div>
              <Button variant="outline">Setup</Button>
            </div>

            <Separator />

            <div className="flex items-center space-x-4">
              <Mail className="h-8 w-8 text-muted-foreground" />
              <div className="flex-1">
                <p className="font-medium">Email Verification</p>
                <p className="text-sm text-muted-foreground">
                  Receive verification codes via email at alex@example.com
                </p>
              </div>
              <Button variant="outline">Setup</Button>
            </div>

            <Separator />

            <div className="flex items-center space-x-4">
              <Key className="h-8 w-8 text-muted-foreground" />
              <div className="flex-1">
                <p className="font-medium">Recovery Keys</p>
                <p className="text-sm text-muted-foreground">
                  Generate backup codes to use if you can't access your other authentication methods
                </p>
              </div>
              <Button variant="outline">Generate</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sessions</CardTitle>
          <CardDescription>Manage your active sessions and sign out from other devices</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Current Session</p>
                  <p className="text-sm text-muted-foreground">Chrome on Windows • IP 192.168.1.1</p>
                  <p className="text-sm text-muted-foreground">Started: Today at 10:30 AM</p>
                </div>
              </div>
              <Badge>Active</Badge>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <Shield className="h-8 w-8 text-muted-foreground" />
                <div>
                  <p className="font-medium">Mobile App</p>
                  <p className="text-sm text-muted-foreground">iPhone • IP 203.0.113.1</p>
                  <p className="text-sm text-muted-foreground">Last active: 2 days ago</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-red-500">
                Revoke
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <Shield className="h-8 w-8 text-muted-foreground" />
                <div>
                  <p className="font-medium">Safari</p>
                  <p className="text-sm text-muted-foreground">MacOS • IP 198.51.100.1</p>
                  <p className="text-sm text-muted-foreground">Last active: 5 days ago</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-red-500">
                Revoke
              </Button>
            </div>
          </div>

          <Button variant="outline" className="w-full text-red-500">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out of All Other Sessions
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security Log</CardTitle>
          <CardDescription>Recent security-related activity on your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col space-y-1">
              <p className="font-medium">Password Changed</p>
              <p className="text-sm text-muted-foreground">October 15, 2023 at 2:30 PM • IP 192.168.1.1</p>
            </div>

            <Separator />

            <div className="flex flex-col space-y-1">
              <p className="font-medium">New Sign-in</p>
              <p className="text-sm text-muted-foreground">October 10, 2023 at 9:15 AM • IP 203.0.113.1 • iPhone</p>
            </div>

            <Separator />

            <div className="flex flex-col space-y-1">
              <p className="font-medium">Two-Factor Authentication Enabled</p>
              <p className="text-sm text-muted-foreground">October 5, 2023 at 11:45 AM • IP 192.168.1.1</p>
            </div>

            <Separator />

            <div className="flex flex-col space-y-1">
              <p className="font-medium">New Sign-in</p>
              <p className="text-sm text-muted-foreground">
                September 28, 2023 at 3:20 PM • IP 198.51.100.1 • Safari on MacOS
              </p>
            </div>

            <Separator />

            <div className="flex flex-col space-y-1">
              <p className="font-medium">Email Address Changed</p>
              <p className="text-sm text-muted-foreground">September 20, 2023 at 10:10 AM • IP 192.168.1.1</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View Full Security Log
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
