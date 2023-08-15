import ProductCard from '@/components/ProductCard'
import { FC } from 'react'

interface pageProps {}

const product = {
  id: 'product1',
  image: 'dsafknsf',
  title: 'Jabon vegano',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis laborum, beatae quae eius iure ipsam illo vel numquam reprehenderit possimus, sed iste! Quas aspernatur nemo cum ad dicta? Officiis!',
  ingredients: ['vainilla', 'sales', 'coco'],
  category: 'bath',
  price: 14.5,
  buys: 625,
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="mx-auto w-fit grid grid-cols-3 grid-rows-2 items-center gap-8">
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
    </div>
  )
}

export default page
