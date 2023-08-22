import { FC } from 'react'
import MobileHam from './MobileHam'
import DesktopNavbar from './DesktopNavbar'

export const links = [
  { label: 'productos', url: '/products' },
  { label: 'carrito,', url: '/cart' },
  { label: 'ordenes,', url: '/orders' },
  { label: 'nosotros,', url: '/about' },
]

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="flex-grow pl-8 basis-0 h-full flex justify-start items-center gap-2">
      <DesktopNavbar />
      <MobileHam />
    </div>
  )
}

export default Navbar
