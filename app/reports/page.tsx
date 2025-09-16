"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Calendar, Download, FileText, LineChart, PieChart, Share2, Users } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState("30d")
  const [reportType, setReportType] = useState("activity")

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">Detailed insights and analytics for your organization</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="12m">Last 12 months</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Date Range
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <Tabs defaultValue="activity" className="space-y-6" onValueChange={setReportType}>
        <TabsList>
          <TabsTrigger value="activity" className="gap-2">
            <LineChart className="h-4 w-4" />
            Activity
          </TabsTrigger>
          <TabsTrigger value="documents" className="gap-2">
            <FileText className="h-4 w-4" />
            Documents
          </TabsTrigger>
          <TabsTrigger value="users" className="gap-2">
            <Users className="h-4 w-4" />
            Users
          </TabsTrigger>
          <TabsTrigger value="custom" className="gap-2">
            <BarChart className="h-4 w-4" />
            Custom
          </TabsTrigger>
        </TabsList>

        <TabsContent value="activity" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Documents Created</CardDescription>
                <CardTitle className="text-3xl">156</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-success flex items-center">+12% from previous period</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Documents Signed</CardDescription>
                <CardTitle className="text-3xl">89</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-success flex items-center">+8% from previous period</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Active Users</CardDescription>
                <CardTitle className="text-3xl">42</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-success flex items-center">+5% from previous period</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Avg. Completion Time</CardDescription>
                <CardTitle className="text-3xl">1.8 days</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-destructive flex items-center">+0.3 days from previous period</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Activity Over Time</CardTitle>
              <CardDescription>Document and signature activity for the selected period</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              {/* This would be a chart in a real implementation */}
              <div className="text-center space-y-4">
                <LineChart className="h-16 w-16 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground">Chart showing activity trends over time</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Document Status Distribution</CardTitle>
                <CardDescription>Breakdown of documents by status</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                {/* This would be a chart in a real implementation */}
                <div className="text-center space-y-4">
                  <PieChart className="h-16 w-16 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Chart showing document status distribution</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Activity</CardTitle>
                <CardDescription>Most active users in your organization</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                {/* This would be a chart in a real implementation */}
                <div className="text-center space-y-4">
                  <BarChart className="h-16 w-16 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Chart showing user activity metrics</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Document Analytics</CardTitle>
              <CardDescription>Detailed document metrics and statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">This tab would contain detailed document analytics.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Analytics</CardTitle>
              <CardDescription>Detailed user metrics and statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">This tab would contain detailed user analytics.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="custom" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Custom Reports</CardTitle>
              <CardDescription>Create and save custom reports</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">This tab would allow creating custom reports.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Saved Reports</CardTitle>
          <CardDescription>Your saved and scheduled reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
              <div>
                <h3 className="font-medium">Monthly Activity Summary</h3>
                <p className="text-sm text-muted-foreground">Document and signature activity for the month</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
              <div>
                <h3 className="font-medium">User Engagement Report</h3>
                <p className="text-sm text-muted-foreground">User activity and engagement metrics</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
              <div>
                <h3 className="font-medium">Document Completion Times</h3>
                <p className="text-sm text-muted-foreground">Analysis of document completion times</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
