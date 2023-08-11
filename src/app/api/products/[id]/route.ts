import prisma from '@/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET({ params }: { params: { id: string } }) {
  try {
    const { id } = params

    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    })

    if (!product) {
      return NextResponse.json({ status: 404 })
    }

    return NextResponse.json(product)
  } catch (_error) {
    return NextResponse.json({ status: 500 })
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { image, title, description, ingredients, category, price, buys } =
      await req.json()
    const { id } = params

    await prisma.product.update({
      where: {
        id,
      },
      data: {
        image,
        title,
        description,
        ingredients,
        category,
        price,
        buys,
      },
    })

    return NextResponse.json({ status: 200 })
  } catch (_error) {}
  return NextResponse.json({ status: 500 })
}

export async function DELETE({ params }: { params: { id: string } }) {
  try {
    const { id } = params

    await prisma.product.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({ status: 200 })
  } catch (_error) {}
  return NextResponse.json({ status: 500 })
}
