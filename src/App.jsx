import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import OurArsenal from './components/OurArsenal';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container bg-black min-h-screen text-white font-impact overflow-x-hidden">
      <Navbar />
      <Hero />
      <OurArsenal />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
