'use client'

import { FC } from 'react'

interface ButtonProps {
  label: string
  onClick?: () => void
  className?: string
}

const Button: FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 border-2 text-neutral-400 border-neutral-400 hover:brightness-0 dark:hover:brightness-200 active:brightness-0 rounded-full dark:active:brightness-200 duration-300 box-border transition-all ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
