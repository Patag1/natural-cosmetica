import { create } from 'zustand'
import { Product } from '@prisma/client'
import toast from 'react-hot-toast'

interface ProductSliceProps {
  products: Product[] | []
  product: Product | null
  getProducts: () => Promise<void>
  getProduct: (payload: string) => Promise<void>
  putProduct: (payload: { id: string; data: Product }) => Promise<void>
  delProduct: (payload: string) => Promise<void>
}

export const ProductSlice = create<ProductSliceProps>((set) => ({
  products: [],
  product: null,
  getProducts: async () => {
    await fetch('/api/products')
      .then((res) => res.json())
      .then((products) => set({ products }))
      .catch(() => toast.error('Error! Trate denuevo más tarde'))
  },
  getProduct: async (payload) => {
    await fetch(`/api/products/${payload}`)
      .then((res) => res.json())
      .then((product) => set({ product }))
      .catch(() => toast.error('Error! Trate denuevo más tarde'))
  },
  putProduct: async (payload) => {
    await fetch(`/api/products/${payload.id}`, {
      method: 'PUT',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload.data),
    })
      .then(() => toast.success('Producto actualizado!'))
      .catch(() => toast.error('Error! Trate denuevo más tarde'))
  },
  delProduct: async (payload) => {
    await fetch(`/api/products/${payload}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        set((state) => ({
          products: state.products.filter((p) => p.id !== payload),
        }))
      })
      .then(() => toast.success('Producto borrado exitosamente!'))
      .catch(() => toast.error('Error! Trate denuevo más tarde'))
  },
}))
