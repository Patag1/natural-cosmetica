import HomeContent from '@/components/HomeContent'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative flex justify-between items-center">
      <HomeContent />
      <Image
        src={'/plant1.jpg'}
        alt="pic"
        width={200}
        height={400}
        className="min-h-screen w-auto object-cover md:border-l-[1px] border-gray-400"
      />
    </main>
  )
}
