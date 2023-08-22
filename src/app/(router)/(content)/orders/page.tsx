import { db } from '@/lib/prismadb'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const orders = await db.order.findMany({
    include: { products: true },
  })

  return (
    <ul>
      {orders.map((o, i) => (
        <li key={i}>
          <div>
            <time>{o.createdAt.toISOString()}</time>
            <p>{o.products.join(', ')}</p>
          </div>
          <div>
            <p>{o.total}</p>
            <p>{o.issue}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default page
