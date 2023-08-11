'use client'

import { FC, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import Link from 'next/link'
import Title from '@/components/ui/Title'
import Button from '@/components/ui/Button'

interface pageProps {}

const provinces = [
  'Extranjero',
  'Buenos Aires',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Ciudad Autónoma de Buenos Aires',
  'Córdoba',
  'Corrientes',
  'Entre Ríos',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja',
  'Mendoza',
  'Misiones',
  'Neuquén',
  'Río Negro',
  'Salta',
  'San Juan',
  'San Luis',
  'Santa Cruz',
  'Santa Fe',
  'Santiago del Estero',
  'Tierra del Fuego, Antártida e Islas del Atlántico Sur',
  'Tucumán',
]

const Page: FC<pageProps> = ({}) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      location: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true)

    return await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        toast.success('Registrado exitosamente!')
        router.push('/products')
      })
      .catch(() => {
        toast.error('Error! Intente denuevo más tarde')
      })
      .finally(() => {
        setLoading(false)
        reset({
          name: '',
          email: '',
          password: '',
          location: '',
          foreign: '',
        })
      })
  }

  return (
    <div className="flex flex-col md:items-center w-full md:mx-0 mx-8">
      <Title text="Registrate" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:w-96 gap-4"
      >
        <div className="flex flex-col gap-2">
          <div className="relative w-full">
            <input
              type="text"
              id="name"
              disabled={loading}
              placeholder="Nombre"
              {...register('name', { required: true })}
              className={`w-full bg-transparent border-b-2 ${
                errors['name'] ? 'border-rose-400' : 'border-neutral-400'
              } focus:outline-none transition-all`}
            />
            {errors['name'] && (
              <label className="absolute right-1 top-1 text-rose-400 text-xs pointer-events-none">
                requerido
              </label>
            )}
          </div>
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
              <label className="absolute right-1 top-1 text-rose-400 text-xs pointer-events-none">
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
              <label className="absolute right-1 top-1 text-rose-400 text-xs pointer-events-none">
                requerido
              </label>
            )}
          </div>
          <div className="relative w-full">
            <select
              id="location"
              disabled={loading}
              defaultValue=""
              {...register('location', { required: true })}
              className={`appearance-none w-full bg-transparent border-b-2 ${
                errors['location'] ? 'border-rose-400' : 'border-neutral-400'
              } focus:outline-none transition-all text-neutral-700 dark:text-neutral-200 focus:bg-neutral-200 dark:focus:bg-neutral-900`}
            >
              <option value="" disabled>
                Provincia (ARG)
              </option>
              {provinces.map((p, i) => (
                <option value={p} key={i}>
                  {p}
                </option>
              ))}
            </select>
            {errors['location'] && (
              <label className="absolute right-1 top-1 text-rose-400 text-xs pointer-events-none">
                requerido
              </label>
            )}
          </div>
          {watch('location') === 'Extranjero' && (
            <div className="relative w-full">
              <input
                type="text"
                id="foreign"
                disabled={loading}
                placeholder="País extranjero"
                {...register('foreign', {
                  required: watch('location') === 'Extranjero',
                })}
                className={`w-full bg-transparent border-b-2 ${
                  errors['foreign'] ? 'border-rose-400' : 'border-neutral-400'
                } focus:outline-none transition-all`}
              />
              {errors['foreign'] && (
                <label className="absolute right-1 top-1 text-rose-400 text-xs pointer-events-none">
                  requerido
                </label>
              )}
            </div>
          )}
        </div>
        <Button label="Registrarse" type="submit" />
      </form>
      <p className="mt-4 w-full text-xs text-center text-neutral-400">
        Ya tenés cuenta?{' '}
        <Link
          href={'/login'}
          className="font-extrabold text-neutral-500 hover:underline"
        >
          Inicia sesión
        </Link>
      </p>
    </div>
  )
}

export default Page
