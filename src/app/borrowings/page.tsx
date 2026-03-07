import Image from "next/image";
import React from "react";

type Borrowing = {
  book: {
    id: number;
    title: string;
    isbn: string;
    cover_image: string;
  };
  member: {
    id: number;
    name: string;
  };
  borrowed_date: Date;
  due_date: Date;
  status: string;
};

async function page() {
  const response = await fetch("http://localhost:8000/api/borrow");
  const data: { data: [Borrowing] } = await response.json();
  const borroingInfo = data.data;
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
      {borroingInfo.map((borrow, index) => (
        <div
          key={index}
          className="w-full h-fit flex items-center gap-4 p-4 border-b"
        >
          <Image
            src={borrow.book.cover_image}
            alt="book image"
            height={400}
            width={200}
            className="h-60 rounded"
          />
          {/* details */}
          <div className="flex flex-col items-start justify-start gap-1.5">
            <h1 className="font-bold text-xl py-3">Book Info:</h1>
            <p className="font-semibold text-xl">{borrow.book.title}</p>
          </div>
          <div>
            {/* member info */}
            <p>{borrow.member.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
