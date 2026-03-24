import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const videosRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.1 });

    videosRef.current.forEach(vid => {
      if (vid) observer.observe(vid);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="collage-container pt-0 px-0 md:px-4 overflow-hidden relative min-h-0 md:min-h-[90vh]">
      {/* Background Layer - Full Hero Video (Desktop & Mobile) */}
      <div className="absolute top-16 md:top-20 left-0 w-full h-[56.25vw] md:h-[calc(100%-5rem)] z-0 pointer-events-none overflow-hidden bg-black flex items-center justify-center">
        {/* The Burger Video occupying everything */}
        <video 
          autoPlay 
          loop 
          onEnded={(e) => { e.target.currentTime = 0; e.target.play(); }}
          muted 
          playsInline 
          className="absolute w-full h-full object-contain md:object-cover opacity-100 md:opacity-70 z-0" 
          src="/assets/carbonara-video.mp4" 
        />
        
        {/* Strong base gradient over the video for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 md:via-black/40 to-[#E60000]/40 md:to-[#E60000]/30 z-10 opacity-70 md:opacity-80"></div>
        
        {/* Extra intense highlight on the right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-[40%] md:w-[40%] bg-gradient-to-l from-[#E60000]/60 via-[#E60000]/10 to-transparent z-20 mix-blend-screen hidden md:block"></div>
        
        {/* Subtle glow/blur overlay to make it feel integrated */}
        <div className="absolute inset-0 backdrop-blur-[2px] z-30 opacity-30 hidden md:block"></div>
      </div>

      <div className="relative z-40 flex flex-col md:block w-full h-full pb-0 md:pb-0 pt-16 md:pt-32">
        
        {/* =======================
            DESKTOP LAYOUT 
            ======================= */}
        <div className="hidden md:block">
          <div className="absolute top-[75%] right-10 z-30 flex flex-col items-end select-none">
            <div className="flex text-[clamp(3rem,11vw,9rem)] leading-[0.85] tracking-[-0.05em] text-white text-outline flex-col items-end">
              <span>BRO ON</span>
              <span className="text-brandRed">FIRE</span>
            </div>

            {/* Relocated and Shrunk Big Orders Sticker */}
            <div className="mt-4 mr-2 bg-brandRed p-3 sticker-rotate-left shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:scale-105 transition-transform border-2 border-black font-impact z-40">
              <p className="text-white text-2xl text-center leading-none">BIG ORDERS?</p>
              <p className="text-black text-center text-[0.6rem] leading-none mt-1 font-bold">WANT TO FEED THE SQUAD?</p>
              <div className="bg-brandBlack text-white text-[0.5rem] text-center p-1 mt-1">CLICK HERE</div>
            </div>
            
            {/* Social Handle - Now under Big Orders */}
            <p className="mt-6 text-white font-impact text-2xl tracking-widest uppercase bg-black/70 px-4 py-2 w-fit">@broonfire_</p>
          </div>

          <div className="absolute left-[5%] top-[88%] z-20 flex flex-col items-center gap-4">
            <div className="bg-brandRed text-white p-4 rounded-full border-4 border-black sticker-rotate-left flex flex-col items-center justify-center w-40 h-40 text-center shadow-2xl">
              <span className="text-xl leading-none font-black font-impact">THE FLAME<br/>CLUB</span>
              <span className="text-[0.6rem] mt-2 leading-tight">JOIN THE BROHOOD<br/>AND GET BURNT</span>
              <a className="bg-brandBlack text-white text-xs px-3 py-1 mt-2 rounded" href="#">JOIN NOW</a>
            </div>

            {/* Collection 01 - Repositioned back in Group (Clean, without tape) */}
            <div className="bg-brandRed text-white inline-block px-4 py-2 text-2xl font-impact sticker-rotate-left border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20 relative">
              COLLECTION 01
            </div>

            {/* Final Upsized Carbonara Bliss Image - Full & Balanced Size */}
            <div className="relative mt-4 z-10 w-fit">
              <div className="duct-tape -top-3 -left-6 -rotate-12 bg-gray-400 opacity-90 block"></div>
              <video 
                ref={el => videosRef.current[0] = el}
                preload="none" 
                muted 
                loop 
                onEnded={(e) => { e.target.currentTime = 0; e.target.play(); }}
                playsInline
                className="w-48 h-auto transition-all border-4 border-white shadow-2xl -rotate-3 hover:rotate-0 duration-500 object-cover"
                src="/assets/carbonara_woman.MOV"
              />
              <div className="duct-tape -bottom-4 -right-6 rotate-6 bg-gray-500 block"></div>
            </div>

            {/* Yellow Sticker - Now under the Photo */}
            <div className="mt-4 ml-40 scale-110 rotate-12">
              <div className="bg-brandYellow rounded-none flex items-center justify-center border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-3">
                <span className="text-black text-center font-black leading-tight uppercase font-impact text-xs">CERTIFIED<br/>HOT AF</span>
              </div>
            </div>
          </div>

          
          {/* Old Handle and Image Container Removed */}

        </div>

        {/* =======================
            MOBILE LAYOUT
            ======================= */}
        <div className="md:hidden flex w-full relative items-center justify-center">
          
          {/* Container scaled exactly to 16:9 aspect ratio bounding box of the background video */}
          <div className="relative w-[100vw] h-[56.25vw] max-h-[100vh]">
            
            {/* Mobile Left Group - Polaroid and badges */}
            <div className="absolute left-[4%] top-[10%] z-20 flex flex-col items-start gap-1 w-[45%]">
              <div className="bg-brandRed text-white p-1 rounded-full border border-black sticker-rotate-left flex flex-col items-center justify-center w-14 h-14 text-center shadow-md">
                <span className="text-[0.4rem] leading-none font-black font-impact uppercase">THE FLAME<br/>CLUB</span>
                <span className="text-[0.2rem] mt-0.5 leading-tight uppercase font-bold text-black">JOIN THE<br/>BROHOOD</span>
              </div>

              {/* Collection 01 - Mobile Scale */}
              <div className="bg-brandRed text-white inline-block px-1 py-0.5 mt-0.5 text-[0.4rem] font-impact sticker-rotate-left border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] z-20 relative">
                COLLECTION 01
              </div>

              {/* Mobile Video Polaroid */}
              <div className="relative mt-1 z-10 w-fit ml-2">
                <div className="absolute -top-1 -left-1 -rotate-12 bg-gray-400 opacity-90 shadow-[1px_1px_1px_rgba(0,0,0,0.3)] z-[5]" style={{ width: '28px', height: '6px' }}></div>
                <video 
                  ref={el => videosRef.current[1] = el}
                  preload="none" 
                  muted 
                  loop 
                  onEnded={(e) => { e.target.currentTime = 0; e.target.play(); }}
                  playsInline
                  className="w-24 h-auto transition-all border border-white shadow-md -rotate-3 object-cover"
                  src="/assets/carbonara_woman.MOV"
                />
                <div className="absolute -bottom-1 -right-1 rotate-6 bg-gray-500 shadow-[1px_1px_1px_rgba(0,0,0,0.3)] z-[5]" style={{ width: '28px', height: '6px' }}></div>
              </div>

              {/* Yellow Sticker */}
              <div className="mt-1 ml-4 scale-90 rotate-12">
                <div className="bg-brandYellow rounded-none flex items-center justify-center border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] p-0.5">
                  <span className="text-black text-center font-black leading-tight uppercase font-impact text-[0.3rem]">CERTIFIED<br/>HOT AF</span>
                </div>
              </div>
            </div>

            {/* Mobile Right Group - Title and Orders */}
            <div className="absolute top-[20%] right-[4%] z-30 flex flex-col items-end select-none w-[48%]">
              <div className="flex text-[14vw] leading-[0.85] tracking-[-0.05em] text-white text-outline flex-col items-end">
                <span>BRO ON</span>
                <span className="text-brandRed">FIRE</span>
              </div>

              {/* Scaled Big Orders Sticker */}
              <div className="mt-2 mr-0 bg-brandRed p-1 sticker-rotate-left shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-black font-impact z-40 w-fit">
                <p className="text-white text-[0.5rem] text-center leading-none uppercase">BIG ORDERS?</p>
                <div className="bg-brandBlack text-white text-[0.25rem] text-center p-0.5 mt-0.5 uppercase">CLICK HERE</div>
              </div>
              
              {/* Mobile Social Handle */}
              <p className="mt-2 text-white font-impact text-[0.5rem] tracking-widest uppercase bg-black/70 px-1 py-0.5 w-fit">@broonfire_</p>
            </div>
            
          </div>
        </div>

      </div>
    </main>
  );
};

export default Hero;
