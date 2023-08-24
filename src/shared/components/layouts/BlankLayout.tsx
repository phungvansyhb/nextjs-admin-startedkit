import useTrans from '@/hooks/useTrans';
import React from 'react';

function BlankLayout({ children }: { children: React.ReactNode }) {
  const { trans } = useTrans();

  return (
    <div className='relative min-h-full w-full'>
      <div className='grid min-h-screen w-screen'>{children}</div>
    </div>
  );
}

export default BlankLayout;
