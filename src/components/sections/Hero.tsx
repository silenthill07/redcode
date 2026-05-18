import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <motion.div 
        style={{ y: textY, opacity }}
        className="container mx-auto px-6 text-center z-10"
      >
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="inline-block glass px-4 py-1.5 rounded-full mb-6 border-brand-red/30"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-brand-red uppercase">
             {t('nav.services')}
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('hero.headline').split('…').map((part, i) => (
            <span key={i} className={i === 1 ? 'text-brand-red' : ''}>
              {part}{i === 0 ? '… ' : ''}
            </span>
          ))}
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('hero.subheadline')}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSc-T3ykQdfDNHnoJ6d4o1syAu1NHnCDn3vvBdVEmGox82kJRQ/viewform?usp=header" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            {t('hero.cta.start')}
          </a>
          <a 
            href="#portfolio"
            className="px-8 py-4 glass text-white font-bold rounded-full hover:border-brand-red transition-all"
          >
            {t('hero.cta.cases')}
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative vertical line */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-brand-red to-transparent"
        animate={{ height: [0, 80, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
