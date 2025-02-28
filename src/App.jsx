import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero/HeroSection";
import Skills from "./components/skills/Skills";
import WorkExperience from "./components/workExperience/WorkExperience";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <section id="home">
          <HeroSection />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="work-experience">
          <WorkExperience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
