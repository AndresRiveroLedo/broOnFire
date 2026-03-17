import React from 'react';

const Contact = () => {
  return (
    <>
      <main className="flex-1 flex flex-col pt-32 pb-24 bg-black relative">
        {/* Spray Paint Effect */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side: Vicio-style Typography */}
            <div className="flex flex-col space-y-12">
              <div className="space-y-2">
                <p className="text-primary text-xl tracking-[0.2em] font-bold">// GET IN TOUCH</p>
                <h1 className="text-massive flex flex-col">
                  <span className="text-outline-white text-transparent">WANT TO</span>
                  <span className="text-primary italic">CONNECT?</span>
                </h1>
                <div className="max-w-md mt-8">
                  <p className="text-zinc-400 font-sans normal-case text-lg leading-relaxed">
                    Drop us a line for training inquiries, collab opportunities, or just to show some gains. We don't bite, unless you're a burger.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <a className="w-14 h-14 bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors font-bold text-center" href="#">IG</a>
                  <a className="w-14 h-14 bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors font-bold text-center" href="#">TT</a>
                  <a className="w-14 h-14 bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors font-bold text-center" href="#">TW</a>
                </div>

                <div className="space-y-4 border-l-4 border-primary pl-6">
                  <div>
                    <p className="text-zinc-500 text-xs tracking-widest font-bold">EMAIL US /</p>
                    <p className="text-2xl tracking-tighter">IGNITE@BROONFIRE.COM</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs tracking-widest font-bold">LOCATE US /</p>
                    <p className="text-2xl tracking-tighter">IRON SANCTUARY, VENICE CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Minimalist Impactful Form */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="duct-tape absolute -top-4 -right-8 rotate-12 hidden md:block"></div>
              <div className="duct-tape absolute -bottom-4 -left-8 -rotate-12 hidden md:block"></div>
              
              <div className="bg-white p-10 md:p-16 sticker-rotate-left shadow-[30px_30px_0px_0px_rgba(230,0,0,1)]">
                <form className="flex flex-col gap-10">
                  <div className="relative">
                    <input className="w-full bg-transparent border-b-2 border-zinc-200 p-4 text-black focus:border-primary focus:ring-0 placeholder:text-zinc-400 font-bold text-xl uppercase transition-colors" placeholder="NAME" type="text" />
                  </div>
                  <div className="relative">
                    <input className="w-full bg-transparent border-b-2 border-zinc-200 p-4 text-black focus:border-primary focus:ring-0 placeholder:text-zinc-400 font-bold text-xl uppercase transition-colors" placeholder="EMAIL" type="email" />
                  </div>
                  <div className="relative">
                    <textarea className="w-full bg-transparent border-b-2 border-zinc-200 p-4 text-black focus:border-primary focus:ring-0 placeholder:text-zinc-400 font-bold text-xl uppercase transition-colors resize-none" placeholder="YOUR MESSAGE" rows="3"></textarea>
                  </div>
                  <button className="w-full bg-black hover:bg-primary text-white p-6 font-black text-2xl tracking-[0.1em] transition-all flex items-center justify-center gap-4 group" type="submit">
                    SEND MESSAGE
                    <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Map Section: Gritty Urban Style */}
      <section className="w-full h-80 relative bg-zinc-900 overflow-hidden grayscale contrast-150">
        <img className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdxz5IRxHGoxAjpL3Q6SFc8vbAO1Gdz7QYk9g4AZtsvxE5rBxeP_PuCDk0w00X-VeHrjHSrtJZqHtgcdZXTLbe5qOSH-vBrxOPSSpvHozylNMJZEiqG_Bt6LHKZFV7INuUu5Sn-3U5Eebw1g-lGukiaatlCr7Z8GMmKb-RqkSS-y_I2M8UgskPQDcrWG_7wxG8S764pFGBSlfvS_8JXsb6Vo_R24ePpXersxcqofveBEi4tep5rqTrnnYDaFuH0bW6i59Jxawwcfk" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary text-white px-10 py-4 font-black text-2xl italic -rotate-2 border-4 border-black shadow-2xl">
            THE HEADQUARTERS
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
