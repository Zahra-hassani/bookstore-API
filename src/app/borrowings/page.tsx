import React from 'react'
 
// type specifications

async function page() {
    const response = await fetch("http://localhost:8000/api/borrow");
    const data = await response.json();
  return (
    <div>
      
    </div>
  )
}

export default page
