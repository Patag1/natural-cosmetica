import { FC } from 'react'
import Link from 'next/link'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const links = [
    { label: 'productos', url: '/products' },
    { label: 'carrito', url: '/cart' },
    { label: 'nosotros', url: '/about' },
  ]

  return (
    <div className="flex justify-between items-center gap-1">
      {links.map((l, i) => (
        <Link href={l.url} className='hover:underline underline-offset-2' key={i}>
          {l.label},
        </Link>
      ))}
    </div>
  )
}

export default Navbar
