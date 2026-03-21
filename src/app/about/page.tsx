import React from "react";

function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl mx-auto p-4">
      <div className="w-full relative flex justify-center items-center">
        {/* image */}
        <div className="h-46 w-46 rounded-full bg-conic-60 from-brand via-blue-600 to-brand shadow-[0_0_2px_black]"></div>
      </div>
      <div className="w-full">
        {/* details */}
        <h4 className="text-white text-shadow-[0_0_8px] text-shadow-brand font-bold text-3xl text-center font-amaranth">
          About Me
        </h4>
        <p className="text-justify text-base">Hi, my name is Zahra Hassani. </p>
      </div>
    </div>
  );
}

export default page;
