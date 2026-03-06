"use client";
import { LucideFrown } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function notFound() {
  return (
    <div className='w-full h-fit mx-auto max-w-6xl flex flex-col items-center gap-4 p-3'>
      <h1 className='text-2xl text-center py-4 font-amaranth flex justify-center gap-1.5 items-center'><LucideFrown className='font-bold'  /> Whoops! That page can't be found.</h1>
      <div className='w-full h-fit border-t grid grid-cols-1 lg:grid-cols-2 gap-3.5 py-5'>
        <div className='flex justify-center h-fit items-end gap-4 p-4'>
            <span className='text-[250px] font-extrabold text-brand text-shadow-[0_3px_10px_black] font-sans'>4</span>
            <span className='text-[250px] font-extrabold text-brand text-shadow-[0_3px_10px_black] font-sans'>0</span>
            <span className='text-[250px] font-extrabold text-brand text-shadow-[0_3px_10px_black] font-sans'>4</span>
        </div>
        <div className='flex flex-col items-start h-fit gap-2'>
            <p className='font-amaranth text-xl'>The page you requested was not found, And we have a fine guess why.</p>
            <p className='font-light'>If you typed the URL directly, please make sure the spellung is correct.</p>
            <p className='font-light'>If clicked on a link to get here, the link is outdated.</p>
            <p className='font-light'><Link href="/" className='text-brand'>Home Page</Link> to home page</p>
            <p className='font-light'>Use the search bar at the top of the page to search for your products.</p>
            <p className='font-light'>Folllow These links to get you back on track</p>
            <p className='font-light text-brand'><Link href="/login">Login</Link> / <Link href="/register">Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default notFound
