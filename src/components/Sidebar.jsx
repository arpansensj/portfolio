const Sidebar = () => {
  return (
    <div className="fixed lg:top-1/2 max-lg:bottom-0 left-0 z-10 transform -translate-y-1/2 lg:pl-4 pl-1">
      <a href="https://www.linkedin.com/in/arpan-sen-ba344686">
        <img
          className="mx-auto lg:w-10 lg:h-10 w-6 h-6 lg:mb-4 mb-2 cursor-pointer bg-white"
          src="/assets/linkedin.png"
          alt=""
        />
      </a>
      <a href="https://github.com/arpansensj/">
        <img
          className="mx-auto lg:w-12 lg:h-12 w-8 h-8 lg:mb-4 cursor-pointer bg-white rounded-full"
          src="/assets/github.png"
          alt=""
        />
      </a>
    </div>
  );
};

export default Sidebar;