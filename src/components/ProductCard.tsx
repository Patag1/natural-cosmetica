'use client'

import { FC } from 'react'
import { Product } from '@prisma/client'
import { OrderSlice } from '@/store/orderSlice'
import Link from 'next/link'
import Title from './ui/Title'
import Button from './ui/Button'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { toCart } = OrderSlice()

  const router = useRouter()

  const { id, image, title, price } = product

  const handleCart = () => {
    toCart({ id, add: true })
    router.refresh()
  }

  return (
    <div className="w-64 flex flex-col gap-6 [&>div>a>img]:hover:scale-105 [&>div>a>img]:hover:-translate-y-2">
      <div className="flex flex-col gap-2">
        <Link
          href={`/products/${id}`}
          className="mb-2 relative w-full aspect-square"
        >
          <img
            src={image}
            alt={id}
            className="h-full w-auto object-cover transition-all duration-300 ease-in-out"
          />
          <Title
            text={title}
            className="absolute bottom-2 left-2 wrap-balance text-neutral-200"
          />
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
