'use client'

import { FC } from 'react'
import { useMobile } from '@/store/useMobile'

interface MobileHamProps {}

const MobileHam: FC<MobileHamProps> = ({}) => {
  const { menuIsOpen, toggleMenu } = useMobile()

  return (
    <div
      className={`fixed md:hidden flex top-10 left-8 z-40 aspect-square w-8 flex-col justify-center items-center ${
        !menuIsOpen && 'gap-2'
      } transition-all duration-300 cursor-pointer`}
      onClick={toggleMenu}
    >
      <div
        className={`w-full border-b-4 border-neutral-700 ${
          menuIsOpen && 'rotate-45'
        } transition-all duration-300`}
      ></div>
      <div
        className={`w-full border-b-4 border-neutral-700 ${
          menuIsOpen && '-rotate-45 -translate-y-1'
        } transition-all duration-300`}
      ></div>
    </div>
  )
}

export default MobileHam
