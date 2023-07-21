// ** React Imports
import BlankLayout from '@/shared/components/layouts/BlankLayout'
import useTrans from '@/shared/hooks/useTrans'
import Head from 'next/head'
import Link from 'next/link'

const Error500 = () => {
  const { trans } = useTrans()

  return (
    <>
      <Head>
        <title>{trans.page[500].pageTitle}</title>
      </Head>
      
    </>

  )
}

Error500.getLayout = (children: React.ReactNode) => <BlankLayout>{children}</BlankLayout>


export default Error500
