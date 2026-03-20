import React from "react";

function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto p-4">
      <div className="w-full relative">
        {/* image */}
        <div className="h-40 w-40 rounded-full bg-conic-60 from-brand via-blue-600 to-brand shadow-[0_0_2px_black]"></div>
      </div>
      <div className="w-full">{/* details */}</div>
    </div>
  );
}

export default page;
