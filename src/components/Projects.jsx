import Cards from "./Cards";

const Projects = () => {
  return (
    <div className="" id="Projects">
      <h2 className="text-[#42446E] pt-20 lg:font-bold lg:text-3xl font-bold text-2xl text-center lg:pt-28">
        Projects
      </h2>
      <h3 className="text-[#666] text-center lg:pt-6 pt-3 lg:text-2xl md:text-2xl text-xl">
        Thing I've built so far
      </h3>
      <div className="flex justify-center items-center flex-wrap lg:pt-4 pt-2 p-2 gap-4">
        <Cards 
          link="https://trip-booking.vercel.app/"
          imgSrc="/assets/Project1.png"
          title="Trip Booking Page"
        />
        <Cards 
          link="https://film-directory.vercel.app/"
          imgSrc="/assets/Project2.png"
          title="Film Directory using API"
        />
      </div>
    </div>
  );
};

export default Projects;