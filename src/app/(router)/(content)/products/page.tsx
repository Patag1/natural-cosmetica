import { FC } from 'react'
import { db } from '@/lib/prismadb'
import ProductCard from '@/components/ProductCard'

interface pageProps {}

const Page: FC<pageProps> = async ({}) => {
  const products = await db.product.findMany()

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
