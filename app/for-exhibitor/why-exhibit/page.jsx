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
        Displaying  at the Bangladesh International Tech Expo 2024 opens doors to unmatched  openings. Connect with thousands of implicit  guests,  mates, and investors in a space designed for growth and  invention. Gain exposure to the  rearmost trends in technology and  place your brand as a leader in the tech assiduity. Whether you are a  incipiency looking for visibility or an established company aiming to showcase your coming-  word products, this  exhibit is the perfect stage for you.
        </p>
        {/* <Image src="/slider1.jpg" width={500} height={400} alt="why exhibit" className="my-4"/> */}
       
      </div>
    </div>
  );
};

export default WhyExhibitPage;
