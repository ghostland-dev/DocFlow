import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, FileSignature, FileText, Lock, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <FileSignature className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DocuFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Secure Document Signing <br /> with Project Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-[800px] mb-10">
              A complete solution for electronic signatures, document management, and team collaboration in one powerful
              platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 container">
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <FileSignature className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Electronic Signatures</CardTitle>
                <CardDescription>Legally compliant electronic signatures with PKI and eID support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Multi-party signing workflows</li>
                  <li>• Customizable signature blocks</li>
                  <li>• Complete audit trails</li>
                  <li>• Compliance with eIDAS, ESIGN, and UETA</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/features/signatures">
                  <Button variant="ghost" className="gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Document Management</CardTitle>
                <CardDescription>Create, customize, and manage all your documents in one place</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• WYSIWYG PDF form builder</li>
                  <li>• Reusable document templates</li>
                  <li>• Secure cloud storage</li>
                  <li>• Version control and history</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/features/documents">
                  <Button variant="ghost" className="gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Project Management</CardTitle>
                <CardDescription>Integrated tools to manage your team and workflows</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Real-time collaboration</li>
                  <li>• Task assignment and tracking</li>
                  <li>• Calendar and resource planning</li>
                  <li>• Custom reporting and analytics</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/features/project-management">
                  <Button variant="ghost" className="gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>Advanced security features to protect your sensitive data</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• VPN-secured hosting</li>
                  <li>• Multi-factor authentication</li>
                  <li>• End-to-end encryption</li>
                  <li>• Role-based access control</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/features/security">
                  <Button variant="ghost" className="gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-primary mb-4"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m2 12 5.25 5.25" />
                  <path d="M9 6.75 15 12l-6 5.25" />
                </svg>
                <CardTitle>Workflow Automation</CardTitle>
                <CardDescription>Automate repetitive tasks and streamline your processes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Automated email notifications</li>
                  <li>• Conditional document routing</li>
                  <li>• Scheduled reminders</li>
                  <li>• API integrations with CRM/ERP</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/features/automation">
                  <Button variant="ghost" className="gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-primary mb-4"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01" />
                  <path d="M16 6h.01" />
                  <path d="M12 6h.01" />
                  <path d="M12 10h.01" />
                  <path d="M8 10h.01" />
                  <path d="M16 10h.01" />
                  <path d="M12 14h.01" />
                  <path d="M8 14h.01" />
                  <path d="M16 14h.01" />
                </svg>
                <CardTitle>Mobile Accessibility</CardTitle>
                <CardDescription>Access your documents and projects from anywhere</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Responsive web interface</li>
                  <li>• Native mobile apps</li>
                  <li>• Offline capabilities</li>
                  <li>• Real-time synchronization</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/features/mobile">
                  <Button variant="ghost" className="gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 bg-muted/50">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <FileSignature className="h-5 w-5 text-primary" />
            <span className="font-semibold">DocuFlow</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DocuFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

