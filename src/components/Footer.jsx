import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brandBlack border-t border-white/10 p-10 md:p-20 text-white uppercase selection:bg-brandRed selection:text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
        <div>
          <h2 className="text-6xl md:text-8xl text-outline mb-4">BRO ON<br/><span className="text-brandRed">FIRE</span></h2>
          <p className="font-sans lowercase text-white/40 max-w-xs font-bold italic">real burgers. real heat. no compromises. founded in a backyard, fueled by the street.</p>
        </div>
        
        <div className="flex flex-col gap-8 md:text-right md:items-end">
          <nav className="flex flex-col gap-2 text-3xl">
            <a className="hover:text-brandRed" href="#">BURGERS /</a>
            <a className="hover:text-brandRed" href="#">SIDES /</a>
            <a className="hover:text-brandRed" href="#">MERCH /</a>
            <a className="hover:text-brandRed" href="#">STORES /</a>
          </nav>
          
          <div className="flex gap-4 mt-8">
            <a className="text-xl border-2 border-white px-4 py-2 hover:bg-white hover:text-black transition-all" href="#">IG</a>
            <a className="text-xl border-2 border-white px-4 py-2 hover:bg-white hover:text-black transition-all" href="#">TT</a>
            <a className="text-xl border-2 border-white px-4 py-2 hover:bg-white hover:text-black transition-all" href="#">TW</a>
          </div>
          
          <div className="mt-10 flex gap-6 text-[10px] tracking-widest text-white/30 font-sans font-bold">
            <a href="#">LEGAL STUFF</a>
            <a href="#">COOKIES</a>
            <a href="#">PRESS KIT</a>
            <div className="border border-white/20 px-2 rounded-full">EN / ES</div>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center font-sans text-[10px] tracking-widest text-white/20">
        © 2024 BRO ON FIRE. ALL RIGHTS RESERVED. BURNING SINCE 2020.
      </div>
    </footer>
  );
};

export default Footer;
