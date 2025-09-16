import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDown, ArrowUp, BarChart3, Download, FileText, PenTool, Users, Calendar } from "lucide-react"

export default function AnalyticsPage() {
  // Mock data for analytics
  const overviewStats = [
    {
      title: "Total Documents",
      value: "256",
      change: "+12%",
      trend: "up",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: "Signature Requests",
      value: "84",
      change: "+24%",
      trend: "up",
      icon: <PenTool className="h-4 w-4" />,
    },
    {
      title: "Active Users",
      value: "18",
      change: "+5%",
      trend: "up",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Completion Rate",
      value: "92%",
      change: "-3%",
      trend: "down",
      icon: <BarChart3 className="h-4 w-4" />,
    },
  ]

  // Mock data for document activity
  const documentActivity = [
    { name: "Created", value: 45 },
    { name: "Viewed", value: 120 },
    { name: "Downloaded", value: 32 },
    { name: "Shared", value: 28 },
    { name: "Signed", value: 64 },
  ]

  // Mock data for signature activity
  const signatureActivity = [
    { name: "Requested", value: 84 },
    { name: "Viewed", value: 76 },
    { name: "Completed", value: 62 },
    { name: "Expired", value: 8 },
    { name: "Canceled", value: 6 },
  ]

  // Mock data for top documents
  const topDocuments = [
    {
      name: "Service Agreement",
      views: 45,
      signatures: 12,
      completionRate: "92%",
    },
    {
      name: "NDA Contract",
      views: 38,
      signatures: 10,
      completionRate: "100%",
    },
    {
      name: "Employment Contract",
      views: 32,
      signatures: 8,
      completionRate: "75%",
    },
    {
      name: "Project Proposal",
      views: 28,
      signatures: 6,
      completionRate: "83%",
    },
    {
      name: "Client Onboarding",
      views: 24,
      signatures: 5,
      completionRate: "80%",
    },
  ]

  // Mock data for team activity
  const teamActivity = [
    {
      name: "Alex Johnson",
      documents: 32,
      signatures: 18,
      activity: "high",
    },
    {
      name: "Sarah Williams",
      documents: 28,
      signatures: 14,
      activity: "high",
    },
    {
      name: "Michael Brown",
      documents: 24,
      signatures: 10,
      activity: "medium",
    },
    {
      name: "Emily Davis",
      documents: 18,
      signatures: 8,
      activity: "medium",
    },
    {
      name: "David Clark",
      documents: 12,
      signatures: 4,
      activity: "low",
    },
  ]

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track your document and signature metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className="p-1 bg-primary/10 rounded-full">{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                {stat.trend === "up" ? (
                  <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
                )}
                <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Document Activity</CardTitle>
            <CardDescription>Overview of document-related activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-end justify-between gap-2">
              {documentActivity.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="bg-primary/80 w-12 rounded-t-md"
                    style={{ height: `${(item.value / 120) * 200}px` }}
                  ></div>
                  <div className="mt-2 text-xs font-medium">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Signature Activity</CardTitle>
            <CardDescription>Overview of signature-related activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-end justify-between gap-2">
              {signatureActivity.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="bg-primary/80 w-12 rounded-t-md"
                    style={{ height: `${(item.value / 84) * 200}px` }}
                  ></div>
                  <div className="mt-2 text-xs font-medium">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="documents">Top Documents</TabsTrigger>
          <TabsTrigger value="team">Team Activity</TabsTrigger>
          <TabsTrigger value="timeline">Activity Timeline</TabsTrigger>
        </TabsList>
        <TabsContent value="documents" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Documents</CardTitle>
              <CardDescription>Most viewed and signed documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="h-12 px-4 text-left font-medium">Document Name</th>
                      <th className="h-12 px-4 text-left font-medium">Views</th>
                      <th className="h-12 px-4 text-left font-medium">Signatures</th>
                      <th className="h-12 px-4 text-left font-medium">Completion Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topDocuments.map((doc, index) => (
                      <tr key={index} className="border-b transition-colors hover:bg-muted/50">
                        <td className="p-4 font-medium">{doc.name}</td>
                        <td className="p-4">{doc.views}</td>
                        <td className="p-4">{doc.signatures}</td>
                        <td className="p-4">{doc.completionRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Documents
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="team" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Activity</CardTitle>
              <CardDescription>Activity metrics for team members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="h-12 px-4 text-left font-medium">Team Member</th>
                      <th className="h-12 px-4 text-left font-medium">Documents</th>
                      <th className="h-12 px-4 text-left font-medium">Signatures</th>
                      <th className="h-12 px-4 text-left font-medium">Activity Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamActivity.map((member, index) => (
                      <tr key={index} className="border-b transition-colors hover:bg-muted/50">
                        <td className="p-4 font-medium">{member.name}</td>
                        <td className="p-4">{member.documents}</td>
                        <td className="p-4">{member.signatures}</td>
                        <td className="p-4">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              member.activity === "high"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                : member.activity === "medium"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                            }`}
                          >
                            {member.activity.charAt(0).toUpperCase() + member.activity.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Team Details
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="timeline" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
              <CardDescription>Recent activity across your workspace</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="h-full w-px bg-border"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-x-2">
                      <div className="font-medium">Document Created</div>
                      <div className="text-xs text-muted-foreground">Today at 10:30 AM</div>
                    </div>
                    <p className="text-sm mt-1">Alex Johnson created "Client Onboarding Document"</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <PenTool className="h-5 w-5 text-primary" />
                    </div>
                    <div className="h-full w-px bg-border"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-x-2">
                      <div className="font-medium">Signature Requested</div>
                      <div className="text-xs text-muted-foreground">Today at 11:15 AM</div>
                    </div>
                    <p className="text-sm mt-1">Sarah Williams requested signatures for "Service Agreement"</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="h-full w-px bg-border"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-x-2">
                      <div className="font-medium">Team Member Added</div>
                      <div className="text-xs text-muted-foreground">Yesterday at 2:45 PM</div>
                    </div>
                    <p className="text-sm mt-1">Emily Davis was added to the team</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="h-full w-px bg-border"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-x-2">
                      <div className="font-medium">Monthly Report Generated</div>
                      <div className="text-xs text-muted-foreground">Yesterday at 4:30 PM</div>
                    </div>
                    <p className="text-sm mt-1">Monthly analytics report for March 2025 was generated</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Activity
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
