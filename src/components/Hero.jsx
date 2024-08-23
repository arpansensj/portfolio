const Hero = () => {
  return (
    <div className="flex items-center justify-evenly pt-10 flex-wrap gap-8 lg:gap-12">
      <h1 className="bg-white text-[#42446E] font-bold lg:text-5xl text-3xl max-w-[600px]">
        Hi 👋, <br />
        My name is <br />{" "}
        <span className="bg-gradient-to-r from-pink-500 to-sky-500 text-transparent bg-clip-text font-bold">
          Arpan Sen
        </span>{" "}
        <br /> I build things for web.
      </h1>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md transform scale-105"></div>
        <div className="relative">
          <img
            className="h-auto w-[200px] lg:w-[300px] rounded-full object-cover border-4 border-white shadow-lg"
            src="/assets/Destroyer1tp.png"
            alt="Arpan Sen"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
