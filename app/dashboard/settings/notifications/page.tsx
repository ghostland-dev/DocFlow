import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function NotificationSettingsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/settings">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Notification Settings</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>Configure which email notifications you receive</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Document Notifications</h3>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-signature-requests">Signature Requests</Label>
                <p className="text-sm text-muted-foreground">Receive emails when someone requests your signature</p>
              </div>
              <Switch id="email-signature-requests" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-document-signed">Documents Signed</Label>
                <p className="text-sm text-muted-foreground">Receive emails when your documents are signed</p>
              </div>
              <Switch id="email-document-signed" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-document-viewed">Documents Viewed</Label>
                <p className="text-sm text-muted-foreground">Receive emails when your documents are viewed</p>
              </div>
              <Switch id="email-document-viewed" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-document-expiring">Expiring Documents</Label>
                <p className="text-sm text-muted-foreground">Receive emails when your documents are about to expire</p>
              </div>
              <Switch id="email-document-expiring" defaultChecked />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Project Notifications</h3>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-project-updates">Project Updates</Label>
                <p className="text-sm text-muted-foreground">Receive emails about updates to your projects</p>
              </div>
              <Switch id="email-project-updates" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-project-comments">Comments</Label>
                <p className="text-sm text-muted-foreground">Receive emails when someone comments on your projects</p>
              </div>
              <Switch id="email-project-comments" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-project-members">Team Members</Label>
                <p className="text-sm text-muted-foreground">
                  Receive emails when someone joins or leaves your projects
                </p>
              </div>
              <Switch id="email-project-members" />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Account Notifications</h3>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-security">Security Alerts</Label>
                <p className="text-sm text-muted-foreground">Receive emails about security-related events</p>
              </div>
              <Switch id="email-security" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-billing">Billing Updates</Label>
                <p className="text-sm text-muted-foreground">Receive emails about your billing and subscription</p>
              </div>
              <Switch id="email-billing" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-marketing">Marketing & Updates</Label>
                <p className="text-sm text-muted-foreground">Receive emails about new features and updates</p>
              </div>
              <Switch id="email-marketing" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Reset to Defaults</Button>
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
          <CardDescription>Configure which push notifications you receive</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-enabled">Enable Push Notifications</Label>
                <p className="text-sm text-muted-foreground">Allow the app to send you push notifications</p>
              </div>
              <Switch id="push-enabled" defaultChecked />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Notification Frequency</h3>

            <RadioGroup defaultValue="immediate">
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="immediate" id="immediate" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="immediate" className="font-medium">
                    Immediate
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive notifications as events happen</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <RadioGroupItem value="daily" id="daily" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="daily" className="font-medium">
                    Daily Digest
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive a daily summary of all notifications</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <RadioGroupItem value="weekly" id="weekly" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="weekly" className="font-medium">
                    Weekly Digest
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive a weekly summary of all notifications</p>
                </div>
              </div>
            </RadioGroup>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Notification Types</h3>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-signatures">Signature Requests</Label>
                <p className="text-sm text-muted-foreground">Receive push notifications for signature requests</p>
              </div>
              <Switch id="push-signatures" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-documents">Document Updates</Label>
                <p className="text-sm text-muted-foreground">Receive push notifications for document updates</p>
              </div>
              <Switch id="push-documents" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-projects">Project Updates</Label>
                <p className="text-sm text-muted-foreground">Receive push notifications for project activity</p>
              </div>
              <Switch id="push-projects" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-messages">Messages</Label>
                <p className="text-sm text-muted-foreground">Receive push notifications for new messages</p>
              </div>
              <Switch id="push-messages" defaultChecked />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Reset to Defaults</Button>
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

