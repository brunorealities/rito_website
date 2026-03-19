import { motion } from 'framer-motion';
import logoRito from '@/src/lib/assets/logo/logo_rito.png';
import { useLanguage } from '../contexts/LanguageContext';

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-24 py-8 flex justify-between items-center text-soft-black"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center">
        <img
          src={logoRito}
          alt="RITO"
          className="h-8 w-auto object-contain brightness-0"
        />
      </div>

      <div className="flex items-center gap-8 md:gap-12 text-[10px] uppercase tracking-widest font-bold">
        <div className="hidden md:flex items-center gap-12">
          <a href="#ingredients" className="hover:opacity-60 transition-opacity">{t('nav.about')}</a>
          <a href="#cases" className="hover:opacity-60 transition-opacity">{t('nav.portfolio')}</a>
          <a href="#como" className="hover:opacity-60 transition-opacity">{t('nav.como')}</a>
          <a href="#contato" className="hover:opacity-60 transition-opacity">{t('nav.contact')}</a>
        </div>
        
        <button 
          onClick={toggleLanguage} 
          className="hover:opacity-60 transition-opacity px-2 py-1 border border-soft-black/20 rounded-sm"
        >
          {language === 'pt' ? 'EN' : 'PT'}
        </button>
      </div>
    </motion.nav>
  );
}
