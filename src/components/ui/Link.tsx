import { FC } from 'react'
import NextLink from 'next/link'

interface LinkProps {
  href: string
  label: string
  small?: boolean
}

const Link: FC<LinkProps> = ({ href, label, small }) => {
  return (
    <NextLink
      href={href}
      className={`flex flex-col w-fit ${
        small && 'text-xs'
      } [&>div]:hover:w-full md:[&>div]:active:w-0 [&>div]:active:w-full whitespace-nowrap`}
    >
      {label}
      <div className="w-0 border-b-[1px] border-neutral-700 dark:border-neutral-200 transition-all duration-500"></div>
    </NextLink>
  )
}

export default Link
