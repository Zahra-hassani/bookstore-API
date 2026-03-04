import { APP_NAME } from '@/lib/contants/app'
import Image from 'next/image'
import React from 'react'

function loading() {
  return (
    <div className='h-screen w-full text-brand flex justify-center items-center gap-3'>
        <Image src="/loader.gif" alt={APP_NAME} height={78} width={78} className='h-32 w-32' />
    </div>
  )
}

export default loading
