import { UserCircle2Icon } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'

export const metadata:Metadata ={
  title: "All Members"
}

type Member ={
    id:number,
    name: string,
    email: string,
    address: string,
    membership_date: Date,
    whatsApp_number: number|null 
}

async function page() {
    const response = await fetch("http:localhost:8000/api/member");
    const data:Member[] = await response.json();
    // const members:Member[] = data.members;
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      {data.map((member)=>(
        <Link href={`member/${member.id}`} key={member.id} className='flex ring-1 ring-accent-foreground rounded-md p-4 flex-col items-center gap-3'>
          <UserCircle2Icon size={40} />
            <h1>{member.name}</h1>
        </Link>
      ))}
    </div>
  )
}

export default page
