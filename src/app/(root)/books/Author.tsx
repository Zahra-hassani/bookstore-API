import React from "react";
type author = {
  id: number;
  name: string;
};

async function Author({ id }: { id: number }) {
  const response = await fetch(`http://localhost:8000/api/v2/author/${id}`);
  const writer = await response.json();
  console.log(writer);

  return <div>{/* <h2 className='text-lg'>{writer.author.name}</h2> */}</div>;
}

export default Author;
