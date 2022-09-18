import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualifications from "./components/qualifications/Qualifications";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

// styling
import "./App.css";
import ScrollUp from "./components/scrollup/Scrollup";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
