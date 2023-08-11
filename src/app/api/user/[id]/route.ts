import prisma from '@/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function GET({ params }: { params: { id: string } }) {
  try {
    const { id } = params

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    if (!user) {
      return NextResponse.json({ status: 404 })
    }

    return NextResponse.json(user)
  } catch (_error) {
    return NextResponse.json({ status: 500 })
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { name, email, pass, location } = await req.json()
    const { id } = params

    const hashPass = await bcrypt.hash(pass, 12)

    await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        hashPass,
        location,
      },
    })

    return NextResponse.json({ status: 200 })
  } catch (_error) {}
  return NextResponse.json({ status: 500 })
}

export async function DELETE({ params }: { params: { id: string } }) {
  try {
    const { id } = params

    await prisma.user.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({ status: 200 })
  } catch (_error) {}
  return NextResponse.json({ status: 500 })
}
