'use client'

import ProductCard from '@/components/ProductCard'
import { ProductSlice } from '@/store/productSlice'
import { FC, useEffect } from 'react'

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const { products, getProducts } = ProductSlice()

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <div className="mx-auto w-fit grid grid-cols-3 grid-rows-2 items-center gap-8">
      {
        products.map((product, i) => (
          <ProductCard product={product} key={i} />
        ))
      }
    </div>
  )
}

export default Page
