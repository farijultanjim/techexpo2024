// components/Footer.jsx

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary ">
      {/* upper footer */}
      <div className="flex flex-col md:flex-row text-white container mx-auto py-6 justify-between px-4 space-y-10">
        <div className="flex-col space-y-4">
          <div className="text-2xl font-semibold ">
            Contact Us
            <div className="h-2 w-20 border-b-2 border-accent"></div>
          </div>
          <p>
            <span></span> +88 02 222226710
          </p>
          <p>
            <span></span>Email: info@essab.org.bd, expo@essab.org.bd
          </p>
          <p>
            <span></span>224/1, Tropical NMG Tower (14th floor), Eskaton Road,
            Dhaka-1000
          </p>
        </div>

        <div>
          <Image src="/bicc.jpeg" alt="logo" width={600} height={200} />
          <p className="mt-1 text-sm sm:text-lg">
            Venue: Bangabandhu International Conference Center, Dhaka
          </p>
        </div>
      </div>

      {/* bottom footer */}
      <div className="bg-secondary text-xs sm:text-sm">
        <div className=" container mx-auto flex justify-between items-center py-2 px-4">
          <p>Copyright BITE 2024 All Rights Researved by</p>
          <p>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
          <p>
            Developed By {" "}
            <Link href="http://www.rrad.ltd" pasHref={true} className="text-red-500 font-semibold hover:underline">
              RRAD
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
