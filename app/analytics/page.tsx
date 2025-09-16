"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDown, ArrowUp, BarChart3, Download, FileText, Filter, PieChart, Users } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState("30d")

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Monitor your document and signature metrics</p>
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
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Documents</CardDescription>
            <div className="flex items-end justify-between">
              <CardTitle className="text-3xl">156</CardTitle>
              <div className="flex items-center text-sm text-success">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>12%</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">vs previous period</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Signatures Completed</CardDescription>
            <div className="flex items-end justify-between">
              <CardTitle className="text-3xl">289</CardTitle>
              <div className="flex items-center text-sm text-success">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>18%</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">vs previous period</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Users</CardDescription>
            <div className="flex items-end justify-between">
              <CardTitle className="text-3xl">42</CardTitle>
              <div className="flex items-center text-sm text-success">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>5%</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">vs previous period</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Average Completion Time</CardDescription>
            <div className="flex items-end justify-between">
              <CardTitle className="text-3xl">1.8 days</CardTitle>
              <div className="flex items-center text-sm text-destructive">
                <ArrowDown className="h-4 w-4 mr-1" />
                <span>8%</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">vs previous period</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="documents" className="space-y-6">
        <TabsList>
          <TabsTrigger value="documents" className="gap-2">
            <FileText className="h-4 w-4" />
            Documents
          </TabsTrigger>
          <TabsTrigger value="signatures" className="gap-2">
            <PieChart className="h-4 w-4" />
            Signatures
          </TabsTrigger>
          <TabsTrigger value="users" className="gap-2">
            <Users className="h-4 w-4" />
            Users
          </TabsTrigger>
          <TabsTrigger value="activity" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            Activity
          </TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Document Activity</CardTitle>
                <CardDescription>Document creation and completion over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                {/* This would be a chart in a real implementation */}
                <div className="text-center space-y-4">
                  <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Chart showing document creation and completion trends</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Document Types</CardTitle>
                <CardDescription>Distribution of documents by type</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                {/* This would be a chart in a real implementation */}
                <div className="text-center space-y-4">
                  <PieChart className="h-16 w-16 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Chart showing document type distribution</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top Documents</CardTitle>
              <CardDescription>Most frequently used document templates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase border-b">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Document Template
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Usage Count
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Avg. Completion Time
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Completion Rate
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Trend
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Service Agreement", count: 45, time: "1.2 days", rate: "92%", trend: "up" },
                      { name: "NDA", count: 38, time: "0.8 days", rate: "95%", trend: "up" },
                      { name: "Employment Contract", count: 32, time: "2.5 days", rate: "88%", trend: "down" },
                      { name: "Vendor Agreement", count: 28, time: "1.9 days", rate: "90%", trend: "up" },
                      { name: "Client Onboarding", count: 22, time: "1.5 days", rate: "85%", trend: "down" },
                    ].map((doc, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="px-6 py-4 font-medium">{doc.name}</td>
                        <td className="px-6 py-4">{doc.count}</td>
                        <td className="px-6 py-4">{doc.time}</td>
                        <td className="px-6 py-4">{doc.rate}</td>
                        <td className="px-6 py-4">
                          {doc.trend === "up" ? (
                            <div className="flex items-center text-success">
                              <ArrowUp className="h-4 w-4 mr-1" />
                              <span>Increasing</span>
                            </div>
                          ) : (
                            <div className="flex items-center text-destructive">
                              <ArrowDown className="h-4 w-4 mr-1" />
                              <span>Decreasing</span>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="signatures" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Signature Completion Rate</CardTitle>
                <CardDescription>Percentage of documents fully signed over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                {/* This would be a chart in a real implementation */}
                <div className="text-center space-y-4">
                  <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Chart showing signature completion rate trends</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Signature Methods</CardTitle>
                <CardDescription>Distribution of signature methods used</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                {/* This would be a chart in a real implementation */}
                <div className="text-center space-y-4">
                  <PieChart className="h-16 w-16 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Chart showing signature method distribution</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Signature Performance</CardTitle>
              <CardDescription>Signature metrics by document type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase border-b">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Document Type
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Avg. Time to First Signature
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Avg. Time to Complete
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Abandonment Rate
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "Service Agreement",
                        firstSign: "5.2 hours",
                        complete: "1.2 days",
                        abandon: "8%",
                        status: "good",
                      },
                      { type: "NDA", firstSign: "3.5 hours", complete: "0.8 days", abandon: "5%", status: "good" },
                      {
                        type: "Employment Contract",
                        firstSign: "8.1 hours",
                        complete: "2.5 days",
                        abandon: "12%",
                        status: "warning",
                      },
                      {
                        type: "Vendor Agreement",
                        firstSign: "6.3 hours",
                        complete: "1.9 days",
                        abandon: "10%",
                        status: "good",
                      },
                      {
                        type: "Client Onboarding",
                        firstSign: "7.2 hours",
                        complete: "1.5 days",
                        abandon: "15%",
                        status: "warning",
                      },
                    ].map((item, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="px-6 py-4 font-medium">{item.type}</td>
                        <td className="px-6 py-4">{item.firstSign}</td>
                        <td className="px-6 py-4">{item.complete}</td>
                        <td className="px-6 py-4">{item.abandon}</td>
                        <td className="px-6 py-4">
                          <Badge variant={item.status === "good" ? "success" : "warning"}>
                            {item.status === "good" ? "Good" : "Needs Improvement"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Activity</CardTitle>
              <CardDescription>User engagement and activity metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">This tab would contain user analytics.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Activity</CardTitle>
              <CardDescription>Overall system usage and performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">This tab would contain system activity analytics.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

