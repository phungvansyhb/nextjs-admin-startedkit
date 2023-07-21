// ** React Imports
import { Button } from '@/shared/components/common/ui/button'
import useTrans from '@/shared/hooks/useTrans'
import Head from 'next/head'
import Link from 'next/link'


const Error404 = () => {
  const { trans } = useTrans()

  return (
    <>
      <Head>
        <title>{trans.page[404].pageTitle}</title>
      </Head>

      <Button type="button" variant={'default'}> <Link href={"/"}>{trans.common.gobackHome}</Link> </Button>
    </>

  )
}

export default Error404
