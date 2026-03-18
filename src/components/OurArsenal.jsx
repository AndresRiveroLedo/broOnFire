import React from 'react';
import { motion } from 'framer-motion';

const arsenalItems = [
  {
    id: 1,
    name: "Carbonara Burger",
    description: "DRY-AGED BEEF BURGER WITH CHEDDAR CHEESE, ITALIAN GUANCIALE, AND OUR SIGNATURE CARBONARA SAUCE ON A BRIOCHE BUN.",
    price: "15.90 €",
    video: "/assets/carbonara_woman.MOV",
    popular: true
  },
  {
    id: 2,
    name: "Bacon Burger",
    description: "BURGER BUN, BEEF PATTY, CRISPY BACON, CHEDDAR CHEESE, FRESH TOMATO SLICES, ARUGULA, BALSAMIC REDUCTION DRIZZLE.",
    price: "13.90 €",
    video: "/assets/bacon burger.MOV",
    popular: true
  },
  {
    id: 3,
    name: "Classic Burger",
    description: "AMERICAN CHEESE, TOMATO, LETTUCE, ONIONS, KETCHUP & MUSTARD",
    price: "13.50 €",
    video: "/assets/classic bro burger.MOV",
    popular: false
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const OurArsenal = () => {
  return (
    <section id="arsenal" className="pt-4 pb-24 px-6 md:pt-8 md:px-12 bg-black font-sans relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-16 text-center">
          <motion.h2 
            className="text-6xl md:text-[6rem] lg:text-[8rem] font-black font-impact uppercase leading-[0.85] tracking-tighter text-white transform -skew-x-3 mb-6 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            OUR <br/><span className="bg-brandRed text-black px-6 py-2 md:py-4 inline-block transform rotate-2 lg:-ml-4 border-4 border-white shadow-[8px_8px_0px_0px_#ffde00] md:shadow-[16px_16px_0px_0px_#ffde00]">ARSENAL</span>
          </motion.h2>
          <motion.p 
            className="text-white text-lg md:text-2xl font-bold uppercase max-w-2xl mx-auto bg-black border-l-4 md:border-l-8 border-brandYellow pl-4 md:pl-6 py-2 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hand-crafted smash burgers designed for maximum impact. No rules. Just fire.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {arsenalItems.map(item => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              className="relative group h-full cursor-pointer mt-4 md:mt-8"
            >
              {/* Background solid shadow element */}
              <div className="absolute inset-0 bg-brandRed translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 border-4 border-black group-hover:bg-brandYellow group-hover:translate-x-5 group-hover:translate-y-5 transition-all duration-200"></div>

              {/* Main Card */}
              <div className="relative bg-[#111] border-4 border-white overflow-hidden flex flex-col h-full transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-200 z-10">
                <div className="relative w-full overflow-hidden shrink-0 bg-black flex justify-center items-center border-b-4 border-white group-hover:scale-105 transition-transform duration-500">
                  {item.video ? (
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-auto block" 
                      src={item.video}
                    />
                  ) : (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-auto block" 
                    />
                  )}
                  {item.popular && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-brandYellow border-2 border-black text-black text-[0.8rem] md:text-sm uppercase font-black px-3 py-1 shadow-[4px_4px_0px_0px_#000] transform -rotate-3 inline-block tracking-wider">
                        Top Seller
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 md:p-8 flex-grow flex flex-col z-20 bg-[#111]">
                  <div className="flex justify-between items-start mb-6 gap-4">
                    <h3 className="text-3xl md:text-4xl font-black font-impact uppercase tracking-widest text-white leading-[0.85]">{item.name}</h3>
                    <div className="transform rotate-3 shrink-0">
                      <span className="font-black font-impact text-xl md:text-2xl bg-white text-black px-3 py-1 border-2 border-black shadow-[4px_4px_0px_0px_#e60000]">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm md:text-base font-bold uppercase tracking-wide mb-8 flex-grow leading-relaxed">
                    {item.description}
                  </p>
                  
                  <button className="w-full py-4 px-4 bg-brandRed text-white font-black uppercase tracking-widest text-xl border-4 border-white hover:bg-brandYellow hover:text-black hover:border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-200 mt-auto transform hover:-translate-y-1">
                    ADD TO ORDER
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20 md:mt-24 text-center">
          <button className="px-10 py-5 bg-brandRed hover:bg-brandYellow text-black font-black font-impact uppercase tracking-widest text-2xl transition-all duration-200 border-4 border-white hover:border-black shadow-[8px_8px_0px_0px_#fff] hover:shadow-[12px_12px_0px_0px_#000] transform hover:-translate-y-2">
            FULL ARSENAL
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurArsenal;
