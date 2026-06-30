import { LayoutDashboardIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function Sidebar() {
  return (
    <div className="max-w-3xs min-h-screen bg-brand text-white flex flex-col gap-1 px-3">
      <Image
        src="/images/bookstore_blue.png"
        alt="Logo"
        height={80}
        width={100}
        className=" w-full"
      />
      <div className="flex w-full py-3 gap-2 items-center">
        <LayoutDashboardIcon /> <span className="">Dashboard</span>
      </div>
      <div className="flex w-full py-3 gap-2 items-center">
        <LayoutDashboardIcon /> <span className="">Dashboard</span>
      </div>
      <div className="flex w-full py-3 gap-2 items-center">
        <LayoutDashboardIcon /> <span className="">Dashboard</span>
      </div>
      <div className="flex w-full py-3 gap-2 items-center">
        <LayoutDashboardIcon /> <span className="">Dashboard</span>
      </div>
    </div>
  );
}

export default Sidebar;
