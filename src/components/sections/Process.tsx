import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Target, 
  Database, 
  Zap, 
  CheckCircle, 
  TrendingUp 
} from 'lucide-react';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    { title: t('workflow.step1'), icon: Target, desc: 'Sourcing the right traffic.' },
    { title: t('workflow.step2'), icon: Database, desc: 'Centralizing intelligence.' },
    { title: t('workflow.step3'), icon: Zap, desc: 'Reducing manual friction.' },
    { title: t('workflow.step4'), icon: CheckCircle, desc: 'Maximizing transaction rate.' },
    { title: t('workflow.step5'), icon: TrendingUp, desc: 'Expanding the system.' },
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            {t('workflow.title')}
          </motion.h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Connecting Line Desktop */}
          <div className="hidden lg:block absolute top-[70px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red/30 to-transparent -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center group"
              >
                <div className="relative mb-8 flex justify-center">
                   <div className="w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500 relative z-20">
                      <step.icon className="w-7 h-7 text-brand-red group-hover:text-white transition-colors" />
                   </div>
                   <div className="absolute top-0 w-16 h-16 rounded-full bg-brand-red blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                   
                   <div className="absolute top-1/2 -right-6 hidden lg:block text-brand-red/20 group-last:hidden">
                      <div className="w-12 h-[1px] bg-brand-red/50 animate-pulse" />
                   </div>
                </div>

                <div className="glass p-6 rounded-2xl border-white/5 group-hover:border-brand-red/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-red transition-colors">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3D Flow Decorative Element */}
        <div className="mt-32 h-[300px] glass rounded-[40px] border-white/5 relative flex items-center justify-center overflow-hidden">
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="absolute w-[800px] h-[800px] border-4 border-brand-red/5 border-dashed rounded-full"
           />
           <div className="relative z-10 text-center px-6">
              <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 italic">
                The <span className="text-brand-red">Continuous</span> Growth Loop
              </h4>
              <p className="text-white/40 max-w-xl mx-auto italic">
                "Our systems don't just work; they evolve. As your data grows, the intelligence scales, making every subsequent acquisition cheaper and more effective."
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
