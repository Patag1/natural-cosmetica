import Navbar from '@/components/Navbar'
import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <div className="h-full w-full grid grid-cols-1 grid-rows-[1fr_60px]">
        <div className="p-8">
          <Title text="Bienvenido!" />
          <p className="mb-4 max-w-prose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            corporis labore nulla. Unde delectus, ut, at atque fuga eius odio
            expedita eligendi animi eveniet reiciendis porro aut cupiditate ad
            facere!
          </p>
          <div className="max-w-prose flex md:justify-end items-center">
            <Button label="Ver productos" />
          </div>
        </div>
        <div className="border-t-[1px] border-gray-400"></div>
      </div>
      <Image
        src="/plant.jpg"
        alt="plant"
        width={200}
        height={400}
        className="hidden md:block w-auto h-full object-cover border-l-[1px] border-gray-400"
      />
    </div>
  )
}
