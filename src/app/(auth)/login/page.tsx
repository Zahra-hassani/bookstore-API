"use client";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/contants/app";
import Image from "next/image";
import Link from "next/link";
import React, { useActionState } from "react";
import { login } from "../../../../actions/auth.action";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const [data, action, pending] = useActionState(login, {
    success: false,
    message: "",
    user: null,
  });
  if (data.success) {
    localStorage.setItem("message", data.message);
    localStorage.setItem("username", data.user.name);
    localStorage.setItem("email", data.user.email);
    router.push("/");
  }
  return (
    <div className="h-screen w-full flex relative justify-center items-center">
      <Image
        src="/log.jpg"
        alt="Image"
        height={500}
        width={500}
        priority={true}
        className="h-full w-full absolute left-0 top-0"
      />
      <div className="h-fit w-1/3 flex flex-col items-center gap-4">
        <form
          className="flex w-full flex-col gap-3 p-4 rounded-md border border-brand/25 bg-white/50 dark:bg-black/35 backdrop-blur-md dark:text-white"
          action={action}
        >
          <h1 className="font-amaranth text-center font-bold text-4xl text-brand">
            Welcome Back
          </h1>
          <p className="text-center text-sm text-muted-foreground">
            Login and continue Your study.
          </p>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-md px-3 py-1 dark:border-white focus:outline-0"
              required
            />
            {!data.success && (
              <div className="text-destructive text-sm">
                <span>{data.message}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded-md px-3 py-1 dark:border-white focus:outline-0"
              required
            />
          </div>
          <div className="w-full">
            <Button disabled={pending} className="w-full" type="submit">
              {pending ? "Please wait..." : "Login"}
            </Button>
          </div>
          <p className="text-base">
            Don't have an account?
            <Link className="hover:text-brand underline" href="/sign-up">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default page;
