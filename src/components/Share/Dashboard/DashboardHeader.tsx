import { BellIcon, PanelLeftIcon } from "lucide-react";
import React from "react";
import Theme from "../Header/Theme";

function DashboardHeader({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: any;
}) {
  return (
    <div className="w-full py-1.5 border-b-2 bg-stone-100 dark:bg-black flex justify-between items-center px-3">
      <div className="flex gap-2 items-center">
        <PanelLeftIcon onClick={() => setOpenMenu(!openMenu)} />
        <span className="">Bookstore Management</span>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="search"
          name="search"
          placeholder="Search..."
          className="bg-white dark:bg-stone-700 rounded-full p-2"
        />
        <div className="relative p-3 rounded-lg border">
          <BellIcon size={18} />
        </div>
        <Theme />
      </div>
    </div>
  );
}

export default DashboardHeader;
