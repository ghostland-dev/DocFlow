// This file would contain predefined document templates for common use cases

export const documentTemplates = [
  {
    id: "template-001",
    name: "Service Agreement",
    description: "Standard service agreement template with customizable terms",
    sections: [
      {
        title: "Parties",
        content: `
          <h2>1. PARTIES</h2>
          <p>This Service Agreement (the "Agreement") is made between:</p>
          <p><strong>Service Provider:</strong> [Company Name], with its principal place of business at [Address] ("Provider")</p>
          <p><strong>Client:</strong> [Client Name], with its principal place of business at [Address] ("Client")</p>
        `,
      },
      {
        title: "Services",
        content: `
          <h2>2. SERVICES</h2>
          <p>The Provider agrees to provide the following services to the Client:</p>
          <ul>
            <li>[Service Description 1]</li>
            <li>[Service Description 2]</li>
            <li>[Service Description 3]</li>
          </ul>
        `,
      },
      {
        title: "Term",
        content: `
          <h2>3. TERM</h2>
          <p>This Agreement shall commence on [Start Date] and continue until [End Date], unless terminated earlier in accordance with this Agreement.</p>
        `,
      },
      {
        title: "Payment",
        content: `
          <h2>4. PAYMENT</h2>
          <p>In consideration for the Services, the Client shall pay the Provider as follows:</p>
          <p><strong>Fee:</strong> [Payment Amount]</p>
          <p><strong>Payment Schedule:</strong> [Payment Schedule]</p>
          <p><strong>Payment Method:</strong> [Payment Method]</p>
        `,
      },
      {
        title: "Signatures",
        content: `
          <h2>5. SIGNATURES</h2>
          <p>By signing below, the parties agree to be bound by the terms of this Agreement.</p>
          <div class="signature-block">
            <div class="signature-line">
              <p>Service Provider</p>
              <p>Name: ___________________________</p>
              <p>Signature: ______________________</p>
              <p>Date: ___________________________</p>
            </div>
            <div class="signature-line">
              <p>Client</p>
              <p>Name: ___________________________</p>
              <p>Signature: ______________________</p>
              <p>Date: ___________________________</p>
            </div>
          </div>
        `,
      },
    ],
    formFields: [
      { id: "provider-name", label: "Provider Company Name", type: "text", placeholder: "Enter company name" },
      { id: "provider-address", label: "Provider Address", type: "text", placeholder: "Enter address" },
      { id: "client-name", label: "Client Name", type: "text", placeholder: "Enter client name" },
      { id: "client-address", label: "Client Address", type: "text", placeholder: "Enter client address" },
      { id: "service-desc", label: "Service Description", type: "textarea", placeholder: "Describe the services" },
      { id: "start-date", label: "Start Date", type: "date" },
      { id: "end-date", label: "End Date", type: "date" },
      { id: "payment-amount", label: "Payment Amount", type: "text", placeholder: "Enter payment amount" },
      {
        id: "payment-schedule",
        label: "Payment Schedule",
        type: "select",
        options: ["One-time", "Weekly", "Monthly", "Quarterly"],
      },
    ],
    signatureFields: [
      { id: "provider-signature", role: "Provider", required: true },
      { id: "client-signature", role: "Client", required: true },
    ],
  },
  {
    id: "template-002",
    name: "Non-Disclosure Agreement",
    description: "Standard NDA template for protecting confidential information",
    // Similar structure as above with NDA-specific content
    sections: [],
    formFields: [],
    signatureFields: [],
  },
  {
    id: "template-003",
    name: "Employment Contract",
    description: "Standard employment agreement with customizable terms",
    // Similar structure as above with employment contract-specific content
    sections: [],
    formFields: [],
    signatureFields: [],
  },
]

export function getTemplateById(id: string) {
  return documentTemplates.find((template) => template.id === id)
}

export function getAllTemplates() {
  return documentTemplates.map((template) => ({
    id: template.id,
    name: template.name,
    description: template.description,
  }))
}
