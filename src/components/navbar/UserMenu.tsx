'use client'

import { FC, useEffect } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri'
import ThemeBtn from '../ui/ThemeBtn'
import Link from '../ui/Link'
import { UserSlice } from '@/store/userSlice'
import { signOut } from 'next-auth/react'
import toast from 'react-hot-toast'

interface UserMenuProps {}

const UserMenu: FC<UserMenuProps> = ({}) => {
  const { user, getCurrentUser } = UserSlice()

  useEffect(() => {
    if (!user) {
      getCurrentUser()
    }
  }, [user, getCurrentUser])

  const handleSignOut = () => {
    signOut()
      .then(() => toast.success('Gracias por visitarnos!'))
      .catch(() => toast.error('Algo salió mal! Intentá de nuevo más tarde'))
  }

  return (
    <div
      className="
        flex
        justify-center
        items-center
        h-full
        px-2
        relative
        [&>div]:hover:opacity-100
        [&>div]:hover:pointer-events-auto
      "
    >
      <div className="flex justify-center items-center text-2xl">
        <AiOutlineUser />
        <RiArrowDropDownLine />
      </div>
      <div
        className="
          absolute
          top-full
          right-0
          z-20
          h-fit
          w-40
          p-4
          flex
          flex-col
          justify-center
          items-start
          bg-neutral-200
          dark:bg-neutral-900
          opacity-0
          border-[1px]
          border-gray-400
          rounded-md
          transition-all
          duration-300
          pointer-events-none
        "
      >
        {!user ? (
          <>
            <Link href="/login" label="Inicia sesión" />
            <div className="border-b-[1px] border-gray-400 w-full my-4" />
            <Link href="/signup" label="Registrarse" />
          </>
        ) : (
          <>
            <Link href="/orders" label="Ordenes" />
            <div className="border-b-[1px] border-gray-400 w-full my-4" />
            <div onClick={handleSignOut}>
              <Link href="/" label="Cerrar sesión" />
            </div>
          </>
        )}
        <div className="border-b-[1px] border-gray-400 w-full my-4" />
        <ThemeBtn />
      </div>
    </div>
  )
}

export default UserMenu
