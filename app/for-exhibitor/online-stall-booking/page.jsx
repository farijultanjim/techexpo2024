"use client";

import { useState } from "react";
import Banner from "@/components/Banner";
import PriceModal from "@/components/PriceModal";

const OnlineStallBooking = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackageDetails, setSelectedPackageDetails] = useState(null); 

  const handleCallForPrice = (packageDetails) => {
    setSelectedPackageDetails(packageDetails); 
    setModalOpen(true); 
  };

  const stallData = [
    {
      package: "Silver",
      size: "10x10",
      sqft: 100,
      location: "Zone A",
      nos: 5,
      tariff: "Available",
    },
    {
      package: "Gold",
      size: "15x10",
      sqft: 150,
      location: "Zone B",
      nos: 3,
      tariff: "Not Available",
    },
    {
      package: "Platinum",
      size: "20x10",
      sqft: 200,
      location: "Zone C",
      nos: 2,
      tariff: "Available",
    },
    // Add more rows here...
  ];

  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg"
        title="Online Stall Booking"
        subtitle="Home | Online Stall Booking"
      />

      <div className="container mx-auto py-14 px-4 flex flex-col gap-4 text-xl">



        <p>
          Secure your spot at the most awaited tech event of the time! Our online cube reserving system is fast and simple, allowing you to choose from a variety of spaces that fit your requirements. Don’t miss the chance to showcase your inventions to a massive audience of tech enthusiasts and industry professionals. Book your stall today and make your mark in Bangladesh&apos;s tech journey.
        </p>
        
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">Package</th>
              <th className="py-2 px-4">Size (Feet)</th>
              <th className="py-2 px-4">Sqft</th>
              <th className="py-2 px-4">Location</th>
              <th className="py-2 px-4">Nos</th>
              <th className="py-2 px-4">Tariff (USD)</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {stallData.map((stall, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{stall.package}</td>
                <td className="py-2 px-4">{stall.size}</td>
                <td className="py-2 px-4">{stall.sqft}</td>
                <td className="py-2 px-4">{stall.location}</td>
                <td className="py-2 px-4">{stall.nos}</td>
                <td className="py-2 px-4">
                  {stall.tariff === "Available" ? (
                    <button
                      className="bg-primary text-white px-4 py-2 rounded"
                      onClick={() => handleCallForPrice(stall)} // Pass the current stall data
                    >
                      Call for Price
                    </button>
                  ) : (
                    ""
                  )}
                </td>
                <td className="py-2 px-4">{stall.tariff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <PriceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packageDetails={selectedPackageDetails} // Pass selected package details to modal
      />
    </div>
  );
};

export default OnlineStallBooking;
