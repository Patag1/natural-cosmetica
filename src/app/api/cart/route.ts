import { NextResponse } from 'next/server'
import { getCurrentUser } from '../user/route'
import { db } from '@/lib/prismadb'

export async function GET() {
  try {
    const user = await getCurrentUser()

    console.log(user)

    if (!user) {
      return NextResponse.json({ status: 401 })
    }

    const cart = await db.user.findUnique({
      where: { id: user.id },
      select: { cart: true },
    })

    console.log(cart)

    return NextResponse.json(cart)
  } catch (_error) {
    return NextResponse.json({ status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const { id, add } = await req.json()

    const user = await getCurrentUser()

    if (!id) {
      return NextResponse.json({ status: 400 })
    }

    if (!user) {
      return NextResponse.json({ status: 401 })
    }

    const selectedUser = await db.user.findUnique({
      where: { id: user.id },
      include: { cart: true },
    })

    const product = await db.product.findUnique({
      where: { id },
    })

    if (!selectedUser) {
      return NextResponse.json({ status: 401 })
    }

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    let updatedCart
    if (add) {
      updatedCart = [...selectedUser.cart, product]
    } else {
      updatedCart = selectedUser.cart.filter((product) => product.id !== id)
    }

    await db.user.update({
      where: { id: user.id },
      data: {
        cart: { connect: updatedCart },
      },
    })

    return NextResponse.json({ status: 200 })
  } catch (error) {
    return NextResponse.json({ status: 500 })
  }
}
