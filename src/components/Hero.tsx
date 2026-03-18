import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import logoRito from '@/src/lib/assets/logo/logo_rito.png';
import logoSymbolRito from '@/src/lib/assets/logo/logo_simbolo.png';
import marcasImg from '@/src/lib/assets/logo/marcas para o site.png';

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center pb-32">
      {/* Main grid layout */}
      <div className="grid grid-cols-12 gap-6 items-center px-6 md:px-24">

        {/* LEFT COLUMN - Title + Buttons */}
        <div className="col-span-12 md:col-span-6">
          <motion.h1
            className="font-bold mb-10 leading-none"
            style={{
              fontSize: 'clamp(40px, 5.5vw, 80px)',
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t('hero.title')}
          </motion.h1>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="#contato"
              className="px-8 py-4 bg-soft-black text-warm-white rounded-full text-xs font-medium hover:bg-opacity-80 transition-all inline-block"
            >
              {t('hero.cta1')}
            </a>
            <a
              href="#cases"
              className="px-8 py-4 bg-[#DFD8CC] text-soft-black rounded-full text-xs font-medium hover:bg-opacity-80 transition-all border-none inline-block"
            >
              {t('hero.cta2')}
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - Icon + Description text */}
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col items-start justify-center mt-12 md:mt-0">
          <motion.div
            className="w-20 h-20 bg-soft-black flex items-center justify-center rounded-xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={logoSymbolRito}
              alt="RITO"
              className="h-6 w-auto object-contain brightness-0 invert"
            />
          </motion.div>

          <motion.p
            className="uppercase tracking-widest leading-relaxed text-soft-black/80 font-medium"
            style={{ fontSize: 'clamp(10px, 1.1vw, 12px)', maxWidth: '320px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>
      </div>

      {/* Bottom Footer Bar (Absolute) */}
      <motion.div
        className="absolute bottom-12 left-0 w-full px-6 md:px-24 flex flex-col gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] text-soft-black/40 uppercase tracking-widest font-bold">
          <div className="mb-4 md:mb-0">
            {t('hero.since')}
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-14">
            <span>{t('hero.art')}</span>
            <span>{t('hero.design')}</span>
            <span>{t('hero.technology')}</span>
            <span>{t('hero.futures')}</span>
          </div>
        </div>

        <div className="w-full">
          <img
            src={marcasImg}
            alt="Partners"
            className="w-full h-auto object-contain brightness-0 opacity-60"
          />
        </div>
      </motion.div>
    </div>
  );
}
