'use client'

import { FC, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { signIn } from 'next-auth/react'
import Title from '@/components/ui/Title'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { UserSlice } from '@/store/userSlice'

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { getCurrentUser } = UserSlice()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.ok) {
          toast.success('Sesión iniciada')
          getCurrentUser()
          router.push('/products')
        }

        if (callback?.error) {
          toast.error(callback.error)
        }
      })
      .catch(() => toast.error('Error! Intente denuevo más tarde'))
  }

  return (
    <div className="flex flex-col md:items-center w-full md:mx-0 mx-8">
      <Title text="Inicia sesión" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:w-96 gap-4"
      >
        <div className="flex flex-col gap-2">
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              disabled={loading}
              placeholder="Email"
              {...register('email', {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
              className={`w-full bg-transparent border-b-2 ${
                errors['email'] ? 'border-rose-400' : 'border-neutral-400'
              } focus:outline-none transition-all`}
            />
            {errors['email'] && (
              <label className="absolute right-1 top-1 text-rose-400 text-xs">
                requerido
              </label>
            )}
          </div>
          <div className="relative w-full">
            <input
              type="password"
              id="password"
              disabled={loading}
              placeholder="Contraseña"
              {...register('password', { required: true })}
              className={`w-full bg-transparent border-b-2 ${
                errors['password'] ? 'border-rose-400' : 'border-neutral-400'
              } focus:outline-none transition-all`}
            />
            {errors['name'] && (
              <label className="absolute right-1 top-1 text-rose-400 text-xs">
                requerido
              </label>
            )}
          </div>
        </div>
        <Button label="Iniciar sesión" type="submit" />
      </form>
      <p className="mt-4 w-full text-xs text-center text-neutral-400">
        No tenés cuenta?{' '}
        <Link
          href={'/signup'}
          className="font-extrabold text-neutral-500 hover:underline"
        >
          Registrate
        </Link>
      </p>
    </div>
  )
}

export default Page
