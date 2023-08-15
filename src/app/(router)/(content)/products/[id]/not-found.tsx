import { FC } from 'react'
import Link from '@/components/ui/Link'

interface notFoundProps {}

const notFound: FC<notFoundProps> = ({}) => {
  return (
    <div>
      <Link href="/products" label="Volver a productos" />
      <p>notFound</p>
    </div>
  )
}

export default notFound
