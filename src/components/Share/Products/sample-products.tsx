import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SampleProducts() {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-6xl">
      <h3 className="font-bold text-center text-3xl">Our Featured Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full px-2">
        {/* card */}
        {/* <Link
            href={`/books/${book.id}`}
            key={index}
            className="h-110 space-y-3 pb-3 border group relative rounded"
          >
            <Image
              src={book.cover_image}
              className="h-70 rounded-t w-full"
              alt="Book image"
              height={100}
              width={100}
            />
            <h1 className="font-bold text-xl px-3">{book.title}</h1>
            <div className="w-full px-3 flex justify-between items-center">
              <Author id={book.author_id} />
              <p>{book.price}</p>
            </div>
            <Badge variant="outline" className="mx-3">
              {book.genre}
            </Badge>
            <div className="absolute top-0 left-0 h-0 group-hover:h-fit w-full flex flex-col items-end gap-2.5 p-4"></div>
          </Link> */}
      </div>
    </div>
  );
}

export default SampleProducts;
