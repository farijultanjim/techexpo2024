// /about-bite/presidents-message/page.jsx

import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";

const presidentsMessagePage = () => {
  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg"
        title="President's Message"
        subtitle="Home | President's Message"
      />
      <div className="container mx-auto py-14 px-4 flex flex-col gap-8 ">
        <div className="flex justify-between items-center">
          <div>
          <Image
          src="/president.jpeg"
          width={300}
          height={200}
          alt="exhibitor profile"
        />
          </div>

          <div className="flex flex-col gap-1 text-end">
            <p className="font-semibold">Md. Niaz Ali Chisty</p>
            <p className="font-semibold">President</p>
            <p>Electronics Safety and Security Association of Bangladesh</p>
            <p>ESSAB</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-xl text-justify">
          <p>
            I’m very delighted and honored to announce the 8th Edition of
            International Fire, Safety and Security Expo - IFSSE 2023. It is a
            pride and excited moment for all the devoted members of ESSAB.{" "}
          </p>
          <p>
            Electronics Safety & Security Association of Bangladesh (ESSAB) is a
            non-profitable trade association, established in 2013. ESSAB has
            gradually evolved into the largest professional trade association in
            Bangladesh with the purpose of promoting and enhancing the growth
            and professional development of the fire safety, life safety,
            security and integrated systems industry in Bangladesh.
          </p>
          <p>
            A fire safety system are important components of a building’s safety
            plan, regardless of whether it’s a commercial facility, hospital or
            educational facility. Without a fire protection system, the lives of
            those who are inside the building are placed at a high risk in the
            event of an emergency. At the same time building and industry safety
            and security is most important and need to be protected with
            surveillance system, access control, CCTV etc. ESSAB is always doing
            its level best to introduce and promote world’s latest technologies
            to the end users. As a part of that, organizing IFSSE is a regular
            event of ESSAB since 2014.
          </p>
          <p>
            IFSSE 2023 is the materializer of the dream of a journey towards
            safe and secure Bangladesh. This Expo will bring together the latest
            technology components from a globally unique range of products,
            major brand manufacturers, international newcomers and many others
            under one roof.
          </p>
          <p>
            I’m incredibly thankful to all the valued exhibitors and sponsors
            and all those involved, specially our co-partner Bangladesh Fire
            Service and Civil Defence. Also thankful to all the related
            departments and ministries of The Government of people’s Republic of
            Bangladesh.
          </p>
          <p>Thank you all.</p>
        </div>
      </div>
    </div>
  );
};

export default presidentsMessagePage;
