import { NextResponse } from 'next/server'
import { getCurrentUser } from '../../user/route'
import { db } from '@/lib/prismadb'

interface idParams {
  params: { id: string }
}

export async function DELETE({ params }: idParams) {
  try {
    const { id } = params

    if (!id) {
      return NextResponse.json({ status: 400 })
    }

    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ status: 401 })
    }

    const updatedCart = user.cart.filter((p) => p.id !== id)

    const removedProductFromCart = await db.user.update({
      where: { id: user.id },
      data: {
        cart: { connect: updatedCart },
      },
    })

    return NextResponse.json(removedProductFromCart)
  } catch (error) {
    return NextResponse.json({ status: 500 })
  }
}
