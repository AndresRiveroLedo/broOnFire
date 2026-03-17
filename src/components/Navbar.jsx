import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled more than 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-brandBlack/70 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
      <div className="px-6 md:px-8 py-3 md:py-5 flex justify-between items-center text-white">
        
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold tracking-tighter cursor-pointer flex-shrink-0">
          BRO ON FIRE<span className="text-brandRed">™</span>
        </div>

        {/* Central Menu (Desktop) */}
        <nav className="hidden md:flex items-center justify-center gap-12 font-semibold tracking-wider text-sm flex-1">
          <a href="#arsenal" className="hover:text-brandRed transition-colors">MENU</a>
          <a href="#about" className="hover:text-brandRed transition-colors">ABOUT</a>
          <a href="#locations" className="hover:text-brandRed transition-colors">LOCATIONS</a>
        </nav>

        {/* Right Action & Mobile Toggle */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <a 
            className="hidden md:flex order-btn-glow bg-brandRed text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-bold tracking-wider hover:bg-white hover:text-brandRed transition-all duration-300 text-sm md:text-base" 
            href="#"
          >
            ORDER NOW
          </a>
          
          {/* Hamburger Menu Toggle (Mobile) */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brandBlack/95 border-t border-gray-800 absolute top-full left-0 w-full flex flex-col items-center py-6 gap-6 shadow-xl">
          <a onClick={() => setIsMobileMenuOpen(false)} href="#arsenal" className="text-white font-semibold tracking-wider hover:text-brandRed transition-colors text-lg">MENU</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#about" className="text-white font-semibold tracking-wider hover:text-brandRed transition-colors text-lg">ABOUT</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#locations" className="text-white font-semibold tracking-wider hover:text-brandRed transition-colors text-lg">LOCATIONS</a>
          <a 
            onClick={() => setIsMobileMenuOpen(false)}
            className="sm:hidden order-btn-glow bg-brandRed text-white px-8 py-3 mt-4 rounded-md font-bold tracking-wider hover:bg-white hover:text-brandRed transition-all duration-300" 
            href="#"
          >
            ORDER NOW
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
