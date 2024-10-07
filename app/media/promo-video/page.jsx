import Banner from "@/components/Banner";
import React from "react";

const PromoVideoPage = () => {
  return (
    <>
      <Banner
        backgroundImage="/slider2.jpg"
        title="Promo Video"
        subtitle="Home | Promo Video"
      />
      <div className="container mx-auto px-4 py-20 ">
        <div className=" overflow-hidden grid place-items-center">
          <iframe
            className="aspect-video w-1/2"
            src={"https://www.youtube.com/embed/88do9dTM5Ac"}
            title={
              "Message from Niaz Ali Chisty, The Honorable President of ESSAB"
            }
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
};

export default PromoVideoPage;
