import Navbar from "./Components/Navbar"
import Intro from "./Components/Intro"
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Social from "./Components/Social";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[#121212]">
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
