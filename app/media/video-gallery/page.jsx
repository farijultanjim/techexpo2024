import Banner from "@/components/Banner";
import VideoGallery from "@/components/VideoGallery";
import React from "react";

const VideoGalleryPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg"
        title="Video Gallery"
        subtitle="Home | Video Gallery"
      />
      <VideoGallery />
    </div>
  );
};

export default VideoGalleryPage;
