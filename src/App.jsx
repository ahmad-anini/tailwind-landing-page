import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CustomerLogos from "./components/CustomerLogos";
import SocialProof from "./components/SocialProof";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <CustomerLogos />
      <Features />
      <SocialProof />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
