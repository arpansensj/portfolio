import Cards from "./Cards"

const Projects = () => {
  return (
    <div className="h-[650px]" id="Projects">
      <h2 className="text-[#42446E] font-bold text-3xl text-center pt-24">Projects</h2>
        <h3 className="text-[#666] text-center pt-6 text-2xl pb-4 ">Thing I've built so far</h3>
        <div className="flex justify-center items-center flex-wrap pt-4">
        <Cards/>
        </div>
    </div>

  )
}

export default Projects