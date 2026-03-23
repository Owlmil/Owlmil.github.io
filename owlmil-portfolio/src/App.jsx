import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-[#8cb561] min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}

export default App;
