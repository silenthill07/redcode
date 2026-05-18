import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'Vision',
    'nav.services': 'Systems',
    'nav.workflow': 'Process',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'hero.headline': 'We Don’t Sell Services… We Build Systems',
    'hero.subheadline': 'We combine technology and management to build scalable growth systems',
    'hero.cta.start': 'Start Your System',
    'hero.cta.cases': 'View Case Studies',
    'floating.message': 'If you\'re looking for ads… we’re not for you. If you\'re looking for a SYSTEM… let’s talk.',
    'about.title': 'Our Vision',
    'about.content': 'We don’t offer traditional marketing. We build full systems that integrate clients acquisition, management, and conversion points into a cohesive growth engine.',
    'about.item1': 'Clients acquisition',
    'about.item2': 'CRM systems',
    'about.item3': 'Automation',
    'about.item4': 'Sales optimization',
    'services.title': 'System Modules',
    'services.subtitle': 'Integrated solutions designed for scale',
    'services.web': 'Web & App Development',
    'services.ecommerce': 'E-commerce Systems',
    'services.crm': 'CRM & Sales Systems',
    'services.marketing': 'Digital Marketing Systems',
    'services.whatsapp': 'WhatsApp Automation',
    'services.ai': 'AI & Automation Solutions',
    'services.design': 'UI/UX Design',
    'workflow.title': 'System Flow',
    'workflow.step1': 'Attract Clients',
    'workflow.step2': 'Capture Data',
    'workflow.step3': 'Automate Follow-ups',
    'workflow.step4': 'Convert to Sales',
    'workflow.step5': 'Scale',
    'cases.title': 'Case Studies',
    'contact.title': 'Build Your System Today',
    'footer.email': 'Email',
    'footer.phone': 'Phone',
    'footer.web': 'Website',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'رؤيتنا',
    'nav.services': 'الأنظمة',
    'nav.workflow': 'آلية العمل',
    'nav.portfolio': 'الأعمال',
    'nav.contact': 'تواصل معنا',
    'hero.headline': 'إحنا مش خدمة… إحنا نظام',
    'hero.subheadline': 'دمج بين التكنولوجيا والإدارة لبناء أنظمة تحقق نمو حقيقي',
    'hero.cta.start': 'ابدأ نظامك الآن',
    'hero.cta.cases': 'عرض دراسات الحالة',
    'floating.message': 'لو عايز إعلان… إحنا مش ليك. لو عايز نظام… لازم نتكلم.',
    'about.title': 'رؤيتنا',
    'about.content': 'نحن لا نقدم تسويقاً تقليدياً. نحن نبني أنظمة كاملة تدمج جذب العملاء، والإدارة، ونقاط التحويل في محرك نمو متماسك.',
    'about.item1': 'جذب العملاء',
    'about.item2': 'أنظمة CRM',
    'about.item3': 'الأتمتة',
    'about.item4': 'تحسين المبيعات',
    'services.title': 'وحدات النظام',
    'services.subtitle': 'حلول متكاملة مصممة للتوسع',
    'services.web': 'تطوير المواقع والتطبيقات',
    'services.ecommerce': 'أنظمة التجارة الإلكترونية',
    'services.crm': 'أنظمة CRM والمبيعات',
    'services.marketing': 'أنظمة التسويق الرقمي',
    'services.whatsapp': 'أتمتة الواتساب',
    'services.ai': 'حلول الذكاء الاصطناعي والأتمتة',
    'services.design': 'تصميم واجهة وتجربة المستخدم',
    'workflow.title': 'تدفق النظام',
    'workflow.step1': 'جذب العملاء',
    'workflow.step2': 'جمع البيانات',
    'workflow.step3': 'أتمتة المتابعة',
    'workflow.step4': 'التحويل لمبيعات',
    'workflow.step5': 'التوسع',
    'cases.title': 'دراسات الحالة',
    'contact.title': 'ابدأ بناء نظامك الآن',
    'footer.email': 'البريد الإلكتروني',
    'footer.phone': 'الهاتف',
    'footer.web': 'الموقع',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
