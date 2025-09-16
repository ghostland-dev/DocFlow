import { NextResponse } from "next/server"

// This would connect to your database in a real implementation
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
]

export async function GET() {
  // In a real implementation, this would fetch from a database
  return NextResponse.json(documents)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.title) {
      return NextResponse.json({ error: "Document title is required" }, { status: 400 })
    }

    // Create a new document (in a real app, this would save to a database)
    const newDocument = {
      id: `DOC-${Math.floor(1000 + Math.random() * 9000)}`,
      title: body.title,
      status: body.status || "Draft",
      created: new Date().toISOString().split("T")[0],
      signers: body.signers || [],
    }

    // In a real implementation, you would save to a database here

    return NextResponse.json(newDocument, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create document" }, { status: 500 })
  }
}

