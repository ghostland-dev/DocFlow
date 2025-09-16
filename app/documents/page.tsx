"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowUpDown,
  Check,
  Clock,
  Download,
  FileSignature,
  FileText,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  X,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const documents = [
    {
      id: "DOC-001",
      title: "Service Agreement",
      status: "Pending",
      created: "2023-10-15",
      signers: [
        { name: "John Doe", email: "john@example.com", status: "Signed" },
        { name: "Jane Smith", email: "jane@example.com", status: "Pending" },
      ],
    },
    {
      id: "DOC-002",
      title: "Employment Contract",
      status: "Completed",
      created: "2023-10-10",
      signers: [
        { name: "Alex Johnson", email: "alex@example.com", status: "Signed" },
        { name: "Maria Garcia", email: "maria@example.com", status: "Signed" },
      ],
    },
    {
      id: "DOC-003",
      title: "NDA - Project Alpha",
      status: "Draft",
      created: "2023-10-18",
      signers: [],
    },
    {
      id: "DOC-004",
      title: "Vendor Agreement",
      status: "Pending",
      created: "2023-10-12",
      signers: [
        { name: "Robert Chen", email: "robert@example.com", status: "Signed" },
        { name: "Sarah Williams", email: "sarah@example.com", status: "Pending" },
        { name: "David Miller", email: "david@example.com", status: "Pending" },
      ],
    },
    {
      id: "DOC-005",
      title: "Lease Agreement",
      status: "Completed",
      created: "2023-10-05",
      signers: [
        { name: "Michael Brown", email: "michael@example.com", status: "Signed" },
        { name: "Lisa Taylor", email: "lisa@example.com", status: "Signed" },
      ],
    },
  ]

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Documents</h1>
          <p className="text-muted-foreground">Manage your documents and signature requests</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Document
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search documents..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase border-b">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-medium flex items-center gap-1">
                        Document
                        <ArrowUpDown className="h-3 w-3" />
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Created
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Signers
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDocuments.length > 0 ? (
                      filteredDocuments.map((doc, index) => (
                        <tr key={doc.id} className="border-b hover:bg-muted/50">
                          <td className="px-6 py-4 font-medium">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-md bg-primary/10">
                                <FileText className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <div className="font-medium">{doc.title}</div>
                                <div className="text-xs text-muted-foreground">{doc.id}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Badge
                              variant={
                                doc.status === "Completed"
                                  ? "success"
                                  : doc.status === "Pending"
                                    ? "warning"
                                    : "outline"
                              }
                              className="flex w-fit items-center gap-1"
                            >
                              {doc.status === "Completed" ? (
                                <Check className="h-3 w-3" />
                              ) : doc.status === "Pending" ? (
                                <Clock className="h-3 w-3" />
                              ) : (
                                <FileText className="h-3 w-3" />
                              )}
                              {doc.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            {new Date(doc.created).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            {doc.signers.length > 0 ? (
                              <div className="flex -space-x-2">
                                {doc.signers.slice(0, 3).map((signer, i) => (
                                  <Avatar key={i} className="h-7 w-7 border-2 border-background">
                                    <AvatarFallback className="text-xs">
                                      {signer.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                ))}
                                {doc.signers.length > 3 && (
                                  <div className="flex items-center justify-center h-7 w-7 rounded-full bg-muted border-2 border-background text-xs font-medium">
                                    +{doc.signers.length - 3}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <span className="text-muted-foreground text-xs">No signers yet</span>
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
                                <DropdownMenuItem>
                                  <FileSignature className="h-4 w-4 mr-2" />
                                  Sign
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Download className="h-4 w-4 mr-2" />
                                  Download
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <X className="h-4 w-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-8 text-center">
                          <div className="flex flex-col items-center gap-2">
                            <FileText className="h-8 w-8 text-muted-foreground" />
                            <h3 className="font-medium">No documents found</h3>
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

        <TabsContent value="pending">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">This tab would show only pending documents.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">This tab would show only completed documents.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="draft">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">This tab would show only draft documents.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

