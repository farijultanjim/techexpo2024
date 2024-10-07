// /about-bite/display-profile/page.jsx

import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";

const displayProfilePage = () => {
  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg"
        title="Exhibitor Profile"
        subtitle="Home | Exhibitor Profile"
      />
      <div className="container mx-auto py-14 px-4 ">
        <div className="grid place-items-center">
        <Image
          src="/Exhibitor-Profile.png"
          width={700}
          height={900}
          alt="exhibitor profile"
        />
        </div>
      </div>
    </div>
  );
};

export default displayProfilePage;
