"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Card = ({ image, title, description, buttons }) => (
  <div className="bg-primary  rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl flex flex-col h-full">
    <Image
      src={image}
      alt={title}
      height={200}
      width={300}
      className=" w-full object-cover "
    />
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>
      <div className="mt-auto flex space-x-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className={`px-4 py-2 rounded-full flex items-center text-sm font-medium transition-colors duration-300 ${
              button.primary
                ? "bg-accent text-white hover:bg-accent/80"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const Featured = () => {
  const router = useRouter();
  const swiperRef = useRef(null);

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

  const cardData = [
    {
      image: "/slider2.jpg",
      title: "Exhibit",
      description:
        "A golden platform for manufacturers and end users. Perfect place to showcase your products & latest technologies.",
      buttons: [
        {
          label: "Learn More",
          onClick: () => router.push("/page1"),
          primary: true,
        },
        {
          label: "Download PDF",
          onClick: () => {
            const link = document.createElement("a");
            link.href = "/file1.pdf";
            link.download = "file1.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          },
        },
      ],
    },
    {
      image: "/slider3.jpg",
      title: "Visitor",
      description:
        "Come and meet more than 100 brands & exhibitors from all around the world. Explore latest products, technologies and most suitable life safety solution for your building and industries.",
      buttons: [
        {
          label: "Register Now",
          onClick: () => router.push("/register"),
          primary: true,
        },
      ],
    },
    {
      image: "/slider2.jpg",
      title: "Exhibit",
      description:
        "A golden platform for manufacturers and end users. Perfect place to showcase your products & latest technologies.",
      buttons: [
        {
          label: "Learn More",
          onClick: () => router.push("/page1"),
          primary: true,
        },
        {
          label: "Download PDF",
          onClick: () => {
            const link = document.createElement("a");
            link.href = "/file1.pdf";
            link.download = "file1.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          },
        },
      ],
    },
    {
      image: "/slider2.jpg",
      title: "Exhibit",
      description:
        "A golden platform for manufacturers and end users. Perfect place to showcase your products & latest technologies.",
      buttons: [
        {
          label: "Learn More",
          onClick: () => router.push("/page1"),
          primary: true,
        },
        {
          label: "Download PDF",
          onClick: () => {
            const link = document.createElement("a");
            link.href = "/file1.pdf";
            link.download = "file1.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          },
        },
      ],
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Swiper
        ref={swiperRef}
          slidesPerView={1}
          spaceBetween={20}
          modules={[Pagination, Navigation]}
          zoom={{
            maxRatio: 3,
            minRatio: 1,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <Card {...card} />
            </SwiperSlide>
          ))}

          <div
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-accent p-2 rounded-full"
            onClick={handlePrev}
          >
            <Image src="/left-arrow.png" alt="left" width={20} height={20} />
          </div>
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-accent p-2 rounded-full"
            onClick={handleNext}
          >
            <Image src="/right-arrow.png" alt="right" width={20} height={20} />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Featured;
