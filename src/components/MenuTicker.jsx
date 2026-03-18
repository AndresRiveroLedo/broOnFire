import React from 'react';

const MenuTicker = () => {
  const items = [
    "CARBONARA BURGER",
    "BACON BBQ",
    "CLASSIC BURGER"
  ];

  // Repeat items to ensure seamless scroll
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full bg-brandRed py-3 overflow-hidden border-y-2 border-black z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center mx-4 md:mx-10">
            <span className="text-2xl md:text-3xl font-black text-white italic tracking-tighter uppercase leading-none">
              {item}
            </span>
            <span className="ml-8 md:ml-12 text-black/40 text-xl font-bold">//</span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MenuTicker;
