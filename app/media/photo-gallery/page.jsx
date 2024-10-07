import Banner from "@/components/Banner";
import PhotoGallery from "@/components/PhotoGallery";
import React from "react";

const PhotoGalleryPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg"
        title="Photo Gallery"
        subtitle="Explore our collection of stunning images"
      />
      <PhotoGallery />
    </div>
  );
};

export default PhotoGalleryPage;
