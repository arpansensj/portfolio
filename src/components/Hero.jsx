const Hero = () => {
  return (
    <div className="flex items-center justify-evenly pt-10 ">
      {/* <img src="/assets/bg.svg" alt="" className="absolute flex"/> */}
        <h1 className="text-[#42446E] font-bold text-5xl">
  Hi👋, <br/>My name is <br/> <span className="bg-gradient-to-r from-pink-500 to-sky-500 text-transparent bg-clip-text font-bold text-5xl">Arpan Sen</span> <br/> I build things for web.
</h1>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-full "><img className="h-object-cover rounded-full [300px] w-[300px]" src="/assets/Destroyer1tp.png" alt="" /></div>
    </div>
  )
}

export default Hero