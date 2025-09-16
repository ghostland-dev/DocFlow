"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileQuestion, HelpCircle, LifeBuoy, Mail, MessageSquare, Search, Video } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock FAQ data
  const faqs = [
    {
      question: "How do I create a new document?",
      answer:
        "To create a new document, navigate to the Documents page and click on the 'New Document' button in the top right corner. You can then choose to start from scratch or use one of our templates.",
      category: "Documents",
    },
    {
      question: "How do I send a document for signature?",
      answer:
        "After creating your document, click on the 'Send for Signature' button. You'll be prompted to add signers by entering their email addresses. You can then configure the signing order and add any additional instructions before sending.",
      category: "Signatures",
    },
    {
      question: "What types of signatures do you support?",
      answer:
        "We support multiple types of signatures including electronic signatures (typing your name), drawn signatures (using your mouse or touchscreen), and digital signatures with certificate-based authentication for higher security requirements.",
      category: "Signatures",
    },
    {
      question: "How do I create a team?",
      answer:
        "To create a team, go to the Organizations page, select your organization, and navigate to the Teams tab. Click on 'Create Team', enter a name and description, and add members to your team.",
      category: "Teams",
    },
    {
      question: "Can I use templates for my documents?",
      answer:
        "Yes, we offer a variety of templates for common document types. You can also create your own templates by saving any document as a template. Templates can be accessed when creating a new document.",
      category: "Documents",
    },
    {
      question: "How do I set up a workflow?",
      answer:
        "To set up a workflow, go to the Workflows page and click 'Create Workflow'. You can then define the steps, assign responsibilities, set deadlines, and configure automated actions like reminders and notifications.",
      category: "Workflows",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we take security very seriously. All documents and data are encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits. For more details, please see our Security page.",
      category: "Security",
    },
    {
      question: "How do I manage user permissions?",
      answer:
        "User permissions can be managed at both the organization and team levels. As an admin, go to the Users page, select a user, and modify their role and specific permissions. You can also set permissions for specific documents and workflows.",
      category: "Administration",
    },
  ]

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : faqs

  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Help Center</h1>
        <p className="text-muted-foreground">Find answers and learn how to use DocuFlow</p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg -z-10" />
        <div className="relative bg-card/80 backdrop-blur-sm rounded-lg p-6 md:p-10">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold">How can we help you today?</h2>
            <p className="text-muted-foreground">Search our knowledge base or browse the categories below</p>
            <div className="relative mt-6">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for answers..."
                className="pl-10 h-12 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileQuestion className="h-5 w-5 text-primary" />
              Getting Started
            </CardTitle>
            <CardDescription>New to DocuFlow? Start here</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-sm hover:text-primary">
                <a href="#" className="block">
                  Introduction to DocuFlow
                </a>
              </li>
              <li className="text-sm hover:text-primary">
                <a href="#" className="block">
                  Creating your first document
                </a>
              </li>
              <li className="text-sm hover:text-primary">
                <a href="#" className="block">
                  Sending for signature
                </a>
              </li>
              <li className="text-sm hover:text-primary">
                <a href="#" className="block">
                  Setting up your organization
                </a>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">
              View All Guides
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5 text-primary" />
              Video Tutorials
            </CardTitle>
            <CardDescription>Learn by watching</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-sm hover:text-primary">
                <a href="#" className="block">
                  DocuFlow overview (3:24)
                </a>
              </li>
              <li className="text-sm hover:text-primary">
                <a href="#" className="block">
                  Document creation tutorial (5:12)
                </a>
              </li>
              <li className="text-sm hover:text-primary">
                <a href="#" className="block">
                  Advanced signature options (4:45)
                </a>
              </li>
              <li className="text-sm hover:text-primary">
                <a href="#" className="block">
                  Workflow automation (7:18)
                </a>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">
              View All Videos
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Documentation
            </CardTitle>
            <CardDescription>Detailed guides and references</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-sm hover:text-primary">
                <a href="#" className="block">
                  API Documentation
                </a>
              </li>
              <li className="text-sm hover:text-primary">
                <a href="#" className="block">
                  Security & Compliance
                </a>
              </li>
              <li className="text-sm hover:text-primary">
                <a href="#" className="block">
                  Advanced Workflows
                </a>
              </li>
              <li className="text-sm hover:text-primary">
                <a href="#" className="block">
                  Integration Guides
                </a>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">
              View Documentation
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="faq" className="w-full">
        <TabsList>
          <TabsTrigger value="faq" className="gap-2">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </TabsTrigger>
          <TabsTrigger value="contact" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            Contact Support
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              {searchQuery && (
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">
                    {filteredFaqs.length} results for "{searchQuery}"
                  </p>
                </div>
              )}

              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-2">
                          {faq.question}
                          <Badge variant="outline" className="ml-2">
                            {faq.category}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                        <div className="mt-2 text-sm">
                          <Button variant="link" className="h-auto p-0">
                            Was this helpful?
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-8">
                  <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium">No results found</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-4">
                    We couldn't find any FAQs matching your search
                  </p>
                  <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email address" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Brief description of your issue" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your issue in detail"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full">Submit Support Request</Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Other Ways to Get Help</h3>
                    <Separator className="my-4" />
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Email Support</h4>
                          <p className="text-sm text-muted-foreground">Send an email to support@docuflow.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <MessageSquare className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Live Chat</h4>
                          <p className="text-sm text-muted-foreground">
                            Chat with our support team during business hours
                          </p>
                          <Button variant="link" className="h-auto p-0 mt-1">
                            Start Chat
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <LifeBuoy className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Phone Support</h4>
                          <p className="text-sm text-muted-foreground">Call us at +1 (555) 123-4567</p>
                          <p className="text-xs text-muted-foreground">Monday-Friday, 9am-5pm EST</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Support Hours</h3>
                    <Separator className="my-4" />
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Monday-Friday</span>
                        <span className="text-sm">9:00 AM - 8:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Saturday</span>
                        <span className="text-sm">10:00 AM - 4:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Sunday</span>
                        <span className="text-sm">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
