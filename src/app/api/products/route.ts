import prisma from '@/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const products = await prisma.product.findMany()

    if (!products.length) {
      return NextResponse.json({ status: 404 })
    }

    return NextResponse.json(products)
  } catch (_error) {
    return NextResponse.json({ status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { image, title, description, ingredients, category, price } = await req.json()

    await prisma.product.create({
      data: {
        image,
        title,
        description,
        ingredients,
        category,
        price,
        buys: 0,
      },
    })

    return NextResponse.json({ status: 200 })
  } catch (_error) {}
  return NextResponse.json({ status: 500 })
}
