import { APP_NAME } from '@/lib/contants/app';
import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='w-full bottom-0 bg-white/40 backdrop-blur-md left-0 border-t p-5 flex justify-center items-center'>
      <p className='text-muted-foreground'>{currentYear} {APP_NAME} &copy;All rights reserved.</p>
    </footer>
  )
}

export default Footer
