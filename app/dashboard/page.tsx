"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileSignature, FileText, Plus, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Document
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Documents Pending</CardDescription>
                <CardTitle className="text-3xl">12</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+2 since last week</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Documents Signed</CardDescription>
                <CardTitle className="text-3xl">48</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+5 since last week</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Active Projects</CardDescription>
                <CardTitle className="text-3xl">7</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+1 since last week</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Team Members</CardDescription>
                <CardTitle className="text-3xl">15</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">No change since last week</div>
              </CardContent>
            </Card>
          </div>

          {/* Recent activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent document and project activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Contract with Acme Corp",
                    type: "Document",
                    status: "Awaiting signature",
                    time: "2 hours ago",
                    icon: <FileText className="h-4 w-4" />,
                  },
                  {
                    title: "Marketing Agreement",
                    type: "Document",
                    status: "Signed",
                    time: "Yesterday",
                    icon: <FileSignature className="h-4 w-4" />,
                  },
                  {
                    title: "Product Launch",
                    type: "Project",
                    status: "In progress (75%)",
                    time: "Updated 3 days ago",
                    icon: <Users className="h-4 w-4" />,
                  },
                  {
                    title: "Vendor Onboarding",
                    type: "Project",
                    status: "In progress (30%)",
                    time: "Updated 5 days ago",
                    icon: <Users className="h-4 w-4" />,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      {item.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{item.title}</p>
                        <span className="text-xs text-muted-foreground">{item.time}</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="text-muted-foreground">{item.type} • </span>
                        <span className="ml-1 font-medium">{item.status}</span>
                      </div>
                      {item.status.includes("%") && (
                        <Progress value={Number.parseInt(item.status.match(/\d+/)[0])} className="h-1.5 mt-2" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Manage your documents and signature requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <h3 className="text-lg font-medium mb-2">View all your documents</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For a complete view of all your documents and signature requests, visit the Documents page.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/dashboard/documents">View Documents</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Manage your projects and team collaboration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <h3 className="text-lg font-medium mb-2">View all your projects</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For a complete view of all your projects and team collaboration, visit the Projects page.
                </p>
                <Link href="/dashboard/projects">
                  <Button>Go to Projects</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Team</CardTitle>
              <CardDescription>Manage your team members and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <h3 className="text-lg font-medium mb-2">View your team</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For a complete view of your team members and organization settings, visit the Organizations page.
                </p>
                <Link href="/dashboard/organizations">
                  <Button>Go to Organizations</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

