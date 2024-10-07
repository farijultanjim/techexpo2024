// /about-bite/organizer/page.jsx

import Banner from "@/components/Banner";
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
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-700">About ESSAB</h2>
          <p>
            Established in 2013, the Electronics Safety & Security Association
            of Bangladesh (ESSAB), a non-profit trade association, has evolved
            into the largest professional trade association in the Bangladesh
            with the purpose of representing, promoting and enhancing the growth
            and professional development of the electronics life safety,
            security, and integrated systems industry. In cooperation with a
            local associations, ESSAB provides government advocacy and delivers
            timely information, professional development tools, products and
            services that members use to grow and prosper their businesses.
          </p>
          <p>
            A positive advocate for the electronics life safety, security, and
            integrated systems industry, ESSAB works at all levels to increase
            awareness about the value of the products and services members
            provide. The association supports new technology and applications
            with customized and relevant training and proactively promotes the
            industry through consumer awareness activities supported by trade
            and media relations programs. ESSAB also supports legislation and
            regulations that enhance public safety.
          </p>
          <p>
            Guided by strong leadership and a commitment to the advancement of
            technology and professionalism, ESSAB is on a strong foundation that
            includes financial stability and recognition as the only
            professional trade association that works to address issues
            important to the well-being of the industry.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-700">
            Who are our members
          </h2>
          <h3 className="text-xl font-bold text-gray-700">
            Our members are business firms who are belong to below areas of
            business:
          </h3>
          <p>
            Fire Detection and Protection System <br />
            CCTV Surveillance System <br />
            Access Control System <br />
            Building Management System <br />
            Public Address System <br />
            Rescue and Disaster Management
          </p>
        </div>
      </div>
    </div>
  );
};

export default organizerPage;
