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

        <div>
          <p className="text-justify text-xl">
            The Bangladesh International Tech Expo 2024 will be held at the
            Bangabandhu International Conference Center( BICC) on Begum Rokeya
            Avenue, Dhaka. Centrally located and fluently accessible, BICC
            provides state- of- the- art installations to insure a flawless
            experience for all attendees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VenueLocationPage;
