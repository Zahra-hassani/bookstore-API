import React from "react";
import { Button } from "./ui/button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

function ContactUs() {
  return (
    <div className="p-4 w-full grid grid-cols-1 md:grid-cols-2 max-w-6xl">
      <div className="w-full p-3 flex flex-col items-center">
        {/* Contact us */}
        <span className="text-3xl text-center  font-bold text-brand py-4">
          Contact Us
        </span>
        <p className="text-justify text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est nam
          eligendi, quae tenetur assumenda labore fuga ratione accusantium
          voluptatibus ut consequuntur consectetur quaerat harum vitae adipisci
          totam temporibus debitis cupiditate repellendus, possimus dolor.
          Sapiente alias error doloribus ut. Harum id animi veritatis totam
          accusamus.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-2 dark:text-stone-800">
          {/* Social Media */}
          <div className="flex items-center gap-6 group transition-all duration-300 p-4 rounded shadow-xl bg-white">
            <FacebookIcon
              size={30}
              className="group-hover:text-transparent group-hover:fill-blue-600"
            />
            <span>FaceBook</span>
          </div>
          <div className="flex items-center gap-6 group transition-all duration-300 p-4 rounded shadow-xl bg-white">
            <YoutubeIcon
              size={30}
              className="group-hover:text-white bg-clip-text group-hover:scale-125 group-hover:fill-rose-600 "
            />
            <span>Youtube</span>
          </div>
          <div className="flex items-center gap-6 group transition-all duration-300 p-4 rounded shadow-xl bg-white">
            <TwitterIcon
              size={30}
              className="group-hover:text-transparent group-hover:fill-sky-500"
            />
            <span>Twitter</span>
          </div>
          <div className="flex items-center gap-6 group transition-all duration-300 p-4 rounded shadow-xl bg-white">
            <LinkedinIcon
              size={30}
              className="group-hover:text-transparent  group-hover:fill-blue-600"
            />
            <span>Linkedin</span>
          </div>
          <div className="flex items-center gap-6 group transition-all duration-300 p-4 rounded shadow-xl bg-white">
            <InstagramIcon
              size={30}
              className="rounded-md fill-white/90 text-transparent bg-conic-30 from-yellow-400 via-pink-700 to-yellow-400"
            />
            <span>Instagram</span>
          </div>
          <div className="flex items-center gap-6 group transition-all duration-300 p-4 rounded shadow-xl bg-white">
            <Mail size={30} className="group-hover:text-stone-800 " />
            <span>Gmail</span>
          </div>
        </div>
      </div>
      <div>
        {/* form */}
        <form action="" className="w-full p-1 flex flex-col gap-2.5">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="border dark:border-white px-2.5 py-1 rounded focus:outline-0"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="border dark:border-white px-2.5 py-1 rounded focus:outline-0"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              className="border dark:border-white rounded px-2.5 py-1 focus:outline-0 h-32 resize-none"
              id="description"
            ></textarea>
          </div>
          <div className="w-full">
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
