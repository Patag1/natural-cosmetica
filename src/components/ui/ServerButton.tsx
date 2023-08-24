'use client'

import { FC } from 'react'
import Button from './Button'
import { OrderSlice } from '@/store/orderSlice'

interface ServerButtonProps {
  id: string
}

const ServerButton: FC<ServerButtonProps> = ({ id }) => {
  const { toCart } = OrderSlice()

  return (
    <Button
      label="Sacar del carrito"
      onClick={() => toCart({ id, add: false })}
    />
  )
}

export default ServerButton
