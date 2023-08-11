'use client'

import { FC, useEffect } from 'react'
import NextLink from 'next/link'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Title from '../ui/Title'
import Hr from '../ui/Hr'
import Link from '../ui/Link'
import MobileHam from './MobileHam'
import { useMobile } from '@/store/useMobile'

interface NavbarProps {}

export const links = [
  { label: 'productos', url: '/products' },
  { label: 'carrito,', url: '/cart' },
  { label: 'nosotros,', url: '/about' },
  { label: 'contacto,', url: '/contact' },
]

const Navbar: FC<NavbarProps> = ({}) => {
  const { isMobile, addResizeListener } = useMobile()

  useEffect(() => {
    addResizeListener()
  }, [addResizeListener])

  return (
    <div className="flex-grow pl-8 basis-0 h-full flex justify-start items-center gap-2">
      {!isMobile ? (
        links.map((l, i) =>
          l.label === 'productos' ? (
            <div
              key={i}
              className="relative md:min-h-full h-16 w-fit flex justify-center items-center [&>div]:hover:opacity-100 [&>div]:hover:pointer-events-auto"
            >
              <p className="flex justify-center items-center">
                {l.label}
                <RiArrowDropDownLine />,
              </p>
              <div className="p-8 w-80 h-fit absolute top-full rounded-md -left-9 opacity-0 pointer-events-none bg-neutral-200 dark:bg-neutral-900 border-[1px] border-neutral-400 transition-all">
                <Title text="Más vendidos" />
                <ul>
                  <li>
                    <p>Jabón</p>
                  </li>
                  <li>
                    <p>Shampoo</p>
                  </li>
                  <li>
                    <p>Crema</p>
                  </li>
                </ul>
                <Hr />
                <div className="flex items-center">
                  <Link href={l.url} label="Ver todos" />
                  <RiArrowDropDownLine className="-rotate-90" />
                </div>
              </div>
            </div>
          ) : (
            <Link href={l.url} label={l.label} key={i} />
          )
        )
      ) : (
        <MobileHam />
      )}
    </div>
  )
}

export default Navbar
