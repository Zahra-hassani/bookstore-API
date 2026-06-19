import ContactUs from "@/components/ContactUs";
import ShareHero from "@/components/ShareHero";
import React from "react";

function page() {
  return (
    <div>
      <ShareHero pageName="Contact" />
      <ContactUs />
    </div>
  );
}

export default page;
