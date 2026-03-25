import Image from "next/image";
import React from "react";
import Author from "./Author";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Books",
};

type Book = {
  id: number;
  title: string;
  description: string;
  available_copies: number;
  cover_image: string;
  status: string;
  price: number;
  author_id: number;
  genre: string;
  author: {
    name: string;
    bio: string;
    nationality: string;
  };
};

async function page({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const URL =
    currentPage > 1
      ? `http://localhost:8000/api/v2/book?page=${currentPage}`
      : "http://localhost:8000/api/v2/book";
  const response = await fetch(URL);
  // const contentType = response.headers.get("content-type");
  // console.log(contentType);
  const data: { data: Book[] } = await response.json();
  const books = data.data;
  console.log(books);
  return (
    <div className="flex flex-col gap-6 p-5">
      <h1 className="font-semibold text-2xl px-2 lg:px-3">Latest Arrivals</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
        {books.map((book, index) => (
          <Link
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
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center items-center gap-3">
        <Link
          href="/books"
          className="bg-brand text-white px-5 py-2 rounded dark:text-black"
        >
          first page
        </Link>
        <Link
          href="/books?page=2"
          className="bg-brand text-white px-5 py-2 rounded dark:text-black"
        >
          last page
        </Link>
      </div>
    </div>
  );
}

export default page;
