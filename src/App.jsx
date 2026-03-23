import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuTicker from './components/MenuTicker';
import Menu from './components/Menu';
import About from './components/About';
import OurArsenal from './components/OurArsenal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalleryFilters from './components/GalleryFilters';
import VideoScrollWrapper from './components/VideoScrollWrapper';

function App() {
  return (
    <div className="app-container bg-black min-h-screen text-white font-impact overflow-x-clip">
      <Navbar />
      <Hero />
      <MenuTicker />
      <OurArsenal />
      <VideoScrollWrapper>
        <About />
        <Menu />
        <Contact />
      </VideoScrollWrapper>
      <GalleryFilters />
      <Footer />
    </div>
  );
}

export default App;
