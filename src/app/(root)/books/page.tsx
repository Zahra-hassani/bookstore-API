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
    links: {}[];
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
      {/* pagination */}
      <div className="w-full max-w-sm mx-auto overflow-auto flex justify-center items-center gap-3">
        {data.meta.links?.map((link: any) => (
          <Link
            key={link.label}
            href={`/books?page=${link.page}`}
            dangerouslySetInnerHTML={{ __html: link.label }}
            className="bg-brand py-1 hover:bg-white hover:text-brand px-3 transition-all text-white font-bold rounded-full"
          />
        ))}
      </div>
    </div>
  );
}

export default page;
