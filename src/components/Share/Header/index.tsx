// import { d } from '@/components/ui/button'
import { APP_NAME } from "@/lib/contants/app";
import { HeartIcon, Search, SearchIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";

const pages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "books",
    href: "/books",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

function Header() {
  return (
    <div className="w-full flex justify-between items-center h-20 border-b z-30 px-4 dark:bg-black/40 bg-white/60 backdrop-blur-md sticky top-0 left-0">
      <div>
        {/* <Image src={} alt='' height={100}  width={100} /> */}
        <Link
          href="/"
          className="font-extralight font-amaranth text-4xl text-brand"
        >
          {APP_NAME}
        </Link>
      </div>
      <div className="flex justify-between items-center gap-4">
        {pages.map((page, index) => (
          <Link
            href={page.href}
            key={index}
            className="uppercase text-base font-semibold hover:text-brand"
          >
            {page.title}
          </Link>
        ))}
      </div>
      <div className="flex justify-between items-center gap-3">
        <div className="h-9 w-9 rounded-full flex justify-center items-center hover:bg-brand bg-white p-2 font-bold">
          <SearchIcon size={22} className="text-brand hover:text-white" />
        </div>
        <Link
          href="/cart"
          className="h-9 w-9 rounded-full flex justify-center items-center hover:bg-brand bg-white p-2 font-bold"
        >
          <ShoppingCartIcon size={22} className="text-brand hover:text-white" />
        </Link>
        <Theme />
      </div>
    </div>
  );
}

export default Header;
