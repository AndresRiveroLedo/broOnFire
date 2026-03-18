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
        <div className="mb-6 md:mb-16 text-center">
          <motion.h2 
            className="text-5xl md:text-7xl font-impact uppercase tracking-widest text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="bg-gradient-to-r from-brandRed to-brandYellow text-transparent bg-clip-text">Arsenal</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hand-crafted smash burgers designed for maximum impact.
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
              className="relative rounded-2xl group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(230,0,0,0.5)] h-full"
            >
              <div className="relative bg-[#111] border border-transparent rounded-[15px] overflow-hidden flex flex-col h-full group-hover:border-brandRed group-hover:shadow-[0_0_20px_rgba(230,0,0,0.6)] transition-all duration-300">
                <div className="relative w-full overflow-hidden shrink-0 bg-black flex justify-center items-center group-hover:scale-105 transition-transform duration-500">
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
                    <span className={`absolute ${item.id === 2 ? 'top-10' : 'top-4'} right-4 bg-gradient-to-r from-brandRed to-brandYellow text-black text-[0.6rem] font-bold px-2 py-0.5 rounded-full shadow-md`}>
                      Top Seller
                    </span>
                  )}
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold font-sans uppercase tracking-wide text-white w-2/3 leading-tight">{item.name}</h3>
                    <span className="font-bold text-xl whitespace-nowrap ml-2 bg-gradient-to-r from-brandRed to-brandYellow text-transparent bg-clip-text">{item.price}</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {item.description}
                  </p>
                  
                  <button className="w-full py-3 px-4 bg-transparent text-white rounded-lg transition-colors font-bold uppercase tracking-wider text-sm border border-white hover:bg-white hover:text-black mt-auto">
                    ADD TO ORDER
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-brandRed hover:bg-red-700 text-white font-impact uppercase tracking-widest text-xl transition-colors duration-300 border-2 border-brandRed rounded-none transform skew-x-[-5deg]">
            View Full Arsenal
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurArsenal;
