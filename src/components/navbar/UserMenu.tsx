'use client'

import { FC, useEffect } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri'
import ThemeBtn from '../ui/ThemeBtn'
import Link from '../ui/Link'
import { UserSlice } from '@/store/userSlice'
import { usePathname } from 'next/navigation'

interface UserMenuProps {}

const UserMenu: FC<UserMenuProps> = ({}) => {
  const path = usePathname()

  const { user, getCurrentUser } = UserSlice()

  useEffect(() => {
    if (!user) {
      getCurrentUser()
    }
  }, [getCurrentUser])

  return (
    <div
      className={`${
        path === '/' &&
        'bg-neutral-200 border-[1px] border-neutral-400  dark:bg-neutral-900 rounded-full'
      } p-2 relative [&>div]:hover:opacity-100 [&>div]:hover:pointer-events-auto`}
    >
      <div className="flex items-center text-2xl">
        <AiOutlineUser />
        <RiArrowDropDownLine />
      </div>
      <div className="z-20 flex justify-start items-center flex-col p-4 h-fit w-32 bg-neutral-200 dark:bg-neutral-900 absolute top-full right-0 opacity-0 rounded-md border-[1px] border-gray-400 transition-all duration-300 pointer-events-none">
        {!user ? (
          <>
            <Link href="/login" label="Inicia sesión" />
            <div className="border-b-[1px] border-gray-400 w-full my-4"></div>
            <Link href="/signup" label="Registrarse" />
          </>
        ) : (
          <></>
        )}
        <div className="border-b-[1px] border-gray-400 w-full my-4"></div>
        <ThemeBtn />
      </div>
    </div>
  )
}

export default UserMenu
