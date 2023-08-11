'use client'

import { FC } from 'react'
import Button from './ui/Button'
import { useMobile } from '@/store/useMobile'

interface HomeContentProps {}

const HomeContent: FC<HomeContentProps> = ({}) => {
  const { menuIsOpen } = useMobile()

  return (
    <>
      <div
        className={`px-8 md:bg-transparent bg-neutral-200 rounded-xl md:flex hidden flex-col transition-all duration-300`}
      >
        <h1 className="text-2xl uppercase max-w-prose">
          Productos bioamigables
          <span className="text-base lowercase">
            , fórmulas naturales y activos autóctonos
          </span>
        </h1>
        <div className="max-w-prose flex justify-start mt-8">
          <Button label="Ver productos" className="w-10/12" />
        </div>
      </div>
      <div className={`${menuIsOpen ? 'opacity-0' : 'opacity-100'} md:hidden block absolute bottom-8 left-8 text-2xl font-bold bg-neutral-200 rounded-2xl p-4 transition-all duration-300`}>
        <p className='mb-4'>Cosmética natural</p>
        <Button label='Ver productos' />
      </div>
    </>
  )
}

export default HomeContent
