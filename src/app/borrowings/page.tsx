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
  const response = await fetch("http://localhost:8000/api/v2/borrow");
  const data: { data: [Borrowing] } = await response.json();
  const borroingInfo = data.data;
  return (
    <div className="flex justify-between items-center flex-wrap gap-4 w-full mx-auto">
      {borroingInfo.map((borrow, index) => (
        <div
          key={index}
          className="w-2/12 flex-col h-fit flex items-center gap-1 p-2 border rounded"
        >
          <Image
            src={borrow.book.cover_image}
            alt="book image"
            height={400}
            width={200}
            className="h-[65%] rounded"
          />
          {/* details */}
          <div className="flex flex-col items-start justify-start gap-1.5">
            <h2 className="font-bold text-wrap text-xl py-3">
              {borrow.book.title}
            </h2>
            {/* member info */}
            <p>{borrow.member.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
