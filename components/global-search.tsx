"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { FileText, FileSignature, Users, Calendar, Search } from "lucide-react"
import { useRouter } from "next/navigation"

export function GlobalSearch() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Mock search results
  const searchResults = [
    {
      category: "Documents",
      items: [
        { id: 1, name: "Contract with Acme Corp", path: "/dashboard/documents/1" },
        { id: 2, name: "Marketing Agreement", path: "/dashboard/documents/2" },
        { id: 3, name: "NDA Template", path: "/dashboard/documents/3" },
      ],
      icon: FileText,
    },
    {
      category: "Signatures",
      items: [
        { id: 1, name: "Pending: Sales Contract", path: "/dashboard/signatures/1" },
        { id: 2, name: "Completed: Partnership Agreement", path: "/dashboard/signatures/2" },
      ],
      icon: FileSignature,
    },
    {
      category: "Projects",
      items: [
        { id: 1, name: "Product Launch", path: "/dashboard/projects/1" },
        { id: 2, name: "Vendor Onboarding", path: "/dashboard/projects/2" },
      ],
      icon: Users,
    },
    {
      category: "Calendar",
      items: [
        { id: 1, name: "Team Meeting", path: "/dashboard/calendar?event=1" },
        { id: 2, name: "Document Review", path: "/dashboard/calendar?event=2" },
      ],
      icon: Calendar,
    },
  ]

  const handleSelect = (path: string) => {
    setOpen(false)
    router.push(path)
  }

  return (
    <>
      <Button
        variant="outline"
        className="w-full justify-start text-sm text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span>Search...</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documents, projects, signatures..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {searchResults.map((group) => (
            <CommandGroup key={group.category} heading={group.category}>
              {group.items.map((item) => (
                <CommandItem key={item.id} onSelect={() => handleSelect(item.path)}>
                  <group.icon className="mr-2 h-4 w-4" />
                  <span>{item.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}

