"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Calendar,
  Download,
  FileText,
  Filter,
  LineChart,
  PieChart,
  Plus,
  RefreshCw,
  Users,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState("30days")

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">Track document activity and team performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Report
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
        <Tabs defaultValue="overview" className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Documents</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Users</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-3.5 w-3.5" />
            <span>Filters</span>
          </Button>
          <Select defaultValue={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last 12 months</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <TabsContent value="overview" className="space-y-6 mt-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Documents</CardDescription>
              <CardTitle className="text-3xl">1,248</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <span className="text-emerald-500 font-medium">↑ 12%</span> from previous period
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Pending Signatures</CardDescription>
              <CardTitle className="text-3xl">37</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <span className="text-rose-500 font-medium">↑ 8%</span> from previous period
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Completed Documents</CardDescription>
              <CardTitle className="text-3xl">892</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <span className="text-emerald-500 font-medium">↑ 23%</span> from previous period
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Users</CardDescription>
              <CardTitle className="text-3xl">156</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <span className="text-emerald-500 font-medium">↑ 5%</span> from previous period
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Document Activity</CardTitle>
              <CardDescription>Document creation and completion over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/40 rounded-md">
                <LineChart className="h-8 w-8 text-muted-foreground" />
                <span className="ml-2 text-sm text-muted-foreground">Activity chart visualization</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Document Types</CardTitle>
              <CardDescription>Breakdown by document category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] flex items-center justify-center bg-muted/40 rounded-md">
                <PieChart className="h-8 w-8 text-muted-foreground" />
                <span className="ml-2 text-sm text-muted-foreground">Document types chart</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                  <span className="text-sm">Contracts (42%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Agreements (28%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <span className="text-sm">Forms (18%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                  <span className="text-sm">Other (12%)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Signature Completion</CardTitle>
              <CardDescription>Average time to complete signatures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] flex items-center justify-center bg-muted/40 rounded-md">
                <BarChart className="h-8 w-8 text-muted-foreground" />
                <span className="ml-2 text-sm text-muted-foreground">Completion time chart</span>
              </div>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Contracts</span>
                    <span className="font-medium">1.8 days</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Agreements</span>
                    <span className="font-medium">2.3 days</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Forms</span>
                    <span className="font-medium">0.9 days</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>Your saved and scheduled reports</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-muted/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Report Name
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Created
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Schedule
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Monthly Document Activity</td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="flex items-center gap-1 w-fit">
                        <LineChart className="h-3 w-3" />
                        Activity
                      </Badge>
                    </td>
                    <td className="px-6 py-4">Oct 1, 2023</td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                        <Calendar className="h-3 w-3" />
                        Monthly
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <Download className="h-3.5 w-3.5" />
                        Export
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Team Performance</td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="flex items-center gap-1 w-fit">
                        <BarChart className="h-3 w-3" />
                        Performance
                      </Badge>
                    </td>
                    <td className="px-6 py-4">Sep 15, 2023</td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                        <Calendar className="h-3 w-3" />
                        Weekly
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <Download className="h-3.5 w-3.5" />
                        Export
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Document Completion Rates</td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="flex items-center gap-1 w-fit">
                        <PieChart className="h-3 w-3" />
                        Analytics
                      </Badge>
                    </td>
                    <td className="px-6 py-4">Aug 22, 2023</td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="flex items-center gap-1 w-fit">
                        <Calendar className="h-3 w-3" />
                        One-time
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <Download className="h-3.5 w-3.5" />
                        Export
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t bg-muted/50 py-2">
            <Button variant="ghost">View All Reports</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="documents" className="space-y-6 mt-0">
        <Card>
          <CardHeader>
            <CardTitle>Document Analytics</CardTitle>
            <CardDescription>Detailed metrics about document usage and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">Document analytics content would be displayed here.</div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="users" className="space-y-6 mt-0">
        <Card>
          <CardHeader>
            <CardTitle>User Analytics</CardTitle>
            <CardDescription>Detailed metrics about user activity and engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">User analytics content would be displayed here.</div>
          </CardContent>
        </Card>
      </TabsContent>
    </div>
  )
}

