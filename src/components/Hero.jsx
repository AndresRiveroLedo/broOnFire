import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <main className="collage-container pt-0 px-4 overflow-hidden relative min-h-[90vh]">
      {/* Background Layer - Full Hero Video (Desktop Only) */}
      <div className="absolute top-20 left-0 w-full h-[calc(100%-5rem)] z-0 pointer-events-none overflow-hidden bg-black hidden md:block">
        {/* The Burger Video occupying everything on desktop, starting below navbar */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-70 z-0" 
          src="/assets/carbonara-video.mp4" 
        />
        
        {/* Strong base gradient over the video for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-[#E60000]/30 z-10 opacity-80"></div>
        
        {/* Extra intense highlight on the right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-gradient-to-l from-[#E60000]/60 via-[#E60000]/10 to-transparent z-20 mix-blend-screen"></div>
        
        {/* Subtle glow/blur overlay to make it feel integrated */}
        <div className="absolute inset-0 backdrop-blur-[2px] z-30 opacity-30"></div>
      </div>

      {/* Mobile background (Solid black) - Also starting below top bar area */}
      <div className="absolute top-20 left-0 w-full h-[calc(100%-5rem)] z-0 pointer-events-none bg-black md:hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-[#E60000] z-0 opacity-80"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-gradient-to-l from-[#E60000]/80 via-[#E60000]/20 to-transparent z-10 mix-blend-screen"></div>
      </div>

      <div className="relative z-40 flex flex-col md:block w-full h-full pb-0 md:pb-0 pt-24 md:pt-20">
        
        {/* =======================
            DESKTOP LAYOUT 
            ======================= */}
        <div className="hidden md:block">
          {/* Desktop-only Massive Text */}
          <div className="flex text-massive text-white text-outline flex-col items-end mr-10 select-none mt-5">
            <span>BRO ON</span>
            <span className="text-brandRed">FIRE</span>
          </div>

          <div className="absolute left-[5%] top-[15%] z-20">
            <div className="bg-brandRed text-white p-4 rounded-full border-4 border-black sticker-rotate-left flex flex-col items-center justify-center w-40 h-40 text-center shadow-2xl">
              <span className="text-xl leading-none font-black font-impact">THE FLAME<br/>CLUB</span>
              <span className="text-[0.6rem] mt-2 leading-tight">JOIN THE BROHOOD<br/>AND GET BURNT</span>
              <a className="bg-brandBlack text-white text-xs px-3 py-1 mt-2 rounded" href="#">JOIN NOW</a>
            </div>
          </div>
          
          <div className="absolute top-[45%] ml-[45%] max-w-xl z-30">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-4">
                <span className="text-sm font-sans font-bold text-white text-bg-blur">@BROONFIRE_<br/></span>
                <div className="h-[1px] bg-white flex-grow opacity-50"></div>
              </div>
              
              <div className="flex flex-col items-start relative mt-0">
                <div className="bg-brandRed text-white inline-block px-8 py-4 text-6xl font-impact sticker-rotate-right border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] z-20 mb-0">
                  COLLECTION 01
                </div>
                
                <div className="relative mt-4 z-10 w-auto">
                  <div className="duct-tape -top-4 -left-8 -rotate-12 bg-gray-400 opacity-90 block"></div>
                  <img alt="Model" className="w-64 h-80 object-cover grayscale hover:grayscale-0 transition-all border-4 border-white shadow-2xl paper-tear aspect-[3/4]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZiIE9O_-uHGCuzWi_ahbozT_zFK4wxtLB3TlP5eQDiJN74FKt4ZlZ2UuovPtGj9fXxj4vzZ01H1CEHrN1rUvjGPm5RGZl2EI8_2--BcIzHL8tZpx-0Zw7_vZDBIbbdcA0mg420KG4woPK9pKS3Afb1_Ssm8Lrr0QtpE9so0qvn8i-xhWlIFwtrDoES1NQSCzjHvIrUVf8BFhmlB262Qo_4gfE4JLY3ShdqzjYKXMH6e86S5I-zwn2yeIyr3Aed8FewpbaGxf4FDg" />
                  <div className="duct-tape -bottom-2 -right-6 rotate-6 bg-gray-500 block"></div>
                  
                  <div className="absolute bottom-[-20px] left-[-40px] z-30 w-24 h-24 bg-brandYellow rounded-lg flex items-center justify-center border-2 border-black sticker-rotate-left">
                    <span className="text-black text-center text-xs font-bold leading-tight">CERTIFIED<br/>HOT AF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-24 ml-10 max-w-2xl z-20">
            <p className="text-xs font-sans font-bold mb-4 tracking-widest text-white bg-brandRed inline-block px-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">HERE'S OUR MENU /</p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-1 text-2xl leading-none text-white font-impact">
              <a className="hover:text-brandRed transition-colors text-outline-small inline-block w-fit" href="#">THE FLAMING TRIPLE /</a>
              <a className="hover:text-brandRed transition-colors text-outline-small inline-block w-fit" href="#">VOLCANO FRIES /</a>
              <a className="hover:text-brandRed transition-colors text-outline-small inline-block w-fit" href="#">BRO'S CHEESEBURGER /</a>
              <a className="hover:text-brandRed transition-colors text-outline-small inline-block w-fit" href="#">LAVA WINGS /</a>
              <a className="hover:text-brandRed transition-colors text-outline-small inline-block w-fit" href="#">THE INFERNO VEGAN /</a>
              <a className="hover:text-brandRed transition-colors text-outline-small inline-block w-fit" href="#">SMOKY BBQ RIBS /</a>
              <a className="hover:text-brandRed transition-colors text-outline-small inline-block w-fit" href="#">SPICY ONION RINGS /</a>
              <a className="hover:text-brandRed transition-colors text-outline-small inline-block w-fit" href="#">FIREBALL SHAKE /</a>
            </div>
          </div>
          
          <div className="absolute bottom-10 right-10 flex flex-col items-end gap-6 z-30">
            <div className="bg-brandRed p-4 sticker-rotate-left shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:scale-105 transition-transform border-4 border-black font-impact">
              <p className="text-white text-4xl text-center leading-none">BIG ORDERS?</p>
              <p className="text-black text-center text-sm leading-none mt-1 font-bold">WANT TO FEED THE SQUAD?</p>
              <div className="bg-brandBlack text-white text-xs text-center p-1 mt-2">CLICK HERE</div>
            </div>
          </div>
        </div>

        {/* =======================
            MOBILE LAYOUT
            ======================= */}
        <div className="md:hidden flex flex-col w-full min-h-[100vh] relative pt-0">

          {/* Title - original position */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: -30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="flex flex-col items-center select-none text-white text-outline relative z-30 w-full mb-[-4vh]"
            style={{ fontSize: '18vw', lineHeight: '0.8', letterSpacing: '-0.05em' }}
          >
            <span className="ml-[-5vw]">BRO ON</span>
            <span className="text-brandRed bg-black/60 px-4 mt-1 border-y-2 border-brandRed ml-[5vw]">FIRE</span>
          </motion.div>

          {/* Original Contained Video + stickers */}
          <div className="relative w-full z-20 flex justify-center items-center">

            {/* Popular Fire - Controlled chaos pos 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: -15 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -top-[2vh] left-4 z-40"
            >
              <p className="text-[0.6rem] font-black tracking-widest text-white bg-brandRed px-2 py-1 border-2 border-black leading-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">POPULAR FIRE /</p>
            </motion.div>

            {/* Contained Video (Original Size) */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 15 }}
              className="relative w-full mx-auto z-10"
            >
              <div className="absolute inset-0 rounded-full blur-[60px] bg-brandRed/40 scale-75 z-0"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                src="/assets/carbonara-video.mp4"
              />
            </motion.div>

            {/* Flame Club - Controlled chaos pos 2 */}
            <motion.div 
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 12, scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute bottom-[10%] left-0 z-30"
            >
              <div className="bg-brandRed text-white rounded-full border-2 border-black flex flex-col items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform font-impact" 
                style={{ width: '15vw', height: '15vw', minWidth: '50px', minHeight: '50px' }}>
                <span className="text-[0.5rem] font-black leading-none text-center uppercase">THE<br/>FLAME<br/>CLUB</span>
              </div>
            </motion.div>

            {/* Certified Hot AF - Controlled chaos pos 3 */}
            <motion.div 
              initial={{ rotate: -90, x: 50, opacity: 0 }}
              animate={{ rotate: 10, x: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute top-[20%] right-2 z-30 bg-brandYellow rounded-none flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2"
            >
              <span className="text-black text-center font-black leading-tight uppercase font-impact" style={{ fontSize: '0.45rem' }}>CERTIFIED<br/>HOT AF</span>
            </motion.div>
          </div>

          {/* Collection 01 & Social - Reverted to Right, controlled chaos */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="w-full flex justify-end z-40 mt-[-2vh] pr-6 relative"
          >
            <div className="flex flex-col gap-2 items-end">
              <div className="bg-brandRed text-white px-6 py-2 text-lg font-impact sticker-rotate-right border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block relative">
                <div className="duct-tape absolute -top-3 -left-4 -rotate-45 w-12 bg-gray-400"></div>
                COLLECTION 01
              </div>
              <p className="text-white font-sans text-[0.7rem] font-black tracking-widest bg-black/80 px-2 py-0.5 border-r-2 border-brandRed uppercase">@BROONFIRE_</p>
            </div>
          </motion.div>

        </div>

      </div>
    </main>
  );
};

export default Hero;
