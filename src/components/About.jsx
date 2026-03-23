import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    /* ── entry animations ────────────────────────── */
    const animDefs = {
      'fade-up':     { from: { y: 60, opacity: 0 },              to: { y: 0, opacity: 1 } },
      'slide-left':  { from: { x: -80, opacity: 0 },             to: { x: 0, opacity: 1 } },
      'slide-right': { from: { x: 80, opacity: 0 },              to: { x: 0, opacity: 1 } },
      'scale-up':    { from: { scale: 0.85, opacity: 0 },        to: { scale: 1, opacity: 1 } },
      'rotate-in':   { from: { y: 40, rotation: 3, opacity: 0 }, to: { y: 0, rotation: 0, opacity: 1 } },
    };

    section.querySelectorAll('[data-anim]').forEach((el) => {
      const def = animDefs[el.dataset.anim] || animDefs['fade-up'];
      const kids = el.querySelectorAll('[data-s]');
      if (kids.length) {
        gsap.set(kids, def.from);
        ScrollTrigger.create({
          trigger: el, start: 'top 88%',
          onEnter: () => gsap.to(kids, { ...def.to, duration: 0.85, ease: 'power3.out', stagger: 0.14 }),
        });
      } else {
        gsap.set(el, def.from);
        ScrollTrigger.create({
          trigger: el, start: 'top 88%',
          onEnter: () => gsap.to(el, { ...def.to, duration: 0.9, ease: 'power3.out' }),
        });
      }
    });

    /* marquee: animación CSS infinita, sin parallax GSAP */

    /* ── counters ────────────────────────────────── */
    section.querySelectorAll('[data-count]').forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      ScrollTrigger.create({
        trigger: el, start: 'top 88%',
        onEnter: () =>
          gsap.to({ val: 0 }, {
            val: target, duration: 2.2, ease: 'power2.out',
            onUpdate: function () {
              el.textContent = Math.round(this.targets()[0].val) + suffix;
            },
          }),
      });
    });

    return () => {
      ScrollTrigger.getAll()
        .filter((t) => t.trigger && section.contains(t.trigger))
        .forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative text-white uppercase"
    >
      {/* spray paint decor */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] spray-paint pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] spray-paint pointer-events-none z-0" />

      {/* marquee top (Marquee 1) */}
      <div className="overflow-hidden py-3" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}>
        <div className="about-marquee-track">
          {['BURNT PERFECTION', 'STREET SOUL', 'NIGHT LIFE', 'LIVING LOUD', 'SQUAD GOALS',
            'BURNT PERFECTION', 'STREET SOUL', 'NIGHT LIFE', 'LIVING LOUD', 'SQUAD GOALS'].map((w, i) => (
            <span key={i}>{w}&nbsp;·&nbsp;</span>
          ))}
        </div>
      </div>



      {/* ── Consolidated Vibe Check & Collage ── */}
      <section className="relative px-6 pt-16 pb-32 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-start items-start" data-anim="fade-up">
            <h1 className="text-massive flex flex-col items-start leading-none mb-12">
              <span className="text-white text-outline" data-s>THE VIBE</span>
              <span className="text-primary italic" data-s>CHECK</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-white max-w-2xl font-medium normal-case leading-relaxed mb-16" data-s>
              A raw, unfiltered look at the concrete jungle, the neon nights,
              and the burgers that fuel our soul. This is urban culture, flame-grilled.
            </p>

            {/* living loud neon block */}
            <div className="flex items-center justify-start p-4 md:p-6 bg-black/40 rounded-3xl border border-white/5 w-fit" data-anim="fade-up">
              <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter text-left leading-[0.8]">
                <span className="block drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">LIVING</span>
                <span className="block text-primary drop-shadow-[0_0_15px_rgba(230,0,0,0.9)]">LOUD</span>
              </h2>
            </div>
          </div>

          {/* RIGHT COLUMN (The Requested Stack) */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-start gap-12 pt-8 md:pt-0 w-full">
            
            {/* 1. Polaroid Fries (Left) */}
            <div className="self-start ml-2 md:ml-0 w-32 md:w-48 bg-white p-1.5 md:p-2 pb-6 md:pb-8 shadow-xl -rotate-3 border border-gray-200" data-anim="slide-right">
              <div className="w-full aspect-square overflow-hidden bg-neutral-900 mb-2">
                <img
                  className="w-full h-full object-cover transition-all duration-500"
                  alt="Loaded fries polaroid"
                  src="/assets/loaded_fries_blurred.png"
                />
              </div>
              <p className="font-handwriting text-black text-center text-xs md:text-base">LOADED FRIES</p>
            </div>

            {/* 2. Yellow Sticker (Right) */}
            <div className="self-end mr-2 md:mr-0 sticker-rotate-right bg-brandYellow text-black px-3 py-2 md:px-6 md:py-4 font-black text-sm md:text-2xl border-[3px] md:border-4 border-black shadow-2xl" data-anim="slide-left">
              STAY HUNGRY / STAY WILD
            </div>

            {/* 3. Girl Model (Left) */}
            <div className="self-start ml-2 md:ml-0 w-32 md:w-48 aspect-square relative flex items-center justify-center" data-anim="slide-right">
              <img
                className="w-full h-full object-contain mix-blend-screen drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                alt="Model eating burger"
                src="/assets/vicio-model-transparent.png"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats (transparent) ── */}
      <section
        className="relative py-24 text-center"
        style={{ background: 'transparent' }}
        data-anim="scale-up"
      >
        <p className="text-xs font-black tracking-[0.4em] text-white/40 mb-12">BY THE NUMBERS</p>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 px-6">
          {[
            { n: '10', s: 'K+', label: 'BURGERS SMASHED' },
            { n: '24', s: 'H', label: 'DRY-AGED PROCESS' },
            { n: '100', s: '%', label: 'STREET ATTITUDE' },
            { n: '0', s: '.1', label: 'BORING MOMENTS' }
          ].map(({ n, s, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span
                className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-black text-primary leading-none"
                data-count={n}
                data-suffix={s}
              >{n + s}</span>
              <span className="text-[10px] font-black tracking-widest text-white/60 uppercase">{label}</span>
            </div>
          ))}
        </div>
      </section>


    </section>
  );
}
