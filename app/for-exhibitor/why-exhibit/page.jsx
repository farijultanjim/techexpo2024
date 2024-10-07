import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";

const WhyExhibitPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg"
        title="Why Exhibit"
        subtitle="Home | Why Exhibit"
      />

      <div className="container mx-auto py-14 px-4 text-xl text-justify flex flex-col gap-4 place-items-center">
        <p>
          Along with the development of Bangladesh’s economy and acceleration of
          its Industrial Safety security and construction the demand for fire
          products from awareness of Building/ industrial protection and the
          fire department continuously increases every year. Electronics Safety
          & Security Association of Bangladesh (ESSAB) would like to establish a
          golden platform between manufacturers and final users of this sector
          to display products, exchange technology, seek cooperation, and
          enhance understanding.
        </p>
        <Image src="/slider1.jpg" width={500} height={400} alt="why exhibit" className="my-4"/>
        <p>
          “International Fire, Safety & Security Expo 2024” is a 3 days event
          being held from 17th to 19th February 2024 at the most important and
          noted place in capital of the country BICC in Dhaka, Bangladesh.
          International Fire, Safety & Security Expo 2024 is an open platform to
          help educate, aware overall, the Expo will create an open platform to
          collaborate and build a community of support focusing on improving the
          workplace safety in Bangladesh.
        </p>
        <p>
          We hope this platform of “International Fire, Safety & Security Expo
          2024” will be instrumental to cover key issues in bringing out new
          trends and ideas highlighting key sectors in the field of fire and
          life safety for reviving your business potential to define your
          journey to this remarkable growth.It is also supported by many
          international well-known associations.
        </p>
      </div>
    </div>
  );
};

export default WhyExhibitPage;
