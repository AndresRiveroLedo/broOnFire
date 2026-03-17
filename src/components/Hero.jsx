import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <main className="collage-container pt-0 md:pt-16 px-4 overflow-hidden relative">
      {/* Background Video Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {/* Extremely strong base gradient: black on left, solid bright red on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-[#E60000] z-0"></div>
        
        {/* Video as a subtle texture overlay */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 mix-blend-overlay z-10"
        >
          <source src="/bg-fire.mp4" type="video/mp4" />
        </video>
        
        {/* Darken the left side further so text reads clearly */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-20"></div>
        
        {/* Extra intense highlight on the right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-gradient-to-l from-[#E60000]/80 via-[#E60000]/20 to-transparent z-30 mix-blend-screen"></div>
      </div>

      <div className="relative z-10 flex flex-col md:block w-full h-full pb-32 md:pb-0 pt-20 md:pt-0">
        
        {/* =======================
            DESKTOP LAYOUT 
            ======================= */}
        <div className="hidden md:block">
          {/* Desktop-only Massive Text */}
          <div className="flex text-massive text-white text-outline flex-col items-end mr-10 select-none mt-10">
            <span>BRO ON</span>
            <span className="text-brandRed">FIRE</span>
          </div>

          <div className="absolute left-[-5%] top-[10%] w-[55%] z-20">
            <video autoPlay loop muted playsInline className="w-full h-auto object-contain relative z-10" src="/assets/carbonara-video.mp4" />
            <div className="absolute top-[10%] right-[10%] z-20 block">
              <div className="bg-brandRed text-white p-4 rounded-full border-4 border-black sticker-rotate-left flex flex-col items-center justify-center w-40 h-40 text-center shadow-xl">
                <span className="text-xl leading-none">THE FLAME<br/>CLUB</span>
                <span className="text-[0.6rem] mt-2 leading-tight">JOIN THE BROHOOD<br/>AND GET BURNT</span>
                <a className="bg-brandBlack text-white text-xs px-3 py-1 mt-2 rounded" href="#">JOIN NOW</a>
              </div>
            </div>
          </div>
          
          <div className="absolute top-[40%] ml-[45%] max-w-xl z-30">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-4">
                <span className="text-sm font-sans font-bold text-white text-bg-blur">@BROONFIRE_<br/></span>
                <div className="h-[1px] bg-white flex-grow opacity-50"></div>
              </div>
              
              <div className="flex flex-col items-start relative mt-0">
                <div className="bg-brandBlack text-brandRed inline-block px-8 py-4 text-6xl sticker-rotate-right border-4 border-brandRed shadow-2xl z-20 mb-0">
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
          
          <div className="relative mt-20 ml-10 max-w-2xl z-20">
            <p className="text-xs font-sans font-bold mb-4 tracking-widest text-brandRed bg-black inline-block px-2">HERE'S OUR MENU /</p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-1 text-2xl leading-none text-white">
              <a className="hover:text-brandRed transition-colors text-bg-blur inline-block w-fit" href="#">THE FLAMING TRIPLE /</a>
              <a className="hover:text-brandRed transition-colors text-bg-blur inline-block w-fit" href="#">VOLCANO FRIES /</a>
              <a className="hover:text-brandRed transition-colors text-bg-blur inline-block w-fit" href="#">BRO'S CHEESEBURGER /</a>
              <a className="hover:text-brandRed transition-colors text-bg-blur inline-block w-fit" href="#">LAVA WINGS /</a>
              <a className="hover:text-brandRed transition-colors text-bg-blur inline-block w-fit" href="#">THE INFERNO VEGAN /</a>
              <a className="hover:text-brandRed transition-colors text-bg-blur inline-block w-fit" href="#">SMOKY BBQ RIBS /</a>
              <a className="hover:text-brandRed transition-colors text-bg-blur inline-block w-fit" href="#">SPICY ONION RINGS /</a>
              <a className="hover:text-brandRed transition-colors text-bg-blur inline-block w-fit" href="#">FIREBALL SHAKE /</a>
            </div>
          </div>
          
          <div className="absolute bottom-10 right-10 flex flex-col items-end gap-6 z-30">
            <div className="bg-brandRed p-4 sticker-rotate-left shadow-2xl cursor-pointer hover:scale-105 transition-transform border-4 border-black">
              <p className="text-white text-4xl text-center leading-none">BIG ORDERS?</p>
              <p className="text-black text-center text-sm leading-none mt-1 font-bold">WANT TO FEED THE SQUAD?</p>
              <div className="bg-brandBlack text-white text-xs text-center p-1 mt-2">CLICK HERE</div>
            </div>
            <div className="flex gap-4">
              <img alt="Merch" className="h-12 border-2 border-black bg-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8UCn3gy5H4VNBcuGDZ1aT_kiZc-Jt7Jr4Rmmkia--66tEMGnAcB1-EuyAkQKbqb5-GhxfYADihuSYIONH7BETaexH_Pq-lh6TH5ur1PpiX3nHzoXDGRbwexB8wbVM2gCHvgm94aDE5vVQvxK0ldbdCV6NtUBHzsu7Rt7vPPAeg0x-XOSWevxb0_V7krtN2rZFYq0uB853vJ3qEbupQYBocdD_yuA1KUHqlqwPDIzpokwrFc7HNabC9coyEU-YWzaOYnabG2wPI5o" />
              <img alt="Limited" className="h-12 border-2 border-black sticker-rotate-right bg-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoSsbVZ9CEJyCw9cHkP2Ikj1aaTXycPQknYbXaQgyJ3LmnOqqqhuM0P8HuNrL7WfVOb8i_sW045Q62bHSWOlPYWW5qWV0SjyxYR3wxvN0oZ53uSbRHC3EX4GuNoBcf4RrHym6AQ3xDiEBEr5g4Zz3XbSCB95kVPHoTiPnsmwBd6_ircJVtv0tJSfWL__Lz_-h2EtiMvPKdanNfF16uWnZjaBqDmtu5qRcqtiJhloPaFOCeuBtYBWfFDwhKX3rjmfzEGRWMhSY_1-0" />
            </div>
          </div>
        </div>

        {/* =======================
            SPECTACULAR MOBILE LAYOUT 
            ======================= */}
        <div className="md:hidden flex flex-col items-center w-full min-h-[120vh] relative pt-0">
          
          {/* Glitch Entrance Title */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="flex flex-col items-center select-none text-white text-outline relative z-30 w-full mb-[-8vh]" 
            style={{ fontSize: '22vw', lineHeight: '0.8', paddingRight: '0.2em' }}
          >
            <span className="ml-[-10vw]">BRO ON</span>
            <span className="text-brandRed bg-black/40 px-2 mt-2 ml-[10vw]">FIRE</span>
          </motion.div>

          {/* Epic Scaled Burger with Glow */}
          <div className="relative w-full z-20 mt-0 flex justify-center items-center">
            
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.25, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 15 }}
              className="relative w-[110%] mx-auto z-10"
            >
              {/* Red Inner Glow specific for mobile */}
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

            {/* Chaotic Overlapping Stickers - Positioned relative to screen, not scaled burger */}
            
            {/* Flame Club - Top Right overlapping burger */}
            <motion.div 
              initial={{ rotate: -50, scale: 0, opacity: 0 }}
              animate={{ rotate: 12, scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute top-[10%] right-2 z-30"
            >
              <div className="bg-brandRed text-white p-2 rounded-full border-4 border-black flex flex-col items-center justify-center w-24 h-24 text-center shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                <span className="text-sm font-bold leading-none">THE FLAME<br/>CLUB</span>
                <span className="text-[0.45rem] mt-1 leading-tight font-black">JOIN THE BROHOOD<br/>AND GET BURNT</span>
                <a className="bg-brandBlack text-white text-[0.55rem] px-2 py-[2px] mt-1 rounded" href="#">JOIN NOW</a>
              </div>
            </motion.div>

            {/* Yellow Certified Sticker - Bottom Left overlapping burger */}
            <motion.div 
              initial={{ rotate: 90, x: -50, opacity: 0 }}
              animate={{ rotate: -15, x: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute bottom-[20%] left-2 z-30 w-28 h-28 bg-brandYellow rounded-lg flex items-center justify-center border-4 border-black shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            >
              <div className="duct-tape absolute -top-3 -right-6 rotate-45 w-16 bg-gray-300"></div>
              <span className="text-black text-center text-sm font-black leading-tight">CERTIFIED<br/>HOT AF</span>
            </motion.div>
          </div>
          
          {/* Collection Banner - Pinned over the burger bottom edge */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="w-full px-4 flex justify-center z-40 mt-[-10vh]"
          >
            <div className="bg-brandBlack text-brandRed w-[110%] ml-[-5%] py-3 text-5xl text-center sticker-rotate-right border-y-4 border-brandRed shadow-2xl">
              COLLECTION 01
            </div>
          </motion.div>

          {/* Action Area Below */}
          <div className="w-full px-6 mt-16 z-30 flex flex-col items-center gap-12">
            
            {/* Minimal Menu Preview */}
            <div className="w-full text-center">
              <p className="text-xs font-sans font-bold mb-6 tracking-widest text-brandRed bg-black inline-block px-4 py-1 border border-brandRed">POPULAR FIRE /</p>
              <div className="flex flex-col gap-3 text-2xl leading-none text-white font-impact items-center">
                <a className="hover:text-brandRed transition-colors" href="#">THE FLAMING TRIPLE</a>
                <a className="hover:text-brandRed transition-colors" href="#">VOLCANO FRIES</a>
                <a className="hover:text-brandRed transition-colors" href="#">BRO'S CHEESEBURGER</a>
              </div>
              <button className="mt-8 bg-brandRed text-white px-8 py-3 rounded text-xl uppercase tracking-widest sticker-rotate-left border-2 border-black font-bold">
                SEE FULL MENU
              </button>
            </div>
            
            {/* Huge CTA */}
            <div className="bg-brandRed p-6 w-full max-w-sm sticker-rotate-left scale-[1.05] shadow-[0_20px_50px_rgba(230,0,0,0.3)] border-4 border-black mt-8">
              <p className="text-white text-5xl text-center leading-none text-outline-black">BIG ORDERS?</p>
              <p className="text-black text-center text-base leading-none mt-2 font-black">FEED THE WHOLE SQUAD</p>
              <div className="bg-brandBlack text-white text-xl text-center p-3 mt-4 font-bold border-2 border-white">SMASH HERE</div>
            </div>

            <div className="flex gap-4 justify-center mt-4">
              <img alt="Merch" className="h-12 border-2 border-black bg-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8UCn3gy5H4VNBcuGDZ1aT_kiZc-Jt7Jr4Rmmkia--66tEMGnAcB1-EuyAkQKbqb5-GhxfYADihuSYIONH7BETaexH_Pq-lh6TH5ur1PpiX3nHzoXDGRbwexB8wbVM2gCHvgm94aDE5vVQvxK0ldbdCV6NtUBHzsu7Rt7vPPAeg0x-XOSWevxb0_V7krtN2rZFYq0uB853vJ3qEbupQYBocdD_yuA1KUHqlqwPDIzpokwrFc7HNabC9coyEU-YWzaOYnabG2wPI5o" />
              <img alt="Limited" className="h-12 border-2 border-black sticker-rotate-right bg-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoSsbVZ9CEJyCw9cHkP2Ikj1aaTXycPQknYbXaQgyJ3LmnOqqqhuM0P8HuNrL7WfVOb8i_sW045Q62bHSWOlPYWW5qWV0SjyxYR3wxvN0oZ53uSbRHC3EX4GuNoBcf4RrHym6AQ3xDiEBEr5g4Zz3XbSCB95kVPHoTiPnsmwBd6_ircJVtv0tJSfWL__Lz_-h2EtiMvPKdanNfF16uWnZjaBqDmtu5qRcqtiJhloPaFOCeuBtYBWfFDwhKX3rjmfzEGRWMhSY_1-0" />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Hero;
