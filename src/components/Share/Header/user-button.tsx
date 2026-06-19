"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CircleUser,
  User,
  UserCircle2,
  UserCircle2Icon,
  UserRoundPlusIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
type User = {
  name: string;
  email: string;
};

function UserButton() {
  const router = useRouter();
  function LogOutUser() {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    router.push("/");
  }
  const userName = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  if (userName !== null && email !== null) {
    return (
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="focus-visible:hidden focus-visible:outline-0 focus-visible:ring-0"
          >
            <Button
              variant="ghost"
              className="text-brand hover:text-brand font-bold rounded-full"
            >
              {userName.slice(0, 1).toUpperCase()}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 px-3">
            <DropdownMenuLabel className="w-full">Your Info</DropdownMenuLabel>
            <div className="flex justify-start items-center w-fit gap-1">
              <UserCircle2Icon
                size={28}
                className="bg-zinc-400 mx-auto rounded-full text-white"
              />
              <p className="font-semibold">{userName}</p>
            </div>
            <p className="text-sm text-muted-foreground pb-4">{email}</p>
            <Button onClick={LogOutUser} variant={`secondary`}>
              Sign Out
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  } else {
    return (
      <div className="flex gap-2">
        <div
          title="Login"
          className="h-9 w-9 rounded-full flex justify-center items-center group hover:bg-brand bg-white p-2 font-bold"
        >
          <Link href="/login">
            <UserCircle2
              size={26}
              className="text-brand group-hover:text-white"
            />
          </Link>
        </div>
        <div
          title="Sign up"
          className="h-9 w-9 rounded-full flex justify-center items-center group hover:bg-brand bg-white p-2 font-bold"
        >
          <Link href="/sign-up">
            <UserRoundPlusIcon
              size={22}
              className="text-brand group-hover:text-white"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default UserButton;
