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
        {/* {buttons.map((button, index) => (
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
        ))} */}
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
      image: "/featuredImages/launching.jpg",
      title: "Launching Program",
      description:
        "The delay is over! Join us on December 9, 2024, at BICC's Hall of Fame for the Bangladesh International Tech Expo 2024 grand launch.  The most awaited event of the time is then!  It’s time to step into a world of  measureless  invention, where the future of tech begins!  Let’s celebrate the  launch of  commodity extraordinary!",
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
      image: "/featuredImages/brand.jpg",
      title: "BRAND Exertion Platform",
      description:
        "Meet the Stars Behind the Tech! Join us for exclusive brand  ministers, celebrity engagements, and top media content only at the Bangladesh International Tech Expo 2024. Do n’t miss the future of tech, right then!",
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
      image: "/featuredImages/entertainment.jpg",
      title: "Entertainment",
      description:
        "Along with groundbreaking  inventions, enjoy 6 days of musical musicales featuring top bands and solo artists every day. Let’s move' Towards the Vision of Tech Bangladesh' together!",
      buttons: [
        {
          label: "Register Now",
          onClick: () => router.push("/register"),
          primary: true,
        },
      ],
    },
    {
      image: "/featuredImages/raffle.jpg",
      title: "Raffle Draw",
      description:
        "Your ticket is  further than just entry it’s your chance to win amazing prizes every single day!  Not just for tech  suckers! snare your fair ticket and join the  diurnal  truck draw for a chance to win fantastic prizes!",
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
      image: "/featuredImages/5gzone.jpg",
      title: "Future Experience Zone",
      description:
        "Ready to  witness the future of Smart Bangladesh? Enter the 5G unborn Experience Zone at the Bangladesh International Tech Expo 2024 and discover how technology is casting our future!",
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
      image: "/featuredImages/seminar.jpg",
      title: "Seminars",
      description:
        "Whether you’re fascinated by AI or curious about the impact of Blockchain, the Bangladesh International Tech Expo 2024 has  commodity just for you! Join 10 specialized  forums  led by assiduity experts and take a deep dive into the future of tech.",
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
