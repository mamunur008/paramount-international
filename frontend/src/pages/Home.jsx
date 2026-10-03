import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import HowItWorks from "../components/HowItWorks";
import WhatWeDo from "../components/WhatWeDo";
import Projects from "../components/Projects";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Marquee from "../components/Marquee";
import Join from "../components/Join";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <div data-testid="home-page">
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
      <div className="h-[50px] lg:h-[100px]" />
      <Blog />
    </div>
  );
}
