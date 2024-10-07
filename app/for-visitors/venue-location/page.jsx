import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";

const VenueLocationPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg"
        title="Venue Location"
        subtitle="Home | Venue Location"
      />

      <div className="container mx-auto py-14 px-4 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">
          Venues - Bangabandhu International Conference Center (BICC)
        </h2>
        <div className="grid place-items-center">
          <Image src="/bicc.jpeg" width={700} height={500} alt="bicc" />
        </div>
      </div>
    </div>
  );
};

export default VenueLocationPage;
