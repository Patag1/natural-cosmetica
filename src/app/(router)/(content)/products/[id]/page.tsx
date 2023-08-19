'use client'

import { FC, useEffect } from 'react'
import { ProductSlice } from '@/store/productSlice'
// import Image from 'next/image'
import { notFound } from 'next/navigation'
import Title from '@/components/ui/Title'
import Button from '@/components/ui/Button'
import { OrderSlice } from '@/store/orderSlice'

interface pageProps {
  params: { id: string }
}

const Page: FC<pageProps> = ({ params }) => {
  const { id } = params

  const { product, getProduct } = ProductSlice()
  const { toCart } = OrderSlice()

  useEffect(() => {
    getProduct(id)
  }, [getProduct, id])

  if (!product) return notFound()

  const {
    // image,
    title,
    description,
    ingredients,
    price,
    feedbacks,
  } = product

  const handleCart = () => {
    toCart({ id, add: true })
  }

  return (
    <div className="mx-auto max-w-prose grid grid-cols-1 grid-rows-[auto_auto_auto] gap-6">
      <div className="flex items-start gap-6">
        {/* <Image
          src={image}
          alt={title}
          width={1}
          height={1}
          className="h-64 w-auto aspect-square object-cover"
        /> */}
        <div className="flex flex-col gap-8">
          <Title text={title} large />
          <p>{description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <Title text="Ingredientes" />
          <ul>
            {ingredients.split(',').map((ingredient, i) => (
              <li key={i}>
                <p>{ingredient}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Title text="Hacé tu pedido" />
          <div className="flex justify-between items-center w-full">
            <Button label="Agregar al carrito" onClick={handleCart} />
            <p>${price}</p>
          </div>
        </div>
      </div>
      <div>
        {feedbacks?.length
          ? feedbacks.map((f, i) => (
              <div key={i}>
                <p>{f.rating}</p>
                <p>{f.content}</p>
              </div>
            ))
          : []}
      </div>
    </div>
  )
}

export default Page
