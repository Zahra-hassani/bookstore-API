import { FacebookIcon, Heart, Share2Icon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Author = {
  id: number;
  name: string;
  bio: string;
  nationality: string;
  books: number;
};

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`http://localhost:8000/api/v2/author/${id}`);
  const data: { data: Author } = await response.json();
  const authorInfo = data.data;
  return (
    <div>
      {/* {id} */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex flex-col items-center gap-3 p-4 rounded-lg">
          <h1 className="font-bold text-2xl text-center py-2">
            {authorInfo.name}
          </h1>
          <h2 className="text-muted-foreground">{authorInfo.nationality}</h2>
          <p className="text-justify">{authorInfo.bio}</p>
          <p className="text-justify">
            Books:
            {/* <Link href={`/book?search=${authorInfo.name}`}> */}
            {authorInfo.books}
            {/* </Link> */}
          </p>
          <div className="flex justify-center items-center gap-3">
            <Heart className="hover:fill-rose-800 hover:text-transparent hover:animate-in" />
            <Share2Icon className="hover:fill-accent-foreground hover:animate-in" />
            <FacebookIcon className=" hover:text-transparent hover:fill-blue-600  hover:animate-in" />
            <TwitterIcon className="hover:fill-sky-600 hover:text-transparent hover:animate-in" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
