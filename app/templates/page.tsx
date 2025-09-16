"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Copy, FileText, Filter, MoreHorizontal, Pencil, Plus, Search, Star, StarOff, Tag, Trash } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const templates = [
    {
      id: "template-001",
      name: "Service Agreement",
      description: "Standard service agreement template with customizable terms",
      category: "Business",
      usage: 45,
      favorite: true,
      lastUpdated: "2023-10-05",
    },
    {
      id: "template-002",
      name: "Non-Disclosure Agreement",
      description: "Standard NDA template for protecting confidential information",
      category: "Legal",
      usage: 38,
      favorite: true,
      lastUpdated: "2023-09-28",
    },
    {
      id: "template-003",
      name: "Employment Contract",
      description: "Standard employment agreement with customizable terms",
      category: "HR",
      usage: 32,
      favorite: false,
      lastUpdated: "2023-09-15",
    },
    {
      id: "template-004",
      name: "Vendor Agreement",
      description: "Template for establishing vendor relationships and services",
      category: "Business",
      usage: 28,
      favorite: false,
      lastUpdated: "2023-08-22",
    },
    {
      id: "template-005",
      name: "Client Onboarding",
      description: "Client onboarding documents and information collection",
      category: "Business",
      usage: 22,
      favorite: false,
      lastUpdated: "2023-07-30",
    },
    {
      id: "template-006",
      name: "Lease Agreement",
      description: "Property lease agreement with customizable terms",
      category: "Real Estate",
      usage: 18,
      favorite: false,
      lastUpdated: "2023-07-12",
    },
  ]

  const filteredTemplates = templates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Document Templates</h1>
          <p className="text-muted-foreground">Create and manage reusable document templates</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Template
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
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
          <TabsTrigger value="all">All Templates</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="legal">Legal</TabsTrigger>
          <TabsTrigger value="hr">HR</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((template) => (
                <Card key={template.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">
                          {template.name}
                          {template.favorite && <Star className="h-4 w-4 fill-warning text-warning" />}
                        </CardTitle>
                        <CardDescription>{template.description}</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Pencil className="h-4 w-4 mr-2" />
                            Edit Template
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="h-4 w-4 mr-2" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            {template.favorite ? (
                              <>
                                <StarOff className="h-4 w-4 mr-2" />
                                Remove from Favorites
                              </>
                            ) : (
                              <>
                                <Star className="h-4 w-4 mr-2" />
                                Add to Favorites
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {template.category}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        Used {template.usage} times
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Last updated: {template.lastUpdated}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-3">
                    <div className="flex gap-2 w-full">
                      <Button variant="outline" className="flex-1" asChild>
                        <Link href={`/templates/${template.id}`}>Preview</Link>
                      </Button>
                      <Button className="flex-1" asChild>
                        <Link href={`/document-editor?template=${template.id}`}>Use Template</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center p-8 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No templates found</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">Try adjusting your search or filters</p>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Create New Template
                </Button>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="favorites">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredTemplates
              .filter((t) => t.favorite)
              .map((template) => (
                <Card key={template.id} className="overflow-hidden">
                  {/* Same card content as above */}
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">
                          {template.name}
                          <Star className="h-4 w-4 fill-warning text-warning" />
                        </CardTitle>
                        <CardDescription>{template.description}</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Pencil className="h-4 w-4 mr-2" />
                            Edit Template
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="h-4 w-4 mr-2" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <StarOff className="h-4 w-4 mr-2" />
                            Remove from Favorites
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {template.category}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        Used {template.usage} times
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Last updated: {template.lastUpdated}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-3">
                    <div className="flex gap-2 w-full">
                      <Button variant="outline" className="flex-1" asChild>
                        <Link href={`/templates/${template.id}`}>Preview</Link>
                      </Button>
                      <Button className="flex-1" asChild>
                        <Link href={`/document-editor?template=${template.id}`}>Use Template</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="business">
          <div className="mt-6">
            <p className="text-muted-foreground">This tab would show only business templates.</p>
          </div>
        </TabsContent>

        <TabsContent value="legal">
          <div className="mt-6">
            <p className="text-muted-foreground">This tab would show only legal templates.</p>
          </div>
        </TabsContent>

        <TabsContent value="hr">
          <div className="mt-6">
            <p className="text-muted-foreground">This tab would show only HR templates.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

