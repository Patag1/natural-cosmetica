'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const path = usePathname()?.split('/')[2] || null
  return <div>{path}</div>
}

export default Page