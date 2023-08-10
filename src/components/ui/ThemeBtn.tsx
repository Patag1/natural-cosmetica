'use client'

import { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BiMoon, BiSun } from 'react-icons/bi'

interface ThemebtnProps {}

const Themebtn: FC<ThemebtnProps> = ({}) => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    if (!mounted && typeof window !== undefined) {
      setMounted(true)
    }

    setTheme(systemTheme ?? 'light')
  }, [])

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button onClick={handleTheme} className="text-xl">
      {theme === 'dark' && mounted ? <BiMoon /> : <BiSun />}
    </button>
  )
}

export default Themebtn
