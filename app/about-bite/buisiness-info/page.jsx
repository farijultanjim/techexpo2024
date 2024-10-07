// /about-bite/buisiness-info/page.jsx

import Banner from "@/components/Banner";
import React from "react";

const BusinessInfoPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="/slider2.jpg" 
        title="Buisness Info"
        subtitle="Home | Buisness Info"
      />
      <div>
        <div className="container mx-auto py-14 px-4 flex flex-col gap-4 text-xl text-justify">
          <p>
            Along with the development of Bangladesh’s economy and acceleration
            of its industrial safety security and construction the demand for
            fire safety and security products are highly growing. Today people
            are more aware and concern about their safety of life and properties
            as well as their building standard. Electronics Safety & Security
            Association of Bangladesh (ESSAB) would like to establish a golden
            platform between manufacturers and end users of this sector to
            display products, exchange technology, seek cooperation, and enhance
            understanding.
          </p>

          <p>
            “
            <span className="text-accent">
              Bangladesh International Techexpo 2024
            </span>
            ” is a 3 days event being held from 17-19 February 2024 at
            Bangabandhu International Conference Center (BICC), one of the most
            important and noted place in Dhaka, the capital of Bangladesh. This
            is the biggest and most popular show for fire, safety and security
            related products. Since 2014 the show is organizing and last year we
            experienced more than 8,000 visitors. This is an open platform to
            help, educate, aware and to contribute for overall development of
            the country. This expo is much popular for its importance and works
            an an important meeting place for manufacturer, dealers, system
            integrators, consultants, business people, regulatory bodies and
            users. This expo is highly influencing to get business leads and
            brand positioning. IFSSE is supported by the government of
            Bangladesh and many international well-known associations. So as a
            leading event of Bangladesh, IFSSE is evolving around your demands.
            It’s time to think strategically about your future.
          </p>
          <p>
            Exhibiting at trade shows can bring a number of benefits for growing
            business. You can meet directly with potential customers and
            generate leads. It is very effective medium for establishing and
            maintaining the customer relationship. Exhibiting at a trade show
            can be a great way to advertise to a target market and create brand
            awareness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoPage;
