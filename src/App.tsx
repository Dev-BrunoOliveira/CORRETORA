import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carriers from "./components/Carriers";
import Advantages from "./components/Advantages";
import Coverages from "./components/Coverages";
import Simulation from "./components/Simulation";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const App: React.FC = () => {
  return (
    <div className="app-shell">
      <WhatsAppFloat />
      <Navbar />
      <main>
        <Hero />
        <Carriers />
        <Advantages />
        <Coverages />
        <Simulation />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
