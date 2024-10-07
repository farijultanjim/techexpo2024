'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Sponsor = ({ sponsors, direction = 'left' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (isHovered) {
      marquee.style.animationPlayState = 'paused';
    } else {
      marquee.style.animationPlayState = 'running';
    }
  }, [isHovered]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={marqueeRef}
        className={`flex ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
      >
        {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={index} className="flex-shrink-0 flex items-center mx-8">
            <Image
              src={sponsor.imageUrl}
              alt={sponsor.name}
              width={100}
              height={100}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


const SponsorMarquee = ({ sponsors }) => {
    return (
      <div className=" py-10">
        <div className="w-full mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Our Sponsors
          </h2>
          <div className="space-y-4">
            <Sponsor sponsors={sponsors} direction="left" />
            <Sponsor sponsors={sponsors} direction="right" />
            <Sponsor sponsors={sponsors} direction="left" />
          </div>
        </div>
      </div>
    );
  };

export default SponsorMarquee;