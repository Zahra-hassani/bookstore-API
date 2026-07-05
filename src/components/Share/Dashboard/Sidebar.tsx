import {
  BookCopyIcon,
  BookIcon,
  BookUserIcon,
  LayoutDashboardIcon,
  Users2Icon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function Sidebar({ openMenu }: { openMenu: boolean }) {
  return (
    <div
      className={`min-h-screen dark:bg-background border-r-2 bg-stone-100 text-brand flex ${openMenu ? "w-3xs" : "w-fit"} flex-col gap-1`}
    >
      <span
        className={`leading-14 text-center text-white font-bold text-3xl bg-brand w-full ${openMenu ? "hidden" : "block"} font-amaranth`}
      >
        B
      </span>
      <Image
        src="/images/bookstore_blue.png"
        alt="Logo"
        height={70}
        width={100}
        className={`h-14 bg-brand w-full ${openMenu ? "block" : "hidden"}`}
      />
      <div className="flex w-full p-3 gap-2 items-center hover:bg-stone-200 dark:hover:bg-white/30">
        <LayoutDashboardIcon />
        <span
          className={`text-black dark:text-white ${openMenu ? "block" : "hidden"}`}
        >
          Dashboard
        </span>
      </div>
      <div className="flex w-full p-3 gap-2 items-center hover:bg-stone-200 dark:hover:bg-white/30">
        <BookCopyIcon />
        <span
          className={`text-black dark:text-white ${openMenu ? "block" : "hidden"}`}
        >
          Books
        </span>
      </div>
      <div className="flex w-full p-3 gap-2 items-center hover:bg-stone-200 dark:hover:bg-white/30">
        <Users2Icon />
        <span
          className={`text-black dark:text-white ${openMenu ? "block" : "hidden"}`}
        >
          Members
        </span>
      </div>
      <div className="flex w-full p-3 gap-2 items-center hover:bg-stone-200 dark:hover:bg-white/30">
        <BookUserIcon />
        <span
          className={`text-black dark:text-white ${openMenu ? "block" : "hidden"}`}
        >
          Borrowing Books
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
