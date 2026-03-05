import { motion } from 'framer-motion';
import logoRito from '@/src/lib/assets/logo/logo_rito.png';
import { useLanguage } from '../contexts/LanguageContext';

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-24 py-8 flex justify-between items-center mix-blend-difference text-warm-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center">
        <img
          src={logoRito}
          alt="RITO"
          className="h-8 w-auto object-contain brightness-0 invert"
        />
      </div>

      <div className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-widest font-medium">
        <div className="flex gap-12">
          <a href="#hero" className="hover:opacity-60 transition-opacity">{t('nav.about')}</a>
          <a href="#como" className="hover:opacity-60 transition-opacity">{t('nav.process')}</a>
          <a href="#cases" className="hover:opacity-60 transition-opacity">{t('nav.work')}</a>
        </div>

        <button
          onClick={toggleLanguage}
          className="ml-4 hover:opacity-60 transition-opacity border border-warm-white/20 px-3 py-1 rounded-full cursor-pointer hover:bg-warm-white hover:text-soft-black"
        >
          {language === 'pt' ? 'EN' : 'PT'}
        </button>
      </div>
    </motion.nav>
  );
}
