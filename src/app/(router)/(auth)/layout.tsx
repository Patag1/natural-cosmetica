import { FC } from 'react'

interface layoutProps {
  children: React.ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
  return <div className='flex pt-40 justify-center items-start w-full min-h-screen'>{children}</div>
}

export default layout
