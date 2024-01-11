const skillIcons = [
    {
        icon: "/assets/html5.svg"
    },
    {
        icon: "/assets/css.svg"
    },
    {
        icon: "/assets/react.svg"
    },
    {
        icon: "/assets/bootstrap.svg"
    },
    {
        icon: "/assets/tailwind.svg"
    },
    {
        icon: "/assets/javascript.svg"
    },
    {
        icon: "/assets/python.svg"
    },
    {
        icon: "/assets/c++.svg"
    },
    {
        icon: "/assets/mysql.svg"
    },
]
const TechStack = () => {
  return (
    <div id="tech-stack">
        <h1 className="text-[#42446E] font-bold text-3xl text-center pt-24">My Tech Stack</h1>
        <h2 className="text-[#666] text-center pt-6 text-2xl ">Technologies I've been working with recently</h2>
        <div>
            <ul  className="flex justify-center items-center gap-8 pt-10">
            {skillIcons.map((item) => (
                <li key={item.icon}>
                    <img src={item.icon} alt="" />
                </li>
                ))}
            </ul>
        </div>
        


    </div>
  )
}

export default TechStack