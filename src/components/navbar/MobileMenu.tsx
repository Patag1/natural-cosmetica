'use client'

import { FC } from 'react'
import { useMobile } from '@/store/useMobile'
import { links } from '@/components/navbar/NavLinks'
import Link from '../ui/Link'

interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = ({}) => {
  const { isMobile, menuIsOpen } = useMobile()

  return (
    <>
      {isMobile && (
        <div
          className={`bg-neutral-200 px-8 pb-8 pt-32 flex justify-between items-start flex-col fixed top-0 bottom-0 right-full ${
            menuIsOpen && 'translate-x-64'
          } w-64 min-h-screen transition-all duration-300`}
        >
          <div className='flex flex-col gap-16'>
            {links.map((l, i) => (
              <Link href={l.url} label={l.label} key={i} />
            ))}
          </div>
          <Link href='/terms' label='términos y condiciones' small />
        </div>
      )}
    </>
  )
}

export default MobileMenu
