// components/Hero.jsx
"use client";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Countdown from "./Countdown"; // Import the new Countdown component

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const images = ["/slider1.jpg", "/slider2.jpg", "/slider3.jpg"];

const Hero = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-screen w-full">
      {domLoaded && (
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay, EffectFade]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          loop={true}
          className="h-full w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Hero image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4 sm:px-20">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
                    Bangladesh International Techexpo 2024
                  </h1>
                  <p className="md:text-2xl mb-4 text-orange-400 font-semibold">
                    See you on 09<sup>th</sup> December 2024
                  </p>
                  <div className="grid place-items-center">
                    <Countdown targetDate="2024-12-09T00:00:00" />
                  </div>
                  <button className="bg-accent text-white px-14 py-2 rounded-full text-lg font-semibold hover:bg-accent/80 transition-all hidden">
                    Register Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={handlePrev}
          >
            <Image src="/left-arrow.png" alt="left" width={24} height={24} />
          </div>
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={handleNext}
          >
            <Image src="/right-arrow.png" alt="right" width={24} height={24} />
          </div>
        </Swiper>
      )}
    </div>
  );
};

export default Hero;