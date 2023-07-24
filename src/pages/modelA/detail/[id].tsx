import { GetServerSideProps } from 'next'
import React from 'react'

type Props = {
    id: number
}

export default function WorklogDetail({ id }: Props) {
    return (
        <div>{id}</div>
    )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // const shouldRedirect = await checkPermission({ permissionCode: PERMISSION_CODES.ROLE_MANAGE, type: 'view' }, ctx.req.cookies[APP_SAVE_KEY.TOKEN_KEY])
    return { props: { id: ctx.query.id } }

}

