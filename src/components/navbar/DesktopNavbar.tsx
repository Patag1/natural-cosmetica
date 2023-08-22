import { FC } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Title from '../ui/Title'
import Hr from '../ui/Hr'
import Link from '../ui/Link'
import { links } from './NavLinks'

interface DesktopNavbarProps {}

const DesktopNavbar: FC<DesktopNavbarProps> = ({}) => {
  return (
    <>
      {links.map((l, i) =>
        l.label === 'productos' ? (
          <div
            key={i}
            className="relative md:flex hidden md:min-h-full h-16 w-fit justify-center items-center [&>div]:hover:opacity-100 [&>div]:hover:pointer-events-auto"
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
          <div className="md:block hidden" key={i}>
            <Link href={l.url} label={l.label} />
          </div>
        )
      )}
    </>
  )
}

export default DesktopNavbar
