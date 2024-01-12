import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import TechStack from "./components/TechStack";


function App() {
  return (
    <div className="">
      <Navbar />
      <Sidebar/>
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
