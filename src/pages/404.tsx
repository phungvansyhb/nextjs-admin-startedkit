// ** React Imports
import { Button } from '@/shared/components/common/ui/button'
import useTrans from '@/shared/hooks/useTrans'
import { BanIcon } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'


const Error404 = () => {
  const { trans } = useTrans()

  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <Head>
        <title>{trans.page[404].pageTitle}</title>
      </Head>
      <div className='font-mono text-[88px] font-bold'>404 </div>
      <BanIcon size={42} />
      <div className='font-mono text-base font-bold'>Trang không tồn tại </div>
      <Button type="button" variant={'default'} className='mt-8'> <Link href={"/"}>{trans.common.gobackHome}</Link> </Button>
    </div>

  )
}

export default Error404
