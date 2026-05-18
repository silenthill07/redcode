import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function FloatingMessage() {
  const { t, dir } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: dir === 'ltr' ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className={`fixed bottom-8 ${dir === 'ltr' ? 'right-8' : 'left-8'} z-40 max-w-xs`}
    >
      <div className="glass p-6 rounded-2xl red-glow border-brand-red/20 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-red/10 blur-2xl -z-10 group-hover:bg-brand-red/20 transition-all" />
        <MessageSquare className="w-6 h-6 text-brand-red mb-3" />
        <p className="text-sm font-medium text-white/90 leading-relaxed italic mb-4">
          {t('floating.message')}
        </p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSc-T3ykQdfDNHnoJ6d4o1syAu1NHnCDn3vvBdVEmGox82kJRQ/viewform?usp=header" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-bold text-brand-red hover:text-white transition-colors"
        >
          {t('hero.cta.start')} <ArrowRight className={`w-3 h-3 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
        </a>
      </div>
    </motion.div>
  );
}
