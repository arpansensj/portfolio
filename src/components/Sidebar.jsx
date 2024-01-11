const Sidebar = () => {
  return (
    <div className ="fixed top-1/2 left-0 w-50 z-10 transform -translate-y-1/2 pr-5">
        <a href="https://www.linkedin.com/in/arpan-sen-ba344686">
        <img className = "mx-auto w-10 mb-4 cursor-pointer" src="/assets/linkedin.png" alt="" />
        </a><a href="https://github.com/arpansensj/">
        <img className = "mx-auto w-12 mb-4 cursor-pointer" src="/assets/github.png" alt="" />
        </a>
        
    </div>
  )
}

export default Sidebar