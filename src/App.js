import React from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import HeroImage from "./components/HeroImage";
import Plan from "./components/Plan";
import Support from "./components/Support";
import About from "./components/About";
import Mission from "./components/Mission";
import Team from "./components/team/Team";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroImage />
      <Plan />
      <Support />
      <About />
      <Mission />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
