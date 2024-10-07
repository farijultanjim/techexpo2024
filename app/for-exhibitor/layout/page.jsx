import Banner from "@/components/Banner";
import React from "react";

const LayoutPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg"
        title="Layout"
        subtitle="Home | Layout"
      />

      <div className="container mx-auto py-14 px-4 flex flex-col gap-4">
        Coming Soon....
      </div>
    </div>
  );
};

export default LayoutPage;
