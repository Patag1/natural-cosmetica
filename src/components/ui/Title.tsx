'use client'

import { FC } from 'react'
import { Pacifico } from 'next/font/google'
import Hr from './Hr'

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })

interface TitleProps {
  text: string
  large?: boolean
}

const Title: FC<TitleProps> = ({ text, large }) => {
  return (
    <>
      <h1
        className={`${pacifico.className} ${large ? 'md:text-6xl text-5xl' : 'text-3xl'}`}
      >
        {text}
      </h1>
      {!large && (
        <Hr />
      )}
    </>
  )
}

export default Title
