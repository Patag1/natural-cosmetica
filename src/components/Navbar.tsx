import { FC } from 'react'
import Title from './ui/Title'
import NavLinks from './NavLinks'
import ThemeBtn from './ui/ThemeBtn'
import Link from 'next/link'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-[auto_auto] border-b-[1px] border-gray-400">
      <Link href={'/'} className="p-8">
        <Title text="Natural Cosmética" large />
      </Link>
      <div className="px-8 flex justify-between items-center md:border-l-[1px] md:border-t-0 border-t-[1px] border-gray-400">
        <NavLinks />
        <ThemeBtn />
      </div>
    </nav>
  )
}

export default Navbar
