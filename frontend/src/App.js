import "./App.css";
import React from "react";
import useReveal from "./hooks/useReveal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import HowItWorks from "./components/HowItWorks";
import WhatWeDo from "./components/WhatWeDo";
import Projects from "./components/Projects";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Marquee from "./components/Marquee";
import Join from "./components/Join";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  useReveal();
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <HowItWorks />
        <WhatWeDo />
        <Projects />
        <Features />
        <Testimonials />
        <FAQ />
        <Marquee />
        <Join />
        <Blog />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
