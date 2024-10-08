"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Card = ({ image, title, description, buttons }) => (
  <div className="bg-primary  rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl flex flex-col h-full">
    <Image
      src={image}
      alt={title}
      height={200}
      width={300}
      className=" w-full object-cover"
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

const PhotoGallery = () => {
  const router = useRouter();

  const cardData = [
    {
      image: "/slider2.jpg",
      title: "Exhibit",
      description:
        "A golden platform for manufacturers and end users. Perfect place to showcase your products & latest technologies and interact with clients from Government, Trade, Industry and Service Sectors.",
      buttons: [
        {
          label: "Learn More",
          onClick: () => router.push("/page1"), // Redirect to details page
          primary: true,
        },
        {
          label: "Download PDF",
          onClick: () => {
            const link = document.createElement("a");
            link.href = "/file1.pdf"; // Path to your PDF
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
          onClick: () => router.push("/register"), // Redirect to registration page
          primary: true,
        },
      ],
    },
    {
      image: "/slider2.jpg",
      title: "Seminar",
      description:
        "Country's biggest showcase for fire, safety and security sector, organized by Electronic Safety and Security Association of Bangladesh (ESSAB), in association with Bangladesh Fire Service & Civil Defense and National Fire Protection.",
      buttons: [
        {
          label: "Learn More",
          onClick: () => router.push("/page1"), // Redirect to RSVP page
          primary: true,
        },
        {
          label: "View Attendees",
          onClick: () => router.push("/attendees"), // Redirect to attendees list
        },
      ],
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
