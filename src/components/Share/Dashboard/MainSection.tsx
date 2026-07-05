import React from "react";
import DashboardHeader from "./DashboardHeader";

function MainSection({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: any;
}) {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <DashboardHeader openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
}

export default MainSection;
