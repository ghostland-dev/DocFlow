import { NextResponse } from "next/server"

// This would connect to your database in a real implementation
const projects = [
  {
    id: "PRJ-001",
    title: "Website Redesign",
    status: "In Progress",
    progress: 65,
    dueDate: "2023-11-15",
    members: [
      { name: "John Doe", email: "john@example.com", role: "Project Manager" },
      { name: "Jane Smith", email: "jane@example.com", role: "Designer" },
      { name: "Alex Johnson", email: "alex@example.com", role: "Developer" },
    ],
    documents: 8,
  },
  {
    id: "PRJ-002",
    title: "Product Launch",
    status: "Planning",
    progress: 25,
    dueDate: "2023-12-10",
    members: [
      { name: "Maria Garcia", email: "maria@example.com", role: "Marketing" },
      { name: "Robert Chen", email: "robert@example.com", role: "Product Manager" },
    ],
    documents: 5,
  },
]

export async function GET() {
  // In a real implementation, this would fetch from a database
  return NextResponse.json(projects)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.title) {
      return NextResponse.json({ error: "Project title is required" }, { status: 400 })
    }

    // Create a new project (in a real app, this would save to a database)
    const newProject = {
      id: `PRJ-${Math.floor(1000 + Math.random() * 9000)}`,
      title: body.title,
      status: body.status || "Planning",
      progress: body.progress || 0,
      dueDate: body.dueDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      members: body.members || [],
      documents: 0,
    }

    // In a real implementation, you would save to a database here

    return NextResponse.json(newProject, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 })
  }
}
