import { FC } from 'react'

interface layoutProps {
  children: React.ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
  return <div className="mt-40 mb-32">{children}</div>
}

export default layout
