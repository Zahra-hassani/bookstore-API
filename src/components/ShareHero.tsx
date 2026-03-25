import Image from "next/image";
import motion from "framer-motion";
import React from "react";

function ShareHero({ pageName }: { pageName: string }) {
  return (
    <div className="h-screen max-h-72 relative flex justify-center gap-4 flex-col items-center w-full bg-black/40">
      <Image
        src="/images/library.jpg"
        alt="Sample Hero"
        height={1000}
        width={1000}
        priority={true}
        className="h-full w-full absolute top-0 left-0 -z-10 object-cover"
      />
      <h1
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 0.8, repeat: 1 }}
        className="font-bold text-3xl md:text-4xl text-center text-white"
      >
        Home / <span className="text-brand">{pageName}</span>
      </h1>
      <p className="text-xl font-light text-white text-center">{pageName} Us</p>
    </div>
  );
}

export default ShareHero;
