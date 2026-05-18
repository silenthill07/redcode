import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/layout/Navbar';
import InteractiveBackground from './components/canvas/InteractiveBackground';
import CustomCursor from './components/ui/CustomCursor';
import Hero from './components/sections/Hero';
import Vision from './components/sections/Vision';
import Systems from './components/sections/Systems';
import Process from './components/sections/Process';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import FloatingMessage from './components/ui/FloatingMessage';

function AppContent() {
  useLenis();
  const { dir } = useLanguage();

  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white">
      <InteractiveBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Systems />
        <Process />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <FloatingMessage />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

