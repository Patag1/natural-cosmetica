import { db } from '@/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const url = req.url.split('/')
    const id = url[url.length - 1]

    const product = await db.product.findUnique({
      where: {
        id,
      },
      include: {
        feedbacks: true,
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
    const { image, title, description, ingredients, price, buys } =
      await req.json()
    const { id } = params

    await db.product.update({
      where: {
        id,
      },
      data: {
        image,
        title,
        description,
        ingredients,
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

    await db.product.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({ status: 200 })
  } catch (_error) {}
  return NextResponse.json({ status: 500 })
}
