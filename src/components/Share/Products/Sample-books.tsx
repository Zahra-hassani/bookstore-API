import React from "react";
import { sampleBooks } from "../../../../actions/product.action";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

async function SampleBooks({ limit }: { limit: number }) {
  const books = await sampleBooks();
  console.log(books);
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-3 p-3">
      <h1 className="font-bold font-amaranth text-center text-xl md:text-3xl relative after:content-[''] after:h-px after:w-32 after:bg-brand after:absolute after:top-[50%] after:-left-40 before:content-[''] before:h-px before:w-32 before:bg-brand before:absolute before:top-[50%] before:-right-40">
        Most Famous Books
      </h1>
      <p className="text-center font-light">
        Read our famoust and foreign novel books.
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {books.data.slice(0, limit).map((book: any) => (
          <Link href={`/books/${book.id}`} key={book.id}>
            <Card>
              <CardHeader className="h-fit w-full">
                <Image
                  src={book.cover_image}
                  alt={book.title}
                  height={100}
                  width={100}
                  className="object-cover h-80 w-full rounded-md"
                />
              </CardHeader>
              <CardContent>
                <span>{book.title}</span>
                <Badge variant="outline">{book.genre}</Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="w-full flex flex-center p-3 items-center justify-center">
        <Link href={`/books`}>
          <Button variant="default">View All Books</Button>
        </Link>
      </div>
    </div>
  );
}

export default SampleBooks;
