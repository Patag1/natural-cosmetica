'use client'

import { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BiMoon, BiSun } from 'react-icons/bi'
import { useMobile } from '@/store/useMobile'

interface ThemebtnProps {}

const Themebtn: FC<ThemebtnProps> = ({}) => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const { isMobile } = useMobile()

  useEffect(() => {
    if (!mounted && typeof window !== undefined) {
      setMounted(true)
    }

    if (!isMobile) {
      setTheme(systemTheme ?? 'light')
    } else {
      setTheme('light')
    }
  }, [isMobile, systemTheme, setTheme])

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      className="w-full h-full md:flex justify-between items-center hidden"
      onClick={handleTheme}
    >
      <div className="w-fit [&>div]:hover:w-full md:[&>div]:active:w-0 [&>div]:active:w-full">
        <p>Tema</p>
        <div className="w-0 border-b-[1px] border-neutral-700 dark:border-neutral-200 transition-all duration-500"></div>
      </div>
      {theme === 'dark' && mounted ? (
        <BiMoon className="text-xl" />
      ) : (
        <BiSun className="text-xl" />
      )}
    </button>
  )
}

export default Themebtn
