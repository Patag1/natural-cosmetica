import { FC } from 'react'
import NextLink from 'next/link'

interface LinkProps {
  href: string
  label: string
}

const Link: FC<LinkProps> = ({ href, label }) => {
  return (
    <NextLink href={href} className="hover:underline underline-offset-2">
      {label}
    </NextLink>
  )
}

export default Link
