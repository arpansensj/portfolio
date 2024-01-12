const Hero = () => {
  return (
    <div className="flex items-center justify-evenly pt-10 flex-wrap gap-4">
      <h1 className=" bg-white text-[#42446E] font-bold lg:text-5xl text-3xl">
        Hi👋, <br />
        My name is <br />{" "}
        <span className="bg-gradient-to-r from-pink-500 to-sky-500 text-transparent bg-clip-text font-bold">
          Arpan Sen
        </span>{" "}
        <br /> I build things for web.
      </h1>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-full ">
        <img
          className="h-object-cover rounded-full lg:w-[300px] w-[200px]"
          src="/assets/Destroyer1tp.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;