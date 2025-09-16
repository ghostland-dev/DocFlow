"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  FileQuestion,
  HelpCircle,
  LifeBuoy,
  MessageSquare,
  Search,
  ThumbsUp,
  Video,
  Users,
  FileSignature,
  Settings,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      question: "How do I create a new document?",
      answer:
        "To create a new document, navigate to the Documents section from the sidebar, then click the 'New Document' button in the top right corner. You can choose to start from scratch or use one of our templates.",
    },
    {
      question: "How do I request signatures?",
      answer:
        "After creating or uploading a document, click on the 'Request Signatures' button. You'll be prompted to add signers by email address and set the signing order if needed. Each signer will receive an email notification with instructions.",
    },
    {
      question: "What file formats are supported?",
      answer:
        "DocuFlow supports PDF, DOCX, DOC, XLSX, XLS, PPTX, PPT, JPG, JPEG, PNG, and TXT files. All files are automatically converted to PDF format for signing.",
    },
    {
      question: "How do I add signature fields to a document?",
      answer:
        "When preparing a document for signatures, use the drag-and-drop editor to place signature fields, date fields, text fields, and checkboxes where you need them. You can assign each field to a specific signer.",
    },
    {
      question: "Is DocuFlow legally compliant?",
      answer:
        "Yes, DocuFlow is compliant with major electronic signature laws including ESIGN (US), eIDAS (EU), and UETA (US). Our signatures include audit trails and are legally binding in most jurisdictions.",
    },
    {
      question: "How do I manage team permissions?",
      answer:
        "Go to the Organizations section, select your organization, and navigate to the 'Members' tab. From there, you can invite new members and adjust role permissions for existing members.",
    },
    {
      question: "Can I integrate DocuFlow with other applications?",
      answer:
        "Yes, DocuFlow offers API integration with many popular platforms including Salesforce, Google Workspace, Microsoft 365, Dropbox, and more. You can also use our REST API to build custom integrations.",
    },
    {
      question: "How secure is DocuFlow?",
      answer:
        "DocuFlow uses bank-level security with 256-bit SSL encryption for all documents and communications. We employ multi-factor authentication, role-based access controls, and maintain SOC 2 Type II compliance.",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Help & Support</h1>
          <p className="text-muted-foreground">Find answers and get assistance with DocuFlow</p>
        </div>
        <Button className="gap-2">
          <MessageSquare className="h-4 w-4" />
          Contact Support
        </Button>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for help articles, tutorials, and FAQs..."
          className="pl-10 py-6 text-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <FileQuestion className="h-5 w-5 text-primary" />
              Documentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Comprehensive guides and reference materials for all DocuFlow features
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Browse Docs
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5 text-primary" />
              Video Tutorials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Step-by-step video guides to help you get the most out of DocuFlow
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Watch Tutorials
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <LifeBuoy className="h-5 w-5 text-primary" />
              Live Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Connect with our support team for personalized assistance</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Start Chat
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="faqs" className="space-y-6">
        <TabsList className="grid grid-cols-1 md:grid-cols-3 h-auto">
          <TabsTrigger value="faqs" className="flex items-center gap-2 py-2">
            <HelpCircle className="h-4 w-4" />
            <span>Frequently Asked Questions</span>
          </TabsTrigger>
          <TabsTrigger value="guides" className="flex items-center gap-2 py-2">
            <BookOpen className="h-4 w-4" />
            <span>Getting Started Guides</span>
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2 py-2">
            <MessageSquare className="h-4 w-4" />
            <span>Contact Support</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faqs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions about DocuFlow</CardDescription>
            </CardHeader>
            <CardContent>
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                        <div className="flex items-center justify-end mt-2">
                          <Button variant="ghost" size="sm" className="h-8 gap-1">
                            <ThumbsUp className="h-3.5 w-3.5" />
                            Helpful
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <FileQuestion className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-1">No results found</h3>
                  <p className="text-sm text-muted-foreground text-center max-w-md">
                    We couldn't find any FAQs matching your search. Try different keywords or contact our support team
                    for assistance.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guides" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started Guides</CardTitle>
              <CardDescription>Step-by-step guides to help you get started with DocuFlow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <FileQuestion className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Creating Your First Document</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Learn how to create, upload, and prepare documents for signatures
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Beginner</Badge>
                          <span className="text-xs text-muted-foreground">5 min read</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/50 p-2">
                    <Button variant="ghost" className="w-full">
                      Read Guide
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Setting Up Your Team</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          How to invite team members and configure permissions
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Beginner</Badge>
                          <span className="text-xs text-muted-foreground">7 min read</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/50 p-2">
                    <Button variant="ghost" className="w-full">
                      Read Guide
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <FileSignature className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Signature Workflows</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Creating and managing multi-party signature workflows
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Intermediate</Badge>
                          <span className="text-xs text-muted-foreground">10 min read</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/50 p-2">
                    <Button variant="ghost" className="w-full">
                      Read Guide
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Settings className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Advanced Configuration</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Customizing DocuFlow to match your organization's needs
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Advanced</Badge>
                          <span className="text-xs text-muted-foreground">15 min read</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/50 p-2">
                    <Button variant="ghost" className="w-full">
                      Read Guide
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t">
              <Button variant="outline">View All Guides</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="What is your inquiry about?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Please describe your issue in detail..."
                  className="min-h-[150px]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="priority" className="text-sm font-medium">
                  Priority
                </label>
                <select
                  id="priority"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                >
                  <option value="low">Low - General question</option>
                  <option value="medium">Medium - Need help soon</option>
                  <option value="high">High - Blocking issue</option>
                  <option value="urgent">Urgent - System down</option>
                </select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Submit Ticket</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

