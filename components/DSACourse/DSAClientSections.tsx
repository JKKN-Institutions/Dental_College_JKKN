'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ===== CSS KEYFRAMES FOR ALL DSA PAGE ANIMATIONS ===== */
export function DSAStyles() {
  return (
    <style>{`
      @keyframes dsa-marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
      @keyframes dsa-wa-pulse{0%,100%{box-shadow:0 4px 20px rgba(37,211,102,0.4)}50%{box-shadow:0 4px 20px rgba(37,211,102,0.4),0 0 0 12px rgba(37,211,102,0.1)}}
      @keyframes dsa-shimmer{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
      @keyframes dsa-blink{0%,100%{opacity:1}50%{opacity:0.3}}
      @keyframes dsa-cta-pulse{0%,100%{box-shadow:0 4px 20px rgba(234,179,8,0.3),inset 0 1px 0 rgba(255,255,255,0.2)}50%{box-shadow:0 4px 30px rgba(234,179,8,0.5),0 0 40px rgba(234,179,8,0.2),inset 0 1px 0 rgba(255,255,255,0.2)}}
      @keyframes dsa-urgency-pulse{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(251,191,36,0.7)}50%{opacity:0.8;box-shadow:0 0 0 6px rgba(251,191,36,0)}}
    `}</style>
  );
}

/* ===== SCROLL PROGRESS BAR ===== */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[9999]"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #006837, #facc15, #7CB983)',
        transition: 'width 0.1s linear',
      }}
    />
  );
}

/* ===== REVEAL ON SCROLL (Fade Up) ===== */
export function RevealOnScroll({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ===== SCALE ON SCROLL ===== */
export function ScaleOnScroll({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ===== MARQUEE TRUST BAR ===== */
export function MarqueeTrustBar({
  items,
}: {
  items: { emoji: string; text: string }[];
}) {
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#FBFBEE] border-y border-gray-200 py-4 overflow-hidden">
      <div
        className="flex gap-12 w-max"
        style={{ animation: 'dsa-marquee 25s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-gray-500"
          >
            <span>{item.emoji}</span> {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== ANIMATED COUNTER ===== */
export function AnimatedCounter({
  value,
  suffix = '',
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = value > 500 ? 2 : 1.5;
      const controls = animate(0, value, {
        duration,
        ease: [0, 0, 0.2, 1],
        onUpdate: (v) => setDisplayValue(Math.floor(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {value >= 1000 ? displayValue.toLocaleString() : displayValue}
      {suffix}
    </span>
  );
}

/* ===== FAQ ACCORDION ===== */
export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-[740px] mx-auto">
      {items.map((item, i) => {
        const isActive = activeIndex === i;
        return (
          <div
            key={i}
            className={cn(
              'border rounded-xl mb-2.5 overflow-hidden transition-all bg-white',
              isActive
                ? 'border-[#7CB983] shadow-sm'
                : 'border-gray-200 hover:border-[#7CB983]'
            )}
          >
            <button
              onClick={() => setActiveIndex(isActive ? -1 : i)}
              className="w-full flex items-center justify-between py-[18px] px-[22px] text-left text-[15px] font-bold text-gray-800 bg-white cursor-pointer border-none"
            >
              {item.question}
              <span
                className={cn(
                  'w-7 h-7 rounded-lg flex items-center justify-center text-xs transition-all duration-300 shrink-0 ml-3',
                  isActive
                    ? 'bg-[#006837] text-white rotate-180'
                    : 'bg-gray-100'
                )}
              >
                &#9660;
              </span>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-[400ms] ease-in-out"
              style={{ maxHeight: isActive ? '200px' : '0' }}
            >
              <div className="px-[22px] pb-[18px] text-sm text-gray-500 leading-[1.7]">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ===== MOBILE STICKY CTA BAR ===== */
export function MobileStickyBarCTA({
  phone,
  whatsappUrl,
}: {
  phone: string;
  whatsappUrl: string;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/[0.92] backdrop-blur-2xl py-3 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-[200] border-t border-black/[0.06] block md:hidden">
      <div className="flex gap-2.5">
        <a
          href={`tel:+91${phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-[13px] rounded-lg font-bold text-sm text-white no-underline"
          style={{ background: 'linear-gradient(135deg, #006837, #1B5E20)' }}
        >
          Call Now
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-[13px] rounded-lg font-bold text-sm text-white bg-[#25d366] no-underline"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

/* ===== WHATSAPP FLOATING BUTTON ===== */
export function WhatsAppFloat({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-6 md:bottom-6 md:right-8 z-[300] w-[58px] h-[58px] bg-[#25d366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] no-underline transition-all hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)]"
      style={{ animation: 'dsa-wa-pulse 2s infinite' }}
    >
      <svg className="w-[30px] h-[30px] fill-white" viewBox="0 0 32 32">
        <path d="M16.004 2.667c-7.364 0-13.337 5.973-13.337 13.337 0 2.353.613 4.654 1.778 6.686L2.667 29.333l6.842-1.795a13.28 13.28 0 006.495 1.696c7.364 0 13.337-5.973 13.337-13.337S23.368 2.667 16.004 2.667zm7.76 18.84c-.326.917-1.913 1.755-2.635 1.867-.722.112-1.374.48-4.63-.963-3.257-1.444-5.306-4.77-5.466-4.993-.16-.223-1.308-1.74-1.308-3.318s.828-2.354 1.122-2.676c.294-.322.642-.402.856-.402s.428.006.616.011c.198.006.464-.075.726.554.27.643.913 2.228.993 2.388.08.16.134.348.027.562-.107.214-.16.348-.32.535-.16.188-.338.42-.482.562-.16.16-.326.334-.14.654.187.32.83 1.37 1.782 2.22 1.225 1.092 2.258 1.43 2.578 1.59.32.16.507.134.694-.08.187-.214.802-.936 1.015-1.258.214-.322.428-.268.722-.16.294.107 1.866.88 2.186 1.04.32.16.535.24.615.374.08.134.08.776-.246 1.693z" />
      </svg>
    </a>
  );
}
