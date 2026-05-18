import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export default function Vision() {
  const { t } = useLanguage();

  const visionItems = [
    t('about.item1'),
    t('about.item2'),
    t('about.item3'),
    t('about.item4'),
  ];

  return (
    <section id="vision" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
               {t('about.title')}
            </h2>
            <p className="text-xl text-white/60 leading-relaxed mb-12">
              {t('about.content')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {visionItems.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 glass p-4 rounded-xl border-brand-red/20 group hover:border-brand-red transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-white/90">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-brand-red/20 rounded-full blur-[100px] animate-pulse" />
            <div className="relative h-full w-full glass rounded-3xl overflow-hidden border-brand-red/30 p-1 flex items-center justify-center">
               <div className="w-4/5 h-4/5 border-2 border-brand-red/40 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border-2 border-brand-red border-dashed rounded-full animate-[spin_10s_linear_infinite_reverse]" />
               </div>
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-4xl font-black text-brand-red/50">SYSTEM</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
