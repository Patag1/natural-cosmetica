'use client'

import { FC } from 'react'

interface ButtonProps {
  label: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="px-4 py-2 border-2 text-neutral-400 border-neutral-400 hover:brightness-50 dark:hover:brightness-150 duration-300 box-border transition-all"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
