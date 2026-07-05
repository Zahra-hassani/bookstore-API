"use client";
import DashboardHeader from "@/components/Share/Dashboard/DashboardHeader";
import MainSection from "@/components/Share/Dashboard/MainSection";
import Sidebar from "@/components/Share/Dashboard/Sidebar";
import React, { useState } from "react";

function page() {
  const [openMenu, setOpenMenu] = useState(true);
  return (
    <div className="w-full flex  min-h-screen">
      <div className={`${openMenu ? "w-69" : "w-fit"}`}>
        <Sidebar openMenu={openMenu} />
      </div>
      <MainSection openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
}

export default page;
