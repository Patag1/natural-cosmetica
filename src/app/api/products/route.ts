import { db } from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const products = await db.product.findMany()

    if (!products.length) {
      return NextResponse.json({ status: 404 })
    }

    return NextResponse.json(products)
  } catch (_error) {
    return NextResponse.json({ status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { image, title, description, ingredients, price } = await req.json()

    if (!image || !title || !description || !ingredients || !price) {
      return NextResponse.json({ status: 400 })
    }

    const newProduct = await db.product.create({
      data: {
        image,
        title,
        description,
        ingredients,
        price,
        buys: 0,
      },
    })

    return NextResponse.json({ newProduct }, { status: 200 })
  } catch (_error) {}
  return NextResponse.json({ status: 500 })
}
