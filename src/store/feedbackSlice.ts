import { create } from 'zustand'
import { dbFeedback } from '@/types'
import toast from 'react-hot-toast'

interface FeedbackSliceProps {
  toFeedback: (payload: { id: string; data: dbFeedback }) => Promise<void>
  putFeedback: (payload: { id: string; data: dbFeedback }) => Promise<void>
  delFeedback: (payload: string) => Promise<void>
}

export const FeedbackSlice = create<FeedbackSliceProps>((set) => ({
  toFeedback: async (payload) => {
    await fetch(`/api/feedback/${payload.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload.data),
    })
      .then(() => toast.success('Gracias por tu feedback!'))
      .catch(() => toast.error('Error! Trate denuevo más tarde'))
  },
  putFeedback: async (payload) => {
    await fetch(`/api/feedback/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload.data),
    })
      .then(() => toast.success('Gracias por tu feedback!'))
      .catch(() => toast.error('Error! Trate denuevo más tarde'))
  },
  delFeedback: async (payload) => {
    await fetch(`/api/feedback/${payload}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => toast.success('Feedback borrado exitosamente!'))
      .catch(() => toast.error('Error! Trate denuevo más tarde'))
  },
}))
