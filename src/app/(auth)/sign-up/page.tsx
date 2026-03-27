import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/contants/app";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="h-screen w-full flex relative justify-center items-center">
      <Image
        src="/sign-up.jpg"
        alt="Image"
        height={800}
        width={800}
        priority={true}
        className="h-full w-full absolute left-0 top-0"
      />
      <div className="h-fit w-1/3 flex flex-col items-center gap-4">
        <form
          className="flex w-full flex-col gap-3 p-4 rounded-md border border-brand/25 bg-white/50 dark:bg-black/35 backdrop-blur-md dark:text-white"
          action=""
        >
          <h1 className="font-amaranth text-center font-bold text-4xl text-brand">
            {APP_NAME}
          </h1>
          <p className="text-center">
            Start your new journey with different books!
          </p>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="username"
              className="border rounded-md px-3 py-1 dark:border-white focus:outline-0"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border rounded-md px-3 py-1 dark:border-white focus:outline-0"
            />
          </div>
          <div className="w-full">
            <Button className="w-full" type="submit">
              Save
            </Button>
          </div>
          <p className="text-base">
            Already have an account?
            <Link className="hover:text-brand" href="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default page;
