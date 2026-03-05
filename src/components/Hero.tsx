import { motion } from 'framer-motion';
import { useTextSizes } from '../hooks/useTextSizes';
import marcasImg from '../lib/assets/logo/marcas para o site.png';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  const {
    heroTitle, heroTitleMaxWidth, heroTitleLineHeight, heroTitleLetterSpacing,
    heroSubtitle, heroSubtitleMaxWidth, heroSubtitleLineHeight,
    heroAlign, metaText,
    brandsMarginTop, brandsPaddingTop, brandsMaxWidth, brandsOpacity
  } = useTextSizes();

  return (
    <div
      className="grid grid-cols-12 gap-6 items-center"
      style={{ textAlign: heroAlign as any }}
    >
      <div className="col-span-12">
        <motion.h1
          className="mb-8"
          style={{
            fontSize: `${heroTitle}px`,
            lineHeight: heroTitleLineHeight,
            letterSpacing: `${heroTitleLetterSpacing}px`,
            maxWidth: `${heroTitleMaxWidth}px`,
            marginLeft: heroAlign === 'left' ? '0' : 'auto',
            marginRight: heroAlign === 'right' ? '0' : 'auto'
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          className="text-neutral-gray mb-12 font-light"
          style={{
            fontSize: `${heroSubtitle}px`,
            lineHeight: heroSubtitleLineHeight,
            maxWidth: `${heroSubtitleMaxWidth}px`,
            marginLeft: heroAlign === 'left' ? '0' : 'auto',
            marginRight: heroAlign === 'right' ? '0' : 'auto'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        <div className={`flex flex-wrap gap-4 ${heroAlign === 'center' ? 'justify-center' : heroAlign === 'right' ? 'justify-end' : 'justify-start'}`}>
          <motion.button
            className="px-8 py-4 bg-soft-black text-warm-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('hero.cta1')}
          </motion.button>
          <motion.button
            className="px-8 py-4 border border-soft-black text-soft-black rounded-full text-sm font-medium hover:bg-soft-black hover:text-warm-white transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('hero.cta2')}
          </motion.button>
        </div>
      </div>

      <div
        className="col-span-12 mt-24 flex justify-between items-end uppercase tracking-widest text-neutral-gray opacity-50 flex-wrap gap-4"
        style={{ fontSize: `${metaText}px` }}
      >
        <span>{t('hero.since')}</span>
        <span>{t('hero.futures')}</span>
        <span>{t('hero.art')}</span>
        <span>{t('hero.design')}</span>
        <span>{t('hero.technology')}</span>
      </div>

      <motion.div
        className="col-span-12 border-t border-black/5"
        style={{
          marginTop: `${brandsMarginTop}px`,
          paddingTop: `${brandsPaddingTop}px`,
          opacity: brandsOpacity,
          width: `${brandsMaxWidth}%`,
          marginLeft: heroAlign === 'left' ? '0' : 'auto',
          marginRight: heroAlign === 'right' ? '0' : 'auto'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: brandsOpacity }}
        transition={{ delay: 1 }}
      >
        <img
          src={marcasImg}
          alt="Marcas e Clientes"
          className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
        />
      </motion.div>
    </div>
  );
}
