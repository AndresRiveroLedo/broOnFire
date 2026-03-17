import React from 'react';

const Menu = () => {
  return (
    <section className="bg-black text-white relative z-10 pt-20">
      <main className="px-4 md:px-10">
        {/* Hero / Title */}
        <div className="relative mb-20">
          <h1 className="text-massive text-white">THE BRO<br/><span className="text-brandRed">MENU</span></h1>
          <p className="max-w-xl mt-4 text-xl md:text-2xl font-sans tracking-tight leading-tight text-white/80 lowercase italic font-bold">
            smash burgers that hit harder than your pre-workout. no fluff, just fire.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-20 border-b border-white/20 pb-10">
          <button className="bg-brandRed text-white px-8 py-2 rounded-full text-2xl hover:bg-white hover:text-brandBlack transition-colors">BURGERS</button>
          <button className="border-2 border-white px-8 py-2 rounded-full text-2xl hover:bg-brandYellow hover:text-brandBlack hover:border-brandYellow transition-colors">SIDES</button>
          <button className="border-2 border-white px-8 py-2 rounded-full text-2xl hover:bg-brandYellow hover:text-brandBlack hover:border-brandYellow transition-colors">LOADED</button>
          <button className="border-2 border-white px-8 py-2 rounded-full text-2xl hover:bg-brandYellow hover:text-brandBlack hover:border-brandYellow transition-colors">SHAKES</button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 mb-32">
          {/* Item 1 */}
          <div className="relative group">
            <div className="relative aspect-square overflow-hidden mb-6 paper-tear grayscale hover:grayscale-0 transition-all duration-700">
              <img alt="Burger" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFIKhiDTd6RINnSRrq_xHY8ZGaUQ3bWDi4qzD_tli7E6dEkR54VBcuqGCbgoahn0o3-jAX15K5aZKF8lh2QVEFCZep6n3QRgD6SNWUmAcMogmsXkJTOInwq4jUnSAltKZCmbQhVuEj9Yb0-K9GhtW65a2m5mSw-BuGG6DlA7vbTyMekDgvAiPypTC2Cikie1UvhKQg_KmdDMw02yvy6SSK7FYPEob9NrVugf9wmJhykub7LFhfIxmfrzHSQssFDwIOTAuqc7QXuHk" />
              <div className="absolute top-4 left-4 bg-brandRed text-white px-3 py-1 text-sm sticker-rotate-left font-bold">HOT AF</div>
              <div className="duct-tape absolute -top-2 right-10 rotate-12"></div>
            </div>
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-4xl leading-none">THE FLAMING<br/>TRIPLE</h3>
              <span className="text-2xl font-bold text-brandRed">$16.99</span>
            </div>
            <p className="font-sans lowercase text-sm text-white/60 mb-6 leading-tight max-w-xs">triple beef, ghost pepper cheese, spicy aioli, jalapeño crunch, scorched onions.</p>
            <button className="w-full border-2 border-white py-4 text-xl hover:bg-white hover:text-black transition-all font-bold">ADD TO BAG /</button>
          </div>

          {/* Item 2 */}
          <div className="relative group mt-10 md:mt-0">
            <div className="relative aspect-square overflow-hidden mb-6 paper-tear grayscale hover:grayscale-0 transition-all duration-700">
              <img alt="Burger" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqWpEjwHhjiS8snED355Sc02Lejo_6F9HTDXVG3ZBZNVEj-LJPYJpsgolYmecebLryAMjFIwwXHieqlmtgAecI8AMMMgIFKN9aKug-BHYerEb1GcHEee7Ebby4lek5dU36z91Uzx9-A7_wsG41NKLW0FpFG-vp2erLNoAtgS_Pxx218r423MAdWOWGC8TfW9i1ZEY6DxDbdP5hP70TBKnaDXa2nYvqDG60oozBMnT2EA7nba1cXH4SgpvBr0N08wU_Z2_bRV8k1F0" />
              <div className="absolute bottom-4 right-4 bg-brandYellow text-black px-3 py-1 text-sm sticker-rotate-right font-bold">BEST SELLER</div>
              <div className="duct-tape absolute -bottom-4 left-1/4 -rotate-6 bg-gray-600"></div>
            </div>
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-4xl leading-none">BRO'S CHEESE<br/>BURGER</h3>
              <span className="text-2xl font-bold text-brandRed">$12.99</span>
            </div>
            <p className="font-sans lowercase text-sm text-white/60 mb-6 leading-tight max-w-xs">double patty, extra cheddar, secret sauce, house pickles, toasted brioche.</p>
            <button className="w-full border-2 border-white py-4 text-xl hover:bg-white hover:text-black transition-all font-bold">ADD TO BAG /</button>
          </div>

          {/* Item 3 */}
          <div className="relative group lg:mt-20">
            <div className="relative aspect-square overflow-hidden mb-6 paper-tear grayscale hover:grayscale-0 transition-all duration-700">
              <img alt="Burger" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpLImulWRoG6Sq0HZK2PnxdJ2BEswb37nBl5vXupayyoy8ti8LdrYTgeMlyb0ob8XiTDyL0xjgKamnqniwoFuo7vhS9vPKPh-BozIuWZA-kaPx03U8r75GeDurYO0d4TjusoA1_owJ0syvBdYsU6hLJQV4WAv_WV8HKTl-DhsiGpnflvRT42dZFzizJT6bJQrobQFGNoa9IbRls5UEmLbFwH_vyMlXlShFjwOO1fvkHHuzK5Sk5ARWhK6k0G1dUGi5-nBW8L8M8ho" />
              <div className="absolute top-1/2 -left-4 bg-brandRed text-white px-4 py-2 text-xl sticker-rotate-left font-bold">NEW DROP</div>
            </div>
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-4xl leading-none">CARBONARA<br/>SMASH</h3>
              <span className="text-2xl font-bold text-brandRed">$15.50</span>
            </div>
            <p className="font-sans lowercase text-sm text-white/60 mb-6 leading-tight max-w-xs">crispy bacon, pecorino, egg yolk drizzle, black pepper, smashed beef.</p>
            <button className="w-full border-2 border-white py-4 text-xl hover:bg-white hover:text-black transition-all font-bold">ADD TO BAG /</button>
          </div>
        </div>

        {/* Promo / Newsletter Collage Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32">
          <div className="relative bg-brandRed p-10 paper-tear sticker-rotate-left overflow-hidden h-[400px] flex flex-col justify-center">
            <h2 className="text-7xl md:text-8xl leading-none text-white text-outline-white mb-4">BURNER<br/>DEALS</h2>
            <p className="text-xl font-bold mb-8">GET 2X FLAMING TRIPLES + LOADED FRIES FOR $30.</p>
            <button className="bg-black text-white self-start px-10 py-4 text-xl hover:bg-white hover:text-black transition-all border border-black">CLAIM DEAL</button>
          </div>
          
          <div className="relative bg-brandOffWhite p-10 border-4 border-black flex flex-col justify-center items-center text-center">
            <div className="duct-tape absolute -top-4 left-1/2 -translate-x-1/2"></div>
            <h3 className="text-brandBlack text-6xl leading-none mb-6">JOIN THE<br/>PIT</h3>
            <p className="text-brandBlack font-sans font-bold text-sm mb-8 uppercase tracking-widest">// DROP ALERTS & SECRET MENU</p>
            <div className="w-full flex border-4 border-black">
              <input className="flex-grow bg-white p-4 text-black font-bold focus:outline-none uppercase border-none" placeholder="YOUR EMAIL" type="email" />
              <button className="bg-black text-white px-8 py-4 font-bold hover:bg-brandRed transition-colors">GO</button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Menu;
