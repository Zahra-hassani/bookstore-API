import ShareHero from "@/components/ShareHero";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <ShareHero pageName={"About"} />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl mx-auto p-4">
        <div className="w-full relative flex justify-center items-center">
          {/* image */}
          <Image
            src="/images/me.png"
            alt=""
            height={1000}
            width={1000}
            priority={true}
            className="rounded-full h-56 w-56"
          />
          <div className="h-56 w-56 absolute top-[50%] left-[50%] -translate-[50%] -z-30 rounded-full  shadow-[0_0_2px_black]"></div>
        </div>
        <div className="w-full flex flex-col items-center">
          {/* details */}
          <h4 className="text-white py-6 text-shadow-[0_0_8px] text-shadow-brand font-bold text-3xl text-center font-amaranth">
            About Me
          </h4>
          <p className="text-justify text-base">
            Hi, my name is Zahra Hassani. I’m a web developer who loves turning
            ideas into real, working products. I enjoy working with modern tools
            and frameworks, and I’m always curious about how things work behind
            the scenes. Whether it’s building a new project or fixing a tricky
            bug, I like the challenge and the learning that comes with it.
            Outside of coding, I’m always looking for ways to grow and improve
            both personally and professionally.
          </p>
          <div className="py-4 space-y-4">
            <span className="text-brand font-bold text-center text-xl">
              You can reach me on:
            </span>
            <div className="flex justify-center items-center gap-3 p-4">
              <div className="p-3.5 rounded-full hover:bg-brand hover:text-white text-center">
                <GithubIcon size={30} />
              </div>
              <div className="p-3.5 rounded-full hover:bg-brand hover:text-white text-center">
                <LinkedinIcon size={30} />
              </div>
              <div className="p-3.5 rounded-full hover:bg-brand hover:text-white text-center">
                <Mail size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
