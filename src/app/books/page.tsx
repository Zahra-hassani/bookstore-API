import Image from "next/image";
import React from "react";
import Author from "./Author";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Books",
};

type Data = {
  data: [Book];
  meta: {
    from: number;
    last_page: number;
  };
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
  const data: Data = await response.json();
  const books = data.data;
  // console.log(books);
  // const pages =
  return (
    <div className="flex flex-col gap-6 p-5">
      <h1 className="font-semibold text-2xl px-2 lg:px-3">Latest Arrivals</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
        {books.map((book) => (
          <Link
            key={book.id}
            href={`book/${book.title}`}
            className="p-4 rounded-md h-full w-full"
          >
            <Image
              src={book.cover_image}
              alt="book"
              height={1000}
              width={1000}
              className="h-64 w-full rounded-md"
            />
            <h1 className="font-semibold">{book.title}</h1>
            <div className="flex items-center justify-between">
              <p className="text-xs">{book.author.name}</p>
              <Badge variant="outline">{book.genre}</Badge>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center items-center gap-3">
        {currentPage < data.meta.from && (
          <Link
            href={`/books?page=${Number(currentPage - 1)}`}
            className="bg-brand text-white px-5 py-2 rounded dark:text-black"
          >
            Previous
          </Link>
        )}
        <div className="flex justify-between items-center gap-2">
          {/* {pages should add} */}
        </div>
        {currentPage < data.meta.last_page && (
          <Link
            href={`/books?page=${Number(currentPage + 1)}`}
            className="bg-brand text-white px-5 py-2 rounded dark:text-black"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}

export default page;
