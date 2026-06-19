"use client";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/contants/app";
import Image from "next/image";
import Link from "next/link";
import React, { useActionState } from "react";
import { signUp } from "../../../../actions/auth.action";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const [data, action, pending] = useActionState(signUp, {
    success: false,
    user: null,
    message: "",
  });
  if (data.success) {
    localStorage.setItem("token", data.message);
    localStorage.setItem("username", data.user.name);
    localStorage.setItem("email", data.user.email);
    router.push("/");
  }
  return (
    <div className="h-screen w-full flex relative justify-center items-center">
      <Image
        src="/sign.jpg"
        alt="Image"
        height={800}
        width={800}
        priority={true}
        className="h-full w-full absolute left-0 top-0"
      />
      <div className="h-fit w-2/5 flex flex-col items-center gap-4">
        <form
          className="flex w-full flex-col gap-3 p-4 rounded-md border border-brand/25 bg-white/50 dark:bg-black/35 backdrop-blur-md dark:text-white"
          action={action}
        >
          <h1 className="font-amaranth text-center font-bold text-4xl text-brand">
            Welcome to {APP_NAME}!
          </h1>
          <p className="text-center text-muted-foreground text-sm">
            Start your new journey with different books!
          </p>
          <div className="grid w-full gap-2">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="username"
              name="name"
              className="border rounded-md px-3 py-1 dark:border-white focus:outline-0"
            />
          </div>
          <div className="grid w-full gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-md px-3 py-1 dark:border-white focus:outline-0"
            />
          </div>
          <div className="grid w-full gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded-md px-3 py-1 dark:border-white focus:outline-0"
            />
          </div>
          <div className="grid w-full gap-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="border rounded-md px-3 py-1 dark:border-white focus:outline-0"
            />
            {!data.success && data.message === "Something went wrong" && (
              <div className="text-destructive text-sm"></div>
            )}
          </div>
          <div className="w-full">
            <Button disabled={pending} className="w-full" type="submit">
              {pending ? "Signing Up" : "Sign Up"}
            </Button>
          </div>
          <p className="text-base text-center">
            Already have an account?
            <Link className="hover:text-brand hover:underline" href="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default page;
