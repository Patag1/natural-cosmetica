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
      className="w-full h-full md:flex hidden justify-between items-center"
      onClick={handleTheme}
    >
      <p>Tema</p>
      <div className="text-xl">
        {theme === 'dark' && mounted ? <BiMoon /> : <BiSun />}
      </div>
    </button>
  )
}

export default Themebtn
