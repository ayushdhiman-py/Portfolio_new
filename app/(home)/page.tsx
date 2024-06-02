import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { BackgroundBeams } from "./components/ui/background-beams";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function Page() {
  return (
    <div className="min-h-[400vh] bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto p-10 pt-0 relative z-10">
        <Navbar />
        <HeroSection />
      </div>
      <div className="max-w-7xl mx-auto p-0 mt-0">
        <Skills />
        <br />
        <Projects />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default Page;
