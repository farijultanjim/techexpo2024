// /about-bite/buisiness-info/page.jsx

import Banner from "@/components/Banner";
import React from "react";

const BusinessInfoPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg"
        title="Buisness Info"
        subtitle="Home | Buisness Info"
      />
      <div>
        <div className="container mx-auto py-14 px-4 flex flex-col gap-4 text-xl text-justify">
          <p>
            “
            <span className="text-accent">
              The Bangladesh International Tech Expo( BITE) 2024
            </span>
            ” is further than just a fair; it&apos;s the twinkle of invention
            and technology in Bangladesh. Organized by Creative Age, this event
            aims to showcase the inconceivable advancements in technology,
            bridging original gift with global trends. Supported by top
            institutions like the ICT Division, Posts and Telecommunications
            Division, Ministry of Youth and Sports, Bangladesh Computer Society,
            ande-CAB, BITE 2024 is committed to situating Bangladesh as a leader
            in the digital world.
          </p>
          <p>
            Our vision is to produce a platform that nurtures the tech
            ecosystem, encourages incipiency culture, and ignites the spirit of
            invention among youth. With over 250 fair and 150,000 anticipated
            callers, this event is set to be the largest congregation of tech
            suckers, assiduity leaders, and visionaries in Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoPage;
