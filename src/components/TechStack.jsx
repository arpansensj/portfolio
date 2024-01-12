import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const skillIcons = [
  {
    icon: "/assets/html5.svg",
  },
  {
    icon: "/assets/css.svg",
  },
  {
    icon: "/assets/react.svg",
  },
  {
    icon: "/assets/bootstrap.svg",
  },
  {
    icon: "/assets/tailwind.svg",
  },
  {
    icon: "/assets/javascript.svg",
  },
  {
    icon: "/assets/python.svg",
  },
  {
    icon: "/assets/c++.svg",
  },
  {
    icon: "/assets/mysql.svg",
  },
];
const TechStack = () => {
  return (
    <div id="tech-stack">
      <h1 className="text-[#42446E] lg:font-bold lg:text-3xl font-bold text-2xl text-center lg:pt-24 pt-12">
        My Tech Stack
      </h1>
      <h2 className="text-[#666] text-center lg:pt-6 pt-3 lg:text-2xl md:text-2xl text-xl">
        Technologies I've been working with recently
      </h2>
      <div>
        <ul className="flex justify-center items-center lg:pt-10 pt-5 lg:px-16 px-10 bg-white">
          <Swiper
            slidesPerView={6}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            modules={[Autoplay]}
            className=""
          >
            {skillIcons.map((item) => (
              <SwiperSlide key={item.index}>
                <li key={item.icon}>
                  <img src={item.icon} alt="" />
                </li>{" "}
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </div>
  );
};

export default TechStack;