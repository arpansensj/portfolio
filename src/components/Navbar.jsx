const headerData = {
  logo: { src: "/assets/nobglogo.png", alt: "Logo" },
  navigation: [
    { text: "Home", link: "/" },
    { text: "Tech Stack", link: "#tech-stack" },
    { text: "Projects", link: "#Projects" },
    { text: "Contact", link: "#contact" },
  ],
};

const Navbar = () => {
  return (
    <nav
      className=" text-grey-800 lg:py-4 lg:px-6 p-2 flex items-center justify-between sticky top-0 animate-flip-down animate-once animate-ease-in bg-white
    "
    >
      <div>
        <img
          src={headerData.logo.src}
          alt={headerData.logo.alt}
          className="lg:w-20 lg:h-20 w-14 h-14 rounded-full mr-4"
        />
      </div>
      <ul className="flex items-center gap-4 lg:6">
        {headerData.navigation.map((item) => (
          <li key={item.text} className="">
            <a
              href={item.link}
              className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-sky-500 lg:px-3 lg:py-2 rounded-full font-medium hover:text-white text-sm lg:text-lg"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;