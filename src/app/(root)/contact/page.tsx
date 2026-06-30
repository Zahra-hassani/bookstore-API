import ContactUs from "@/components/ContactUs";
import ShareHero from "@/components/ShareHero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
};

function page() {
  return (
    <div>
      <ShareHero pageName="Contact" />
      <ContactUs />
    </div>
  );
}

export default page;
