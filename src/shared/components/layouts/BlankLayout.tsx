import useTrans from '@/shared/hooks/useTrans';
import React from 'react';

function BlankLayout({ children }: { children: React.ReactNode }) {
    const { trans } = useTrans()
    
    return (
        <div className='relative w-full min-h-full m-auto' >
            <div className='min-h-screen grid place-items-center'>
                {children}
                {/* <div >
                    <p>{`${trans.common.copyRight} ©${new Date().getFullYear()} ${trans.common.createBy} NGSD`}</p>
                </div> */}
            </div>
        </div>
    );
}

;

export default BlankLayout;