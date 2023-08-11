import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '../user/route'

export async function PUT(req: NextRequest) {
  try {
    const { id, add } = await req.json()

    const user = await getCurrentUser()

    if (!id) {
      return NextResponse.json({ status: 400 })
    }

    if (!user) {
      return NextResponse.json({ status: 401 })
    }

    let updatedCart

    if (add) {
      updatedCart = [...user.cart, id]
    } else {
      updatedCart = user.cart.filter((productId) => productId !== id)
    }

    await prisma?.user.update({
      where: { id: user.id },
      data: {
        cart: updatedCart,
      },
    })

    return NextResponse.json({ status: 200 })
  } catch (error) {
    return NextResponse.json({ status: 500 })
  }
}
