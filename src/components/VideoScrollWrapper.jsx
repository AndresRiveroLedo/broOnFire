import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 192;
const START_FRAME = 45; // Skip first static frames
const framePath = (i) =>
  `/assets/about-frames/frame_${String(i).padStart(4, '0')}.jpg`;

export default function VideoScrollWrapper({ children }) {
  const wrapperRef        = useRef(null);
  const canvasRef         = useRef(null);
  const canvasContainerRef = useRef(null);
  const loaderBarRef      = useRef(null);
  const loaderWrapRef     = useRef(null);
  const framesRef         = useRef([]);
  const rafRef            = useRef(null);
  const targetRef         = useRef(START_FRAME);
  const currentRef        = useRef(START_FRAME);

  useEffect(() => {
    const wrapper   = wrapperRef.current;
    const canvas    = canvasRef.current;
    const container = canvasContainerRef.current;
    const ctx       = canvas.getContext('2d');
    const dpr       = window.devicePixelRatio || 1;

    /* ── canvas sizing ───────────────────────────── */
    const resize = () => {
      canvas.width        = window.innerWidth  * dpr;
      canvas.height       = window.innerHeight * dpr;
      canvas.style.width  = window.innerWidth  + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      draw(currentRef.current);
    };

    /* ── cover-fill draw ─────────────────────────── */
    const draw = (idx) => {
      const img = framesRef.current[idx];
      if (!img) return;
      const cw    = window.innerWidth;
      const ch    = window.innerHeight;
      const ratio = img.naturalWidth / img.naturalHeight;
      let dw = cw, dh = cw / ratio;
      if (dh < ch) { dh = ch; dw = ch * ratio; }
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    };

    /* ── RAF render loop ─────────────────────────── */
    const loop = () => {
      rafRef.current = requestAnimationFrame(loop);
      if (currentRef.current !== targetRef.current) {
        currentRef.current = targetRef.current;
        draw(currentRef.current);
      }
    };

    /* ── frame preload ───────────────────────────── */
    const loadFrames = () => {
      const arr = new Array(TOTAL_FRAMES).fill(null);
      framesRef.current = arr;
      let loaded = 0;

      const onLoad = (i, img) => {
        arr[i] = img;
        loaded++;
        const pct = Math.round((loaded / TOTAL_FRAMES) * 100);
        if (loaderBarRef.current) loaderBarRef.current.style.width = pct + '%';
        if (loaded === TOTAL_FRAMES) {
          gsap.to(loaderWrapRef.current, {
            opacity: 0, duration: 0.4,
            onComplete: () => {
              if (loaderWrapRef.current) loaderWrapRef.current.style.display = 'none';
            },
          });
        }
      };

      for (let i = 0; i < 10; i++) {
        const img = new Image();
        img.onload = () => onLoad(i, img);
        img.src = framePath(i + 1);
      }

      let batch = 10;
      const nextBatch = () => {
        if (batch >= TOTAL_FRAMES) return;
        const end = Math.min(batch + 20, TOTAL_FRAMES);
        for (let i = batch; i < end; i++) {
          const img = new Image();
          img.onload = () => onLoad(i, img);
          img.src = framePath(i + 1);
        }
        batch = end;
        if (batch < TOTAL_FRAMES) setTimeout(nextBatch, 16);
      };
      setTimeout(nextBatch, 50);
    };

    resize();
    window.addEventListener('resize', resize);
    loadFrames();
    loop();

    /* ── GSAP pin: canvas fijo mientras scrolleas ─ */
    // pin: canvasContainer se queda pegado en top:0
    // mientras el wrapper se scrollea completamente
    ScrollTrigger.create({
      trigger: wrapper,
      start: 'top top',
      end: 'bottom bottom',
      pin: container,
      pinSpacing: false,  // el contenido no se desplaza extra
      scrub: true,
      onUpdate: (self) => {
        // frames terminan al 55 % del recorrido total
        targetRef.current = START_FRAME + Math.min(
          Math.round((self.progress / 0.55) * (TOTAL_FRAMES - 1 - START_FRAME)),
          TOTAL_FRAMES - 1 - START_FRAME,
        );
      },
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      ScrollTrigger.getAll()
        .filter((t) => t.trigger === wrapper)
        .forEach((t) => t.kill());
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">

      {/* barra de carga fina en el top */}
      <div
        ref={loaderWrapRef}
        className="fixed top-0 left-0 w-full pointer-events-none"
        style={{ zIndex: 9999 }}
      >
        <div className="h-[3px] bg-neutral-800 w-full">
          <div
            ref={loaderBarRef}
            className="h-full bg-primary transition-[width] duration-100"
            style={{ width: '0%' }}
          />
        </div>
      </div>

      {/* canvas — pinned por GSAP, cubre 100vh ─────── */}
      <div
        ref={canvasContainerRef}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'relative',   // GSAP lo cambia a fixed al pinear
          overflow: 'hidden',
          background: '#000',
          zIndex: 0,
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, display: 'block' }}
        />
        {/* vignette para legibilidad del texto */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.65) 100%)',
          }}
        />
      </div>

      {/* contenido: se scrollea sobre el canvas ────── */}
      <div
        className="relative"
        style={{
          zIndex: 10,
          marginTop: '-100vh',  // empieza en la misma posición que el canvas
        }}
      >
        {children}
      </div>

    </div>
  );
}
