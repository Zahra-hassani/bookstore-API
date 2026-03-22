import Hero from "@/components/Hero";
import { APP_NAME } from "@/lib/contants/app";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <h1 className="text-brand font-bold font-amaranth ">{APP_NAME}</h1>
    </div>
  );
}
