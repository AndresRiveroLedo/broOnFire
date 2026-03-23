import React from 'react';

const GalleryFilters = () => {
  return (
    <section className="px-6 lg:px-12 py-20 bg-primary text-white border-y-8 border-black overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[25vw] font-black tracking-tighter leading-none">CATEGORIES CATEGORIES</span>
      </div>
      <div className="flex flex-wrap items-center gap-6 justify-center relative z-10">
        <span className="text-xl font-black uppercase tracking-[0.3em] bg-black text-white px-4 py-1 z-10">FILTER:</span>
        <button className="px-8 py-3 bg-black text-white font-black text-lg hover:bg-white hover:text-black transition-colors z-10 border border-black">STREET ART</button>
        <button className="px-8 py-3 bg-black text-white font-black text-lg hover:bg-white hover:text-black transition-colors z-10 border border-black">THE FOOD</button>
        <button className="px-8 py-3 bg-black text-white font-black text-lg hover:bg-white hover:text-black transition-colors z-10 border border-black">PEOPLE</button>
        <button className="px-8 py-3 bg-black text-white font-black text-lg hover:bg-white hover:text-black transition-colors z-10 border border-black">NIGHT LIFE</button>
      </div>
    </section>
  );
};

export default GalleryFilters;
