'use client'

import { FC } from 'react'
import Button from './Button'
import { OrderSlice } from '@/store/orderSlice'

interface ServerButtonProps {
  id: string
}

const ServerButton: FC<ServerButtonProps> = ({ id }) => {
  const { delFromCart } = OrderSlice()

  return (
    <Button
      label="Sacar del carrito"
      onClick={() => delFromCart(id)}
    />
  )
}

export default ServerButton
