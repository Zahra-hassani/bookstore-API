import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Book = {
  title:string;
  isbn: string;
  description: string;
  published_at: Date;
  total_copies: number;
  available_copies: boolean;
  cover_image: string;
  price: number;
  genre: string;
  author: {
    name: string;
    bio: string;
    nationality: string
  }
}

async function page({params}:{params:Promise<{id:string}>}) {
  const {id} = await params;
  const response = await fetch(`http://localhost:8000/api/book/${id}`);
  const data:{data:Book} = await response.json();
  const bookInfo = data.data;
 
  return (
    <div className=''>
          <div className="grid grid-cols-4 w-full">
            <div className="col-span-2 p-4 ">
              {/* image */}
              <Image src={bookInfo.cover_image} alt={bookInfo.title} className='lg:h-96 lg:w-70 ml-auto' height={100} width={100} />
            </div>
            <div className="col-span-2 flex flex-col items-start space-y-2 p-4">
              {/* details */}
              <h1 className='font-bold text-xl'>Book Name: {bookInfo.title}</h1>
              <h2 className="font-medium text-base">Genre: {bookInfo.genre}</h2>
              <p className="text-base">Publish Date: {bookInfo.published_at.toString()}</p>
              {bookInfo.available_copies === true?(
                <div className='flex flex-col space-y-2'>
                  <p className="text-base">Price: {bookInfo.price}</p>
                <Button variant="default">
                  <Link href="" className='flex gap-3 group'><ShoppingCart className='group-hover:fill-white translate-y-1' /> Buy now</Link>
                </Button>
                </div>
              ):(
                <div className="flex flex-col space-y-2">
                  <p className="text-foreground-muted">Not Available</p>
                  <Button variant="default">
                    <Link href="">Say if exist</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
      <div className='px-5'>
      <h1>About Author</h1>
        {/* author details */}
        <h1 className="font-bold text-2xl">{bookInfo.author.name}</h1>
        <h3 className="text-foreground-muted">{bookInfo.author.nationality}</h3>
        <p>{bookInfo.author.bio}</p>
      </div>
    </div>
  )
}

export default page
