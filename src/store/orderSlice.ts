import { create } from 'zustand'
import { dbOrder } from '@/types'
import toast from 'react-hot-toast'
import { Product } from '@prisma/client'

interface OrderSliceProps {
  cart: Product[] | []
  orders: dbOrder[] | []
  getCart: () => Promise<void>
  toCart: (payload: { id: string; add: boolean }) => Promise<void>
  getOrders: () => Promise<void>
  toOrder: (payload: string | string[]) => Promise<void>
  delOrder: (payload: string) => Promise<void>
}

export const OrderSlice = create<OrderSliceProps>((set) => ({
  cart: [],
  orders: [],
  getCart: async () => {
    await fetch('/api/cart')
      .then((res) => res.json())
      .then((data) => set({ cart: data }))
  },
  toCart: async (payload) => {
    await fetch(`/api/cart`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(() => toast.success('Agregado al carrito!'))
      .catch(() => toast.error('Error! Trate denuevo más tarde'))
  },
  getOrders: async () => {
    await fetch('/api/orders')
      .then((res) => res.json())
      .then((orders) => set({ orders }))
  },
  toOrder: async (payload) => {
    await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(() => toast.success('Gracias por su compra!'))
      .catch(() => toast.error('Error! Trate denuevo más tarde'))
  },
  delOrder: async (payload) => {
    await fetch(`/api/orders/${payload}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => toast.success('Compra cancelada exitosamente!'))
      .catch(() => toast.error('Error! Trate denuevo más tarde'))
  },
}))
