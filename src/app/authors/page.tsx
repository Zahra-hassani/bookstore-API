import { HeartIcon, Share2Icon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

type Author = {
  id: number;
    name: string,
    bio: string;
    nationality: string;
    created_at: Date;
}

async function page() {
    const response = await fetch("http://localhost:8000/api/author");
    const data = await response.json();
    const authors:Author[] = data.authors;

  return (
    <div className='grid p-5 gap-4 grid-cols-3'>
      {authors.map((author,index) =>(
      <Link href={`authors/${author.id}`} key={index} className='flex flex-col gap-3 p-4 rounded transition-all duration-700 group border relative'>
        <h1 className='font-bold text-3xl text-center py-3'>{author.name}</h1>
        <div className='px-1.5 flex justify-between'>
        <h2 className='font-light text-2xl'>{author.nationality}</h2>
        <p className='text-base font-medium text-white/55'>{author.created_at.toLocaleString()}</p>
        </div>
        <p className='text-justify px-1.5'>{author.bio}</p>
        <div className="flex-col gap-3 p-4 hidden group-hover:flex transition-all absolute top-0 right-0">
            <HeartIcon  className='-translate-x-7 group-hover:translate-x-0 hover:fill-black dark:hover:fill-white' />
            <Share2Icon className='-translate-x-7 group-hover:translate-x-0 hover:fill-black dark:hover:fill-white' />
        </div>
      </Link>
      ))}
    </div>
  )
}

export default page
