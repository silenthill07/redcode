import { useLanguage } from '../../context/LanguageContext';
import { Facebook, Linkedin, Twitter, Mail, Phone, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t, dir } = useLanguage();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61589246077494' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/red-code-4692b0405/' },
    { icon: Twitter, href: 'https://x.com/RCodss' },
    { icon: MessageCircle, href: 'https://wa.me/01040159990' },
  ];

  return (
    <footer className="pt-32 pb-16 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center mb-8">
               <span className="text-2xl font-black text-white uppercase tracking-tighter">RED <span className="text-brand-red">CODE</span></span>
            </div>
            <p className="text-white/50 text-lg max-w-sm mb-8 leading-relaxed italic">
              "We are not a service… we are a system."
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                   key={i} 
                   href={social.href} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-red hover:text-white transition-all border-white/10"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
             <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-brand-red">Contact Info</h4>
             <ul className="space-y-6">
                <li className="flex items-start gap-3 group">
                   <Mail className="w-5 h-5 text-brand-red mt-1" />
                   <div>
                      <p className="text-xs uppercase text-white/40 mb-1">{t('footer.email')}</p>
                      <a href="mailto:info@redcod.online" className="text-white/80 group-hover:text-brand-red transition-colors italic">info@redcod.online</a>
                   </div>
                </li>
                <li className="flex items-start gap-4 group">
                   <Phone className="w-5 h-5 text-brand-red mt-1" />
                   <div>
                      <p className="text-xs uppercase text-white/40 mb-1">{t('footer.phone')}</p>
                      <a href="tel:01040159990" className="text-white/80 group-hover:text-brand-red transition-colors italic block">01040159990</a>
                      <a href="tel:01544412490" className="text-white/80 group-hover:text-brand-red transition-colors italic block">01544412490</a>
                   </div>
                </li>
             </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-brand-red">Quick Links</h4>
             <ul className="space-y-4">
                <li className="group flex items-center gap-2">
                   <Globe className="w-4 h-4 text-white/20 group-hover:text-brand-red transition-colors" />
                   <a href="https://redcod.online" target="_blank" className="text-white/60 group-hover:text-white transition-colors">{t('footer.web')}</a>
                </li>
                <li className="group flex items-center gap-2">
                   <div className="w-1 h-1 rounded-full bg-brand-red" />
                   <a href="https://medium.com/@redcode.s2.2025" target="_blank" className="text-white/60 group-hover:text-white transition-colors">Medium Blog</a>
                </li>
             </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-white/20 text-xs font-mono uppercase tracking-widest">
              © {currentYear} RED CODE SYSTEMS SOLUTIONS. ALL RIGHTS RESERVED.
           </p>
           <div className="flex gap-10 text-[10px] font-mono uppercase tracking-widest text-white/20">
              <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-red transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-red transition-colors italic">Deployed via Red Code Engine</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
