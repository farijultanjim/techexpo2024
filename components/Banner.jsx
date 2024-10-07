const Banner = ({ backgroundImage, title, subtitle }) => {
  return (
    <div className="relative w-full h-[150px] md:h-[200px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 shadow-text">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white shadow-text tracking-wider">{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
