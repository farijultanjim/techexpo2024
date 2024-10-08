import React from 'react';

const HomeBanner = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Video Section */}
          <div className="w-full md:w-1/2">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/6rjTMdi37Kc"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
         
          {/* Content Section */}
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4">Discover BITE 2024</h2>
            <p className="text-gray-300 mb-4">
              BITE 2024 brings together innovators, technologists, and industry leaders to explore the future of technology and its impact on our world.
            </p>
            <p className="text-gray-300 mb-4">
              Join us for engaging presentations, hands-on workshops, and networking opportunities that will inspire and empower you to drive innovation in your field.
            </p>
            <button className="bg-accent text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-accent/80 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;