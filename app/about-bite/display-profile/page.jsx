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
      <div className="container mx-auto py-14 px-4 text-xl">
        <div className="grid place-items-center">
        {/* <Image
          src="/Exhibitor-Profile.png"
          width={700}
          height={900}
          alt="exhibitor profile"
        /> */}
        <p>The exhibitor lineup at BITE 2024 represents a different range of tech  diligence. From  introducing startups to established tech  titans,  fair will showcase groundbreaking products and services in fields like smart technology, artificial intelligence, robotics, fintech, cybersecurity, digital  metamorphosis, and much  further. Each  expo has a unique story to tell, bringing innovative  results that shape the future of our everyday lives.</p>
        </div>
      </div>
    </div>
  );
};

export default displayProfilePage;
