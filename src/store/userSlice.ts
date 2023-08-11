import { create } from 'zustand'
import { dbUser, putUser } from '@/types'
import toast from 'react-hot-toast'

interface UserSliceProps {
  user: dbUser | null
  userVisit: dbUser | null
  getCurrentUser: () => Promise<void>
  putCurrentUser: (payload: { id: string; data: putUser }) => Promise<void>
  delCurrentUser: (payload: string) => Promise<void>
  getUser: (payload: string) => Promise<void>
}

export const UserSlice = create<UserSliceProps>((set) => ({
  user: null,
  userVisit: null,
  getCurrentUser: async () => {
    await fetch('/api/user')
      .then((res) => res.json())
      .then((user) => {
        if (!user.status) {
          set({ user })
        }
      })
      .catch((err) => console.log(err.message))
  },
  getUser: async (payload) => {
    await fetch(`/api/user/${payload}`)
      .then((res) => res.json())
      .then((user) => set({ user }))
  },
  putCurrentUser: async (payload) => {
    await fetch(`/api/user/${payload.id}`, {
      method: 'PUT',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload.data),
    })
      .then(() => toast.success('Perfil actualizado!'))
      .catch(() => toast.error('Error! Trate denuevo más tarde'))
  },
  delCurrentUser: async (payload) => {
    await fetch(`/api/user/${payload}`, {
      method: 'DELETE',
    })
      .then(() => toast.success('Cuenta borrada exitosamente!'))
      .catch(() => toast.error('Error! Trate denuevo más tarde'))
  },
}))
