import bcrypt from 'bcrypt'
import {db} from '@/lib/prismadb'
import { NextResponse } from 'next/server'

const admins = ['victoriasasso@hotmail.com']

export async function POST(req: Request) {
  const { name, email, password, location } = await req.json()

  const check = await db.user.findUnique({
    where: { email },
  })

  if (check) {
    return NextResponse.json('You are already registered', { status: 400 })
  }

  if (!name || !email || !password || !location) {
    return NextResponse.json('Missing fields', { status: 400 })
  }

  const hashPass = await bcrypt.hash(password, 12)

  const admin = admins.includes(email)

  const user = await db.user.create({
    data: {
      name,
      email,
      hashPass,
      location,
      admin,
    },
  })

  return NextResponse.json(user)
}
