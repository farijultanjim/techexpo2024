"use client";

import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";

const ExpoFlyerPage = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/file1.pdf";
    link.download = "BITE_2024_Expo_Flyer.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg"
        title="Expo Flyer"
        subtitle="Home | Expo Flyer"
      />

      {/* <div className="container mx-auto py-14 px-4 flex flex-col gap-4">
        <button onClick={handleDownload}>Download Flyer PDF</button>

        <div className="grid place-items-center">
        <Image
          src="/expoflyer.jpg"
          width={700}
          height={900}
          alt="exhibitor profile"
        />
        </div>
      </div> */}

      <div className="container mx-auto py-14 px-4 flex flex-col gap-4 text-justify text-xl">
        <p>
          Get a skulk peep of what to anticipate at BITE 2024 by checking out
          our detailed exhibit leaflet! It’s packed with information on the
          events, fair, crucial lodestones , and must- see zones that will make
          your visit indeed more instigative. The leaflet will be available both
          online and at the venue.
        </p>
      </div>
    </div>
  );
};

export default ExpoFlyerPage;
