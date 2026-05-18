import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Code2, 
  ShoppingCart, 
  Users, 
  Globe2, 
  MessageSquareCode, 
  Cpu, 
  Palette 
} from 'lucide-react';
import { useRef } from 'react';

function SystemCard({ service, index }: { service: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass p-8 rounded-3xl border-white/5 hover:border-brand-red/50 transition-all cursor-pointer group relative overflow-hidden"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity"
      >
         <Icon className="w-12 h-12 text-brand-red" />
      </div>
      
      <div 
        style={{ transform: "translateZ(75px)" }}
        className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors"
      >
        <Icon className="w-7 h-7 text-brand-red group-hover:text-white transition-colors" />
      </div>

      <motion.h3 
        style={{ transform: "translateZ(50px)" }}
        className="text-2xl font-bold mb-4 group-hover:text-brand-red transition-colors"
      >
        {service.title}
      </motion.h3>
      <motion.p 
        style={{ transform: "translateZ(30px)" }}
        className="text-white/50 group-hover:text-white/70 transition-colors leading-relaxed"
      >
        {service.desc}
      </motion.p>
      
      <div 
        style={{ transform: "translateZ(40px)" }}
        className="mt-8 flex items-center gap-2 text-xs font-bold text-brand-red opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 uppercase tracking-widest"
      >
        Explore Module 
        <span className="w-4 h-px bg-brand-red" />
      </div>
    </motion.div>
  );
}

export default function Systems() {
  const { t } = useLanguage();

  const services = [
    { title: t('services.web'), icon: Code2, desc: 'Advanced custom code architectures.' },
    { title: t('services.ecommerce'), icon: ShoppingCart, desc: 'High-conversion sales ecosystems.' },
    { title: t('services.crm'), icon: Users, desc: 'Lead management and optimization.' },
    { title: t('services.marketing'), icon: Globe2, desc: 'Growth strategies as systems.' },
    { title: t('services.whatsapp'), icon: MessageSquareCode, desc: 'Smart automation workflows.' },
    { title: t('services.ai'), icon: Cpu, desc: 'AI-driven business efficiency.' },
    { title: t('services.design'), icon: Palette, desc: 'Strategic futuristic UI/UX.' }
  ];

  return (
    <section id="systems" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <SystemCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
