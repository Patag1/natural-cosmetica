'use client'

import { FC, useEffect } from 'react'
import { OrderSlice } from '@/store/orderSlice'
import Image from 'next/image'

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const { cart, getCart } = OrderSlice()

  useEffect(() => {
    getCart()
  }, [getCart])

  if (!cart || !cart.length) return null

  console.log(cart)

  return (
    <ul>
      {/* {cart.map((p, i) => (
        <li className="flex gap-4" key={i}>
          <Image
            src={p.image}
            alt={p.id}
            width={1}
            height={1}
            className="w-8 aspect-square"
          />
          <div>
            <p>{p.title}</p>
            <span>{p.price}</span>
          </div>
        </li>
      ))} */}
    </ul>
  )
}

export default Page
