import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const { t, language, setLanguage, dir } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.about'), href: '#vision' },
    { name: t('nav.services'), href: '#systems' },
    { name: t('nav.workflow'), href: '#process' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
        isScrolled ? 'glass py-3' : 'bg-transparent'
      )}
    >
      <div className="flex items-center">
        <span className="text-xl font-black tracking-tighter text-white uppercase">
          RED <span className="text-brand-red">CODE</span>
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-white/70 hover:text-brand-red transition-colors"
          >
            {item.name}
          </a>
        ))}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1 glass px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-brand-red hover:text-white transition-all"
        >
          <Globe className="w-3 h-3" />
          {language === 'en' ? 'العربية' : 'English'}
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center gap-4 md:hidden">
        <button onClick={toggleLanguage} className="p-2 glass rounded-full">
           <Globe className="w-4 h-4" />
        </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 glass rounded-full">
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/80"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
