import Banner from "@/components/Banner";
import React from "react";

const MediaPublicationPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg" // Replace with your actual image path
        title="Media Download"
        subtitle="Home | Media Download"
      />
      <div className="container mx-auto py-14 px-4 flex flex-col gap-4">
        <p className="text-2xl font-bold text-orange-500">Expo</p>
        <p className="text-xl font-bold ">
          Bangladesh International TechExpo 2024
        </p>
        <p>
          Country&apos;s Biggest Showcase for Fire Safety and Security Sector.
        </p>

        <div>
          <p className="text-xl font-bold ">Date</p>
          <p className="text-xl font-semibold ">9th December, 2024</p>
        </div>

        <div>
          <p className="text-xl font-bold ">Location</p>
          <p className="text-xl ">Dhaka, Bangladesh</p>
        </div>

        <div>
          <p className="text-xl font-bold ">Venue</p>
          <p className="text-xl ">
            Bangabandhu International Conference Center (BICC), Dhaka,
            Bangladesh.
          </p>
        </div>

        <div>
          <p className="text-xl font-bold ">Expo Time</p>
          <p className="text-xl ">10.30 am to 7.30 pm</p>
        </div>

        <div>
          <p className="text-xl font-bold ">Frequency</p>
          <p className="text-xl ">Annual</p>
        </div>

        <div>
          <p className="text-xl font-bold ">Open to</p>
          <p className="text-xl ">
            Trade / Business Visitors (Online Registration).
          </p>
        </div>

        <div>
          <p className="text-xl font-bold ">Organizer</p>
          <p className="text-xl ">
            Electronics Safety and Security Association of Bangladesh (ESSAB)
          </p>
        </div>

        <div>
          <p className="text-xl font-bold ">In Association With</p>
          <p className="text-xl ">
            Bangladesh Fire Service & Civil Defense and National Fire Protection
            Association NFPA, (USA).
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaPublicationPage;
