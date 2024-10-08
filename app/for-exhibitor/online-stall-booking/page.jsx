import Banner from "@/components/Banner";
import React from "react";

const OnlineStallBooking = () => {
  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg"
        title="Online Stall Booking"
        subtitle="Home | Online Stall Booking"
      />

      <div className="container mx-auto py-14 px-4 flex flex-col gap-4 text-xl">
        Secure your spot at the most awaited tech event of the time! Our online
        cube reserving system is fast and simple, allowing you to choose from a
        variety of spaces that fit your requirements. Do n’t miss the chance to
        showcase your inventions to a massive followership of tech suckers and
        assiduity professionals. Bespeak your cube moment and make your mark in
        Bangladesh&apos;s tech trip.
      </div>
    </div>
  );
};

export default OnlineStallBooking;
