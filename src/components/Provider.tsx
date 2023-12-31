'use client'

import { FC } from 'react'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import MobileMenu from './navbar/MobileMenu'

interface ProviderProps {
  children: React.ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      {children}
      <MobileMenu />
      <Toaster position="bottom-right" />
    </ThemeProvider>
  )
}

export default Provider
