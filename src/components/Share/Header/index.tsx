import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const pages=[
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Shop",
        href: "/shop"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Contact",
        href: "/contact"
    },
]

function Header() {
  return (
    <div className='w-full border-b sticky top-0 left-0 bg-white/10 backdrop-blur-lg'>
      <div className="h-20 w-full flex flex-between items-center gap-2 border-b">
        <div>
            {/* logo */}
            <Link href="/">
            {/* <Image src="" alt='' height={50} width={50} /> */}
            <h1 className='font-bold text-brand font-amaranth'>Book store</h1>
            </Link>
        </div>
        <div className='flex justify-between items-center gap-3'>
            {pages.map((page,index)=>(
            <Link key={index} href={`${page.href}`}>{page.title}</Link>
            ))}
        </div>
        <div className='flex gap-2'>
            <button className='px-5 py-3 text-brand'><Search /></button>
        </div>
      </div>
    </div>
  )
}

export default Header
