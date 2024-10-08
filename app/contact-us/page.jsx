import Banner from "@/components/Banner";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg"
        title="Contact Us"
        subtitle="Home | Contact Us"
      />

      <div className="container mx-auto py-14 px-4 flex flex-col gap-4 text-xl">
        <div>
          <p>
            If you have any questions or need more information about the
            Bangladesh International Tech Expo 2024, we’re here to help! Whether
            you’re an exhibitor, visitor, or media professional, feel free to
            reach out to us.
          </p>

          <p className="mt-4 text-lg">
            <span className="font-semibold">Contact Information</span> <br />
            Email: amamunds@gmail.com <br />
            Phone: +8801727343953 <br />
            Office Address: House # 45, Road # 11, Niketan, Gulshan
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
