// best practice to use prisma with Next.js v13...
// prevents Next.js's hot reload to create numerous PrismaClient() instances
import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client
