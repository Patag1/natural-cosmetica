'use client'

import { FC } from 'react'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })

interface TitleProps {
  text: string
  large?: boolean
}

const Title: FC<TitleProps> = ({ text, large }) => {
  return (
    <>
      <h1
        className={`${pacifico.className} ${large ? 'text-6xl' : 'text-3xl'}`}
      >
        {text}
      </h1>
      {!large && (
        <div className="max-w-prose border-b-[1px] border-gray-400 mb-4"></div>
      )}
    </>
  )
}

export default Title
