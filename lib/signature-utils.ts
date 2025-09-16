import crypto from "crypto"

// This is a simplified example of digital signature utilities
// In a production environment, you would use proper PKI libraries and secure key management

/**
 * Generate a key pair for digital signatures
 * In a real application, this would be handled by a secure certificate authority
 */
export function generateKeyPair() {
  return crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  })
}

/**
 * Create a digital signature for a document
 * @param documentHash - The hash of the document to sign
 * @param privateKey - The signer's private key
 */
export function signDocument(documentHash: string, privateKey: string) {
  const sign = crypto.createSign("SHA256")
  sign.update(documentHash)
  sign.end()
  return sign.sign(privateKey, "base64")
}

/**
 * Verify a digital signature
 * @param documentHash - The hash of the document
 * @param signature - The digital signature to verify
 * @param publicKey - The signer's public key
 */
export function verifySignature(documentHash: string, signature: string, publicKey: string) {
  const verify = crypto.createVerify("SHA256")
  verify.update(documentHash)
  verify.end()
  return verify.verify(publicKey, signature, "base64")
}

/**
 * Create a hash of a document
 * @param document - The document content to hash
 */
export function hashDocument(document: string) {
  const hash = crypto.createHash("SHA256")
  hash.update(document)
  return hash.digest("hex")
}

/**
 * Generate a timestamp for the signature
 * In a production environment, you might use a trusted timestamp authority
 */
export function generateTimestamp() {
  return new Date().toISOString()
}

/**
 * Create an audit trail entry for a document action
 */
export function createAuditEntry(documentId: string, userId: string, action: string, metadata: any) {
  return {
    documentId,
    userId,
    action,
    timestamp: generateTimestamp(),
    ipAddress: metadata.ipAddress || "unknown",
    userAgent: metadata.userAgent || "unknown",
    details: metadata.details || {},
  }
}

