import React from 'react'
type author = {
    id: number,
    name: string
}

async function Author({id}:{id:number}) {
    const response = await fetch(`http://localhost:8000/api/author/${id}`);
    const writer:{author:author} = await response.json();
    
  return (
    <div>
      <h2 className='text-lg'>{writer.author.name}</h2>
    </div>
  )
}

export default Author
