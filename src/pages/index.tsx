import { Inter } from 'next/font/google'
import { Button } from '@/shared/components/common/ui/button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className='flex gap-4'>
        <Button variant={'default'} className='rounded-full'>default</Button>
        <Button variant={'destructive'}>destructive</Button>
        <Button variant={'ghost'}>ghost</Button>
        <Button variant={'link'}>link</Button>
        <Button variant={'outline'}>outline</Button>
        <Button variant={'secondary'} >secondary</Button>
      </div>

    </main>
  )
}
