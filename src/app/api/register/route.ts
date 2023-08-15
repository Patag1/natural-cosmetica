import bcrypt from 'bcrypt'
import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, password, location } = await req.json()

  const check = await prisma.user.findUnique({
    where: { email },
  })

  if (check) {
    return NextResponse.json('You are already registered', { status: 400 })
  }

  if (!name || !email || !password || !location) {
    return NextResponse.json('Missing fields', { status: 400 })
  }

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
