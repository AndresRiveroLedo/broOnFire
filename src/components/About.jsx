import React from 'react';

const About = () => {
  return (
    <div id="about" className="relative bg-background-dark text-white uppercase overflow-hidden">
      {/* Spray Paint Decor */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] spray-paint pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] spray-paint pointer-events-none z-0"></div>

      {/* Gallery Hero Section */}
      <section className="relative px-6 pt-24 pb-12 lg:px-12 z-10">
        <div className="max-w-full">
          <h1 className="text-massive flex flex-col items-start leading-none mb-12">
            <span className="text-white text-outline">THE VIBE</span>
            <span className="text-primary italic">CHECK</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            <p className="font-sans text-lg md:text-xl text-white max-w-2xl font-medium normal-case leading-relaxed">
              A raw, unfiltered look at the concrete jungle, the neon nights, and the burgers that fuel our soul. This is urban culture, flame-grilled.
            </p>
            <div className="sticker-rotate-right bg-brandYellow text-black px-6 py-4 font-black text-2xl border-4 border-black shadow-2xl">
              STAY HUNGRY / STAY WILD
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Collage Gallery */}
      <main className="relative px-6 lg:px-12 pb-32 z-10">
        <div className="grid grid-cols-12 gap-6 auto-rows-auto">
          
          {/* Large Feature Image */}
          <div className="col-span-12 md:col-span-7 relative group">
            <div className="absolute -top-6 left-1/4 z-20 w-40 h-10 duct-tape -rotate-12 opacity-80"></div>
            <div className="w-full aspect-square md:aspect-video bg-neutral-900 border-8 border-white shadow-[20px_20px_0px_0px_rgba(230,0,0,1)] overflow-hidden transition-transform group-hover:scale-[1.01] duration-500">
              <img className="w-full h-full object-cover" alt="Juicy gourmet burger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTvAOMqVsQX4znt2pshQJMRthAGBRYFsxD0nn2lQehNe4tsLHsnHE5oIH89FZzpBmZEIPyAeFBbZ505wvBfePsm6zyNWc4PC8WLKYNa1RHGrIPNqDdYtzKZVGj6M0TuxlNKGXrWpg-l5PDkgR_FbJ_CyFaKgJyWo-sjXzc4Gtkc5CJAoBqCqC8Z1hj9xdVwYHK3nVJ4ztxPQnhtjv4do3JmwkYVafZXAd5-hj9BIhiu1AK-_Woqzq3f2yRljPKWE__tABf06KbQCg" />
            </div>
            <div className="absolute -bottom-8 -right-4 bg-primary text-white p-6 font-black text-4xl sticker-rotate-left border-4 border-black">
              BURNT <br/> PERFECTION
            </div>
          </div>
          
          {/* Vertical Street Art */}
          <div className="col-span-6 md:col-span-5 relative mt-12 md:mt-24">
            <div className="w-full h-[500px] bg-neutral-900 overflow-hidden grayscale border-4 border-white paper-tear shadow-2xl hover:grayscale-0 transition-all duration-700">
              <img className="w-full h-full object-cover" alt="Urban graffiti" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmvbV72GI3hStyfJsIo5YHaNTQREOhzORRm85iUkTPm9WEoyh0iETnXo6_x1WKa9ibhHz_3wy4xithPG8vfsNqGD81zahAaJUd6FCo9BTUMRdimdaf1PhPn1onA1JkkeDPcamYmvYrCjQLD_BPQ5lrdfBPhuB7472uShCQeKMsWiJ3lFGx2ox3Vr7C5c4ftmjQqtmrwKKj2oZMOWkDGyZaTG8fS-AyFKir3pRC5IvLG9pmoD9-FlqAeQmB6846D-JYaGRW2mTAuiA" />
            </div>
            <div className="absolute -top-4 -right-2 z-10 w-32 h-10 duct-tape rotate-12 opacity-90"></div>
            <div className="absolute bottom-10 left-[-20px] bg-white text-black px-4 py-1 text-xs font-black tracking-widest border border-black uppercase sticker-rotate-right">
              #STREET_SOUL
            </div>
          </div>
          
          {/* Square People Eating */}
          <div className="col-span-6 md:col-span-4 relative -mt-10 md:-mt-40 z-20">
            <div className="w-full aspect-square bg-neutral-800 border-4 border-white shadow-2xl sticker-rotate-left overflow-hidden grayscale hover:grayscale-0 transition-all">
              <img className="w-full h-full object-cover" alt="Eating burger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOfzrsrRTDOWsX_-QiIfp4779loAlgsfE4kxgE5fK963T3jc32WfdXDffj1wckQnqshJGYKZ4urmLTD7TR1ZUox_OXHtqpL1nXKtNC6sqke_BaxUDqtmurmbOzor7wvkcBTUdOZ71KWW2WE7g0sxwwH_w2MbnehN1-UlfdN8B1y2uwaJR7Fmtoaw7kGUgB-5wiiJNnhJEHYKc5URVZc3rL-BrX094d9G3sYjoZnmOPpJ9Hr4Z2axOJuqxyUDAeOKhLNxebjrkLG9M" />
            </div>
          </div>
          
          {/* Wide Urban View */}
          <div className="col-span-12 md:col-span-8 relative z-10">
            <div className="w-full h-[400px] bg-neutral-900 border-4 border-white paper-tear overflow-hidden group">
              <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Night cityscape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjfJo-7aLWFkBQ8Ygf8J-cyrfJzMu8E55uIR8ez3T-a2KdkpneNSLG-DSYENwEQ39X_DOOnh7y6FP90ymI2c6xOokrLHb5ektrL90GD6wHS886KWkTSrLhKR1z7Wed4YEwCytdvjHWyHHP_Z0Pkbx9_DOmSPkkPnUcGlPDlXjnSqkYdLplVBW2oFCCOXVaSRwnfv483irLH39MX4EI61nvuQ0D2duPQxTgohf2NtrBXzziVg2baqE_fx7s9NcbfLwzVRzdP1Bdroo" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-7xl font-black text-outline tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">LIVING LOUD</span>
              </div>
            </div>
          </div>
          
          {/* Overlapping Elements */}
          <div className="col-span-6 md:col-span-3 relative -mt-20 md:-mt-60 ml-10 z-30">
            <div className="w-full aspect-[3/4] bg-white border-2 border-black shadow-xl sticker-rotate-right overflow-hidden p-2">
              <img className="w-full h-full object-cover grayscale" alt="Close up fries" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATMoOH-9sJ5nV9fw0IuGMhPfUf661dCK6ndnQ9TkNt1vnTkj9vFJ5DDb3kAN-t8PAdBvxEp3XBm1vKnL2gyZemHL1oRB1sXHRpuMeTqIEl7rfZn3fBnTMj3k55qA4iByHkXHvfJGYzbveyODka2FyDBy7L5Ju5FCUeQU6jJTg1tk3qaFC7U8uzPpwgzBCPvgr2gosCKe74wGBc_TwHFyfUhmDCDrwlSWfR_WE-ZpIvDcT9WUJ22pmQwWwoYFpelBISLzvdsDya12Y" />
              <div className="absolute top-2 right-2 bg-primary text-white text-[10px] font-black px-2 py-1">HOT STUFF</div>
            </div>
          </div>
          
          {/* Neon Sign */}
          <div className="col-span-6 md:col-span-4 relative mt-10 md:mt-0">
            <div className="w-full aspect-square bg-black border-4 border-primary shadow-[0_0_50px_rgba(230,0,0,0.5)] sticker-rotate-left overflow-hidden">
              <img className="w-full h-full object-cover" alt="Neon burger sign" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6bklzcqNHcK6kaOaqTO6oVBkPIqeRTwoOZ7QwyklM4pAn5vCzGx4cJuNmmfyn4RVNvtJjGNLUGwaI6j0fag09SRVDdTtwNIVx7SVskwm6R-r81oLr8aDaTVAr5zbY7P_ivCDwxrDyayNKUMc50aBr9wQYlEUrjIpAt0TLkFFXC6CwdNPyK6Gwz2n1EwqAle8M3qTmSgXMdVe-J4pOVtcIqx61LwvAGnl5RaqsW7eIBeuPFeQ-8xvj0YjnHgXx6eZHyRojnVZSJ2Q" />
            </div>
            <div className="absolute -bottom-4 -left-4 z-10 w-24 h-8 duct-tape rotate-45"></div>
          </div>
          
          {/* Friends & Vibe */}
          <div className="col-span-12 md:col-span-5 relative mt-10 md:mt-[-50px]">
            <div className="w-full h-[450px] bg-neutral-900 border-b-[24px] border-primary paper-tear shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img className="w-full h-full object-cover" alt="Friends cheering" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDby4e5w75n1RSK_A55as8H9QSwvtWhZbN8wwBsv9odipJUvPlbwoCnI5e4CxlVd7XvLUK8tLv_nmKWwXkHs0Hvo2cruwpOHpGE-8dp_7BI_hU0EQjGmZf56tOmPSNBayEWYmP3DOJy6YjtdUbBVHMBK7MNZp-p4GcQFykBQhRDc-hDU78cJ2ikPEim2SPQqy_dR27gUeQDUBDWDzQxFOjJ89W1bmuoGl-PLsT1ElY2Z6VaerFzQwrCHpw0RbTfwGZD8yoFCkL0V6o" />
            </div>
            <div className="absolute top-1/2 right-[-20px] bg-brandYellow text-black px-6 py-2 font-black text-3xl sticker-rotate-right border-4 border-black">
              SQUAD GOALS
            </div>
          </div>
        </div>
      </main>

      {/* Category Filters */}
      <section className="px-6 lg:px-12 py-20 bg-primary text-white border-y-8 border-black overflow-hidden relative">
        <div className="flex flex-wrap items-center gap-6 justify-center">
          <h3 className="text-massive text-outline leading-none absolute opacity-10 pointer-events-none select-none left-0 whitespace-nowrap">CATEGORIES CATEGORIES CATEGORIES</h3>
          <span className="text-xl font-black uppercase tracking-[0.3em] bg-black text-white px-4 py-1 z-10">FILTER:</span>
          <button className="px-8 py-3 bg-black text-white font-black text-lg hover:bg-white hover:text-black transition-colors z-10 border border-black">STREET ART</button>
          <button className="px-8 py-3 bg-black text-white font-black text-lg hover:bg-white hover:text-black transition-colors z-10 border border-black">THE FOOD</button>
          <button className="px-8 py-3 bg-black text-white font-black text-lg hover:bg-white hover:text-black transition-colors z-10 border border-black">PEOPLE</button>
          <button className="px-8 py-3 bg-black text-white font-black text-lg hover:bg-white hover:text-black transition-colors z-10 border border-black">NIGHT LIFE</button>
        </div>
      </section>
    </div>
  );
};

export default About;
