import Banner from "@/components/Banner";
import React from "react";

const FloorPlan = () => {
  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg"
        title="Floor Plan"
        subtitle="Home | Floor Plan"
      />

      <div className="container mx-auto py-14 px-4 flex flex-col gap-4 text-xl">
      Navigating through a tech  exhibit has  noway  been easier! Our detailed  bottom plan will guide you through the exhibition halls, showcasing all the  crucial areas like the Smart Experience Zone, Tech Corner, and Future Experience Zone. Plan your visit to make sure you do not miss any of the  instigative displays.
      </div>
    </div>
  );
};

export default FloorPlan;
 