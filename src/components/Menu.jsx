import { useState, useRef, useEffect } from 'react';

const menuItems = [
  {
    id: 1,
    name: "BRO'S CARBONARA BURGER",
    description: "Dry-aged beef burger with cheddar cheese, Italian guanciale, and our signature carbonara sauce on a brioche bun.",
    price: "15.90 €",
    video: "/assets/carbonara_woman.MOV",
    badge: "HOT AF",
    badgeStyle: "bg-brandRed text-white",
  },
  {
    id: 2,
    name: "BRO'S BACON BURGER",
    description: "Burger bun, beef patty, crispy bacon, cheddar cheese, fresh tomato slices, arugula, balsamic reduction drizzle.",
    price: "13.90 €",
    video: "/assets/bacon burger.MOV",
    badge: "TOP SELLER",
    badgeStyle: "bg-brandYellow text-black",
  },
  {
    id: 3,
    name: "BRO'S CLASSIC BURGER",
    description: "American cheese, tomato, lettuce, onions, ketchup & mustard.",
    price: "13.50 €",
    video: "/assets/classic bro burger.MOV",
    badge: null,
    badgeStyle: "",
  },
];

// Append clone of first item so the loop jump is invisible
const SLIDES = [...menuItems, { ...menuItems[0], id: 'clone-0' }];
const N = menuItems.length;

