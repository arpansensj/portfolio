const headerData = {
  logo: {src: "/assets/nobglogo.png",alt: "Logo"},
  navigation: [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Tech Stack", link: "#tech-stack" },
    { text: "Projects", link: "/projects" },
    { text: "Contact", link: "/contact" }
  ]
};

const Navbar = () => {
  return (
    <nav className=" text-grey-800 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center justify-center">
        <img src={headerData.logo.src} alt={headerData.logo.alt} className="w-20 h-20 rounded-full mr-4" />
        <h1 className="text-2xl font-bold">{headerData.title}</h1>
      </div>
      <ul className="flex items-center space-x-6">
        {headerData.navigation.map((item) => (
          <li key={item.text} className="hover:text-gray-300">
            <a href={item.link} className="px-3 py-2 rounded-md font-medium">{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;