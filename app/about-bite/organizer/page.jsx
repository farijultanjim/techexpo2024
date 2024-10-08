// /about-bite/organizer/page.jsx

import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";

const organizerPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg"
        title="Organizers"
        subtitle="Home | Organizers"
      />

      <div className="container mx-auto py-14 px-4 flex flex-col gap-8 text-xl text-justify">
        <div className="grid place-items-center -mt-10">
          <div className="bg-primary p-4 rounded-lg">
            <Image
              src="/creative-age-logo.png"
              width={250}
              height={150}
              alt="creative age"
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-700">
            About Creative Age
          </h2>
          <p>
            Creative Age leads the charge in organizing the Bangladesh
            International Tech Expo 2024. With a proven track record of
            delivering world- class events, Creative Age has teamed up with
            assiduity titans and government bodies to bring a tech exhibit
            that’s acclimatized to inspire and elevate the tech geography in
            Bangladesh. Working in association with mates like ASSEN, Prothom
            Alo, and prosecution support from ADCOMM, this exhibit promises to
            be a hallmark event, driving invention and collaboration.
          </p>
        </div>

        {/* <div>
          <h2 className="text-3xl font-bold text-gray-700">
            Who are our members
          </h2>
          <h3 className="text-xl font-bold text-gray-700">
            Our members are business firms who are belong to below areas of
            business:
          </h3>
          <p>
            CCTV Surveillance System <br />
            Access Control System <br />
            Building Management System <br />
            Public Address System <br />
            Rescue and Disaster Management
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default organizerPage;
