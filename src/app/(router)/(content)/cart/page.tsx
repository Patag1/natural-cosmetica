import { FC } from 'react'
import { getCurrentUser } from '@/app/api/user/route'
import { db } from '@/lib/prismadb'
import { Product } from '@prisma/client'
import ServerButton from '@/components/ui/ServerButton'
import Hr from '@/components/ui/Hr'

interface pageProps {}

const Page: FC<pageProps> = async ({}) => {
  const user = await getCurrentUser()

  if (!user) return null

  const { cart } = await db.user.findUnique({
    where: { id: user.id },
    select: { cart: true },
  })

  if (!cart.length || cart === null) return null

  return (
    <ul className="mx-auto max-w-prose flex flex-col gap-4">
      {cart.map((p: Product, i: number) => (
        <li className="flex justify-between items-center gap-4" key={i}>
          <img src={p.image} alt={p.id} className="w-8 aspect-square" />
          <p>{p.title}</p>
          <div className="flex items-center gap-2">
            <span>${p.price}</span>
            <ServerButton id={p.id} />
          </div>
        </li>
      ))}
      <Hr />
      <li className="flex justify-between items-center gap-4">
        <p>Total</p>
        <div className="flex items-center gap-2">
          <span>
            $
            {cart.reduce((acc: number, p: Product) => {
              return acc + p.price
            }, 0)}
          </span>
          <ServerButton id="" />
        </div>
      </li>
    </ul>
  )
}

export default Page
