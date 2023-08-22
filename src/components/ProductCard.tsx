'use client'

import { FC } from 'react'
import { Product } from '@prisma/client'
import { OrderSlice } from '@/store/orderSlice'
import Link from 'next/link'
// import Image from 'next/image'
import Title from './ui/Title'
import Button from './ui/Button'

interface ProductCardProps {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { toCart } = OrderSlice()

  const { id, /*image,*/ title, price } = product

  const handleCart = () => {
    toCart({ id, add: true })
  }

  return (
    <div className="w-64 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Link href={`/products/${id}`} className="relative w-full aspect-square border-2 border-black">
          {/* <Image
            src={image}
            alt={id}
            width={1}
            height={1}
            className="h-full w-auto object-cover"
          /> */}
          <Title text={title} className="absolute bottom-2 left-2 wrap-balance" />
        </Link>
        <div className="flex justify-between items-center">
          <Button
            label="Agregar al carrito"
            onClick={handleCart}
            className="w-3/4"
          />
          <p className="text-sm tabular-nums">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
