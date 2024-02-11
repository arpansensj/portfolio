const Cards = ({link, imgSrc, title}) => {
  return (
    <div className=" bg-white lg:w-[600px] lg:p-5 lg:shadow-xl shadow-xl lg:hover:shadow-2xl lg:rounded-3xl rounded-lg p-2">
      <a href={link} target='_blank'>
        <img
          className="lg:rounded-3xl rounded-lg border-2 border-bg-gradient-to-r from-pink-500 to-sky-500"
          src={imgSrc}
          alt=""
        />
        <h2 className=" text-[#42446E] text-center sm:text-xl font-bold p-2 text-lg">
          {title}
        </h2>
        <h3></h3>
      </a>
    </div>
  );
};

export default Cards;