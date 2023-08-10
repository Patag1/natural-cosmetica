import { FC } from 'react'
import NextLink from 'next/link'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Title from './ui/Title'
import Hr from './ui/Hr'
import Link from './ui/Link'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const links = [
    { label: 'productos', url: '/products' },
    { label: 'carrito,', url: '/cart' },
    { label: 'nosotros,', url: '/about' },
  ]

  return (
    <div className="h-full flex justify-between items-center gap-2">
      {links.map((l, i) =>
        l.label === 'productos' ? (
          <div
            key={i}
            className="relative md:min-h-full h-16 w-fit flex justify-center items-center [&>div]:hover:opacity-100 [&>div]:hover:pointer-events-auto"
          >
            <p className="flex justify-center items-center hover:underline underline-offset-2">
              {l.label}
              <RiArrowDropDownLine />,
            </p>
            <div className="p-8 w-80 h-fit absolute top-full -left-9 md:left-1/2 md:right-1/2 md:-translate-x-1/2 opacity-0 pointer-events-none bg-neutral-200 dark:bg-neutral-900 border-[1px] border-neutral-400">
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
              <NextLink
                href={l.url}
                className="flex justify-start items-center hover:underline underline-offset-2"
              >
                Ver todos
                <RiArrowDropDownLine className="-rotate-90" />
              </NextLink>
            </div>
          </div>
        ) : (
          <Link href={l.url} label={l.label} key={i} />
        )
      )}
    </div>
  )
}

export default Navbar
