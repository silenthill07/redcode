import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink, PieChart, TrendingUp, Users2 } from 'lucide-react';
import { useRef } from 'react';

function PortfolioCard({ project, index }: { project: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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

  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-full"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="glass rounded-[40px] p-8 border-white/5 group-hover:border-brand-red/40 transition-all duration-500 flex flex-col h-full overflow-hidden shadow-2xl"
      >
         <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
         
         <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red glass px-3 py-1 rounded-full border-brand-red/20">{project.category}</span>
            <Icon className="w-6 h-6 text-white/30" />
         </div>

         <h3 className="text-2xl font-black mb-6 group-hover:text-brand-red transition-colors">{project.title}</h3>
         
         <div className="space-y-4 flex-grow">
            <div style={{ transform: "translateZ(30px)" }}>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Problem</p>
                <p className="text-sm text-white/70">{project.problem}</p>
            </div>
            <div style={{ transform: "translateZ(40px)" }}>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">System Solution</p>
                <p className="text-sm text-brand-red/90 font-medium italic">{project.solution}</p>
            </div>
         </div>

         <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
            {Object.entries(project.results).map(([key, val], idx) => (
                <div key={idx} style={{ transform: "translateZ(20px)" }}>
                   <p className="text-[10px] uppercase tracking-tighter text-white/30 mb-1">{key}</p>
                   <p className="text-xl font-black text-white">{val as string}</p>
                </div>
            ))}
         </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const { t } = useLanguage();

  const cases = [
    {
      title: 'Real Estate Power System',
      category: 'Real Estate',
      problem: 'Inefficient lead tracking and slow response times.',
      solution: 'Automated CRM pipeline with WhatsApp AI integration.',
      results: { leads: '+150%', revenue: '+40%' },
      icon: Users2
    },
    {
      title: 'E-commerce Scale Engine',
      category: 'E-commerce',
      problem: 'High cart abandonment and stagnant growth.',
      solution: 'Full funnel optimization + retargeting automation.',
      results: { sales: '+85%', roi: '5.2x' },
      icon: TrendingUp
    },
    {
      title: 'Medical Growth Network',
      category: 'Medical',
      problem: 'Appointment no-shows and manual booking friction.',
      solution: 'Smart booking system with automated reminders.',
      results: { bookings: '+60%', noshows: '-45%' },
      icon: PieChart
    }
  ];

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              {t('cases.title')}
            </motion.h2>
            <p className="text-xl text-white/50 max-w-xl">
              Proven systems deployed across multiple industries. We deliver results, not just promises.
            </p>
          </div>
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
          >
             <button className="px-8 py-3 glass rounded-full font-bold hover:bg-brand-red transition-all flex items-center gap-2">
                All Case Studies <ExternalLink className="w-4 h-4" />
             </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cases.map((project, i) => (
            <PortfolioCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
