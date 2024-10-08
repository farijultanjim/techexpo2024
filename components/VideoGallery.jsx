'use client'

import React from 'react'

const VideoCard = ({ videoUrl, title }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl flex flex-col h-full">
      <div className="w-full">
        {/* Embedded YouTube video */}
        <iframe 
          className="w-full h-48"
          src={videoUrl} 
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-center">{title}</h3>
      </div>
    </div>
  );
  

  const VideoGallery = () => {
    const videoData = [
      {
        videoUrl: "https://www.youtube.com/embed/6rjTMdi37Kc", 
        title: "Message from Niaz Ali Chisty, The Honorable President of ESSAB",
      },
      {
        videoUrl: "https://www.youtube.com/embed/6rjTMdi37Kc", 
        title: "Message from Brigadier General Md Main Uddin, Director General - Bangladesh Fire Service and Civil Defense",
      },
      {
        videoUrl: "https://www.youtube.com/embed/6rjTMdi37Kc", 
        title: "Message from Jim Pauley - The Honorable President of NFPA",
      },
    ];
  
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoData.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default VideoGallery;
  