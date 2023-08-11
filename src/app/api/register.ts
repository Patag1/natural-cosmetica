import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import bcrypt from 'bcrypt'

export default async function handler(req: NextRequest) {
  if (req.method === 'POST') {
    const { name, email, password, location } = await req.json()

    const hashPass = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashPass,
        location,
      },
    })

    return NextResponse.json(user)
  }
}
