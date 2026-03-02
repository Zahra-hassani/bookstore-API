import { UserCircle2Icon } from 'lucide-react';
import React from 'react'
type Member = {
    name : string;
    email: string;
    address:string;
    membership_date: Date;
}

async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params;
    const response = await fetch(`http://localhost:8000/api/member/${id}`);
    const data:{data:Member} = await response.json();
    const memberInfo = data.data;
  return (
    <div>
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex flex-col items-center gap-4 p-4 rounded-md">
            <UserCircle2Icon size={60} />
            <h1 className="font-bold text-2xl py-2 text-center">{memberInfo.name}</h1>
            <h2 className="font-muted-foreground">{memberInfo.email}</h2>
            <div className="flex gap-4 justify-start w-96">
            <p>Home address: </p>
            <p>{memberInfo.address}</p>
            </div>
            <div className="flex gap-4 justify-start w-96">
            <p>Registration date : </p>
            <p>{memberInfo.membership_date.toLocaleString()}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
