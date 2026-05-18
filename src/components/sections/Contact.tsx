import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[60px] p-10 md:p-24 border-brand-red/20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 skew-x-12 -z-10" />
          
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-black mb-8 leading-tight uppercase italic"
              >
                {t('contact.title').split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? 'text-brand-red' : ''}>{word} </span>
                ))}
              </motion.h2>

              <div className="space-y-6 mb-12">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center border-brand-red/40 overflow-hidden flex-shrink-0">
                       <CheckCircle className="w-5 h-5 text-brand-red" />
                    </div>
                    <p className="text-white/60 text-lg">Detailed system assessment upon inquiry.</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center border-brand-red/40 overflow-hidden flex-shrink-0">
                       <CheckCircle className="w-5 h-5 text-brand-red" />
                    </div>
                    <p className="text-white/60 text-lg">Scalability roadmap for your business model.</p>
                 </div>
              </div>

              <div className="flex items-center gap-6">
                 <div className="p-4 glass rounded-2xl">
                    <Send className="w-8 h-8 text-brand-red animate-pulse" />
                 </div>
                 <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
                    Ready to deploy?
                 </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-brand-red/10 blur-xl rounded-[40px] -z-10" />
              <div className="w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSc-T3ykQdfDNHnoJ6d4o1syAu1NHnCDn3vvBdVEmGox82kJRQ/viewform?embedded=true" 
                  width="100%" 
                  height="100%" 
                  frameBorder={0} 
                  marginHeight={0} 
                  marginWidth={0}
                  className="w-full h-full"
                >
                  Loading…
                </iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
