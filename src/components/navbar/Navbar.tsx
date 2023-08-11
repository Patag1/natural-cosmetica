import { FC } from 'react'
import Title from '../ui/Title'
import NavLinks from './NavLinks'
import Link from 'next/link'
import UserMenu from './UserMenu'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="z-10 py-8 fixed top-0 left-0 right-0 w-full grid md:grid-cols-3 grid-cols-2 grid-rows-1">
      <NavLinks />
      <Link href={'/'} className="flex md:pr-0 pr-8 md:justify-center justify-end items-center">
        <Title text="VS" large />
      </Link>
      <div className="pr-8 md:flex hidden justify-end items-center">
        <UserMenu />
      </div>
    </div>
  )
}

export default Navbar