const Menu = () => {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const timerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : true
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSlide = (idx, instant = false) => {
    if (!isMobile) return;
    const slide = trackRef.current?.children[idx];
    if (slide && trackRef.current) {
      trackRef.current.scrollTo({
        left: slide.offsetLeft,
        behavior: instant ? 'instant' : 'smooth'
      });
    }
  };

  const advance = () => {
    setActive(prev => prev + 1);
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    if (isMobile) {
      timerRef.current = setInterval(advance, 3600);
    }
  };

  // Boot auto-scroll
  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [isMobile]);

  // React to active changes
  useEffect(() => {
    scrollToSlide(active);

    if (active === SLIDES.length - 1 && isMobile) {
      // After smooth scroll to clone, instantly jump back to real index 0
      const reset = setTimeout(() => {
        scrollToSlide(0, true);
        setActive(0);
      }, 650);
      return () => clearTimeout(reset);
    }
  }, [active, isMobile]);

  // Dot click — pause & restart timer
  const goTo = (idx) => {
    clearInterval(timerRef.current);
    setActive(idx);
    startTimer();
  };

  const dotIdx = active % N;

  return (
    <section className="text-white relative z-10 pt-20" style={{ background: 'transparent' }}>
      <main className="px-4 md:px-10 lg:px-16 w-full mx-auto">

        {/* Hero / Title */}
        <div className="relative mb-16 text-center md:text-left">
          <h1 className="text-massive text-white text-5xl md:text-8xl">THE BRO<br /><span className="text-brandRed">MENU</span></h1>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-16 border-b border-white/20 pb-10">
          <button className="bg-brandRed text-white px-5 py-1.5 md:px-8 md:py-2 rounded-full text-base md:text-2xl hover:bg-white hover:text-brandBlack transition-colors">BURGERS</button>
          <button className="border-2 border-white px-5 py-1.5 md:px-8 md:py-2 rounded-full text-base md:text-2xl hover:bg-brandYellow hover:text-brandBlack hover:border-brandYellow transition-colors">SIDES</button>
          <button className="border-2 border-white px-5 py-1.5 md:px-8 md:py-2 rounded-full text-base md:text-2xl hover:bg-brandYellow hover:text-brandBlack hover:border-brandYellow transition-colors">BEVERAGE</button>
        </div>

        {/* ── Content area with opaque background starting here ── */}
        <div className="relative z-0 -mx-4 md:-mx-10 lg:-mx-16 px-4 md:px-10 lg:px-16 py-12" style={{ background: 'rgba(0,0,0,0.85)' }}>

        {/* ── Carousel / Grid ── */}
        <div className="relative mb-32">

          {/* Track */}
          <div
            ref={trackRef}
            className="relative flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible gap-6 snap-x snap-mandatory md:snap-none pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SLIDES.map((item, idx) => (
              <div
                key={item.id}
                className={`snap-start shrink-0 w-[70vw] sm:w-72 md:w-auto ${idx === SLIDES.length - 1 ? 'md:hidden' : ''}`}
              >
                <div
                  className={`relative border-2 transition-all duration-300 cursor-pointer rounded-xl overflow-hidden ${
                    (isMobile && dotIdx === idx % N) || !isMobile
                      ? 'border-brandRed shadow-[0_0_20px_-5px_rgba(230,0,0,0.5)]'
                      : 'border-white/20 hover:border-brandRed hover:shadow-[0_0_20px_-5px_rgba(230,0,0,0.5)]'
                  }`}
                  onClick={() => goTo(idx % N)}
                >
                  {/* Video */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        (isMobile && dotIdx === idx % N) || !isMobile ? 'grayscale-0' : 'grayscale'
                      }`}
                      src={item.video}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                    {item.badge && (
                      <div className={`absolute top-4 left-4 px-3 py-1 text-sm font-black sticker-rotate-left rounded-md ${item.badgeStyle}`}>
                        {item.badge}
                      </div>
                    )}
                    <span className="absolute bottom-4 right-4 text-3xl font-black text-white/90 drop-shadow-md">
                      {item.price}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-6 bg-black">
                    <h3 className="text-2xl leading-tight uppercase mb-2 text-brandRed font-sans font-bold">{item.name}</h3>
                    <p className="font-sans lowercase text-sm text-white/60 mb-6 leading-tight">{item.description}</p>
                    <button className="w-full border-2 border-white py-3 text-lg hover:bg-brandRed hover:border-brandRed hover:text-white transition-all font-bold uppercase tracking-wider rounded-md">
                      Add to order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex md:hidden gap-3 items-center justify-center mt-8">
            {menuItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`transition-all duration-300 ${
                  dotIdx === idx
                    ? 'w-8 h-3 bg-brandRed rounded-full'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/60 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Promo / Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32 max-w-5xl mx-auto">
          <div className="relative bg-brandRed p-8 rounded-2xl overflow-hidden h-[350px] flex flex-col justify-center shadow-lg border-2 border-brandRed transform hover:scale-[1.02] transition-transform">
            <h2 className="text-6xl md:text-7xl leading-none text-white text-outline-white mb-4 italic">BURNER<br />DEALS</h2>
            <p className="text-lg font-bold mb-6 font-sans">GET 2X FLAMING TRIPLES + LOADED FRIES FOR $30.</p>
            <button className="bg-black text-white self-start px-8 py-3 text-lg hover:bg-white hover:text-black transition-all font-bold uppercase tracking-wider rounded-md">CLAIM DEAL</button>
          </div>

          <div className="relative bg-brandOffWhite p-8 border-4 border-black rounded-2xl flex flex-col justify-center items-center text-center shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <div className="duct-tape absolute -top-4 left-1/2 -translate-x-1/2"></div>
            <h3 className="text-brandBlack text-5xl leading-none mb-4 italic">JOIN THE<br />PIT</h3>
            <p className="text-brandBlack font-sans font-bold text-xs mb-6 uppercase tracking-widest text-black/60">// DROP ALERTS & SECRET MENU</p>
            <div className="w-full flex border-2 border-black rounded-r-md rounded-l-md overflow-hidden bg-white">
              <input className="flex-grow bg-transparent p-3 text-black font-sans font-bold outline-none placeholder-black/30" placeholder="YOUR EMAIL" type="email" />
              <button className="bg-black text-white px-6 py-3 font-bold hover:bg-brandRed transition-colors uppercase tracking-wider">GO</button>
            </div>
          </div>
        </div>

        </div>
      </main>

      {/* ── Marquee 2 (reverse) - moved from About ── */}
      <div className="overflow-hidden py-3 w-full" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}>
        <div className="about-marquee-track reverse">
          {['#STREET_SOUL', 'GRILL & CHILL', 'NO FILTER', 'RAW & REAL',
            '#STREET_SOUL', 'GRILL & CHILL', 'NO FILTER', 'RAW & REAL'].map((w, i) => (
            <span key={i}>{w}&nbsp;·&nbsp;</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
