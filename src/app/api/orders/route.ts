import { NextResponse } from 'next/server'
import { getCurrentUser } from '../user/route'
import { db } from '@/lib/prismadb'

export async function GET() {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ status: 401 })
    }

    const orders = await db.order.findMany({
      where: { userId: user.id },
    })

    return NextResponse.json(orders)
  } catch (error) {
    return NextResponse.json({ status: 500 })
  }
}
