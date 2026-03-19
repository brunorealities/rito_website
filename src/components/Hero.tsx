import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useTextSizes } from '../hooks/useTextSizes';
import logoRito from '@/src/lib/assets/logo/logo_rito.png';
import logoSymbolRito from '@/src/lib/assets/logo/logo_simbolo.png';
import marcasImg from '@/src/lib/assets/logo/marcas para o site.png';

export function Hero() {
  const { t } = useLanguage();
  const {
    heroTitleSizeMin, heroTitleSizeVw, heroTitleSizeMax, heroTitleMaxWidth,
    heroTitleLineHeight, heroTitleLetterSpacing, heroMarginBottom,
    heroLeftColSpan, heroRightColSpan, heroIconSize, heroSubtitleMarginTop,
    heroSubtitle, heroSubtitleMaxWidth, heroSubtitleLineHeight,
    heroBrandsWidth, heroTitleMarginRight, heroSubtitleMarginLeft
  } = useTextSizes();

  return (
    <div className="relative min-h-[95vh] flex flex-col px-6 md:px-24 pt-32 pb-8 md:pb-12">
      
      {/* Main Content Area - flex-grow pushes footer down */}
      <div className="flex-grow flex flex-col justify-center pb-12 w-full mx-auto" style={{ maxWidth: '95%' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          
          {/* LEFT COLUMN - Title + Buttons */}
          <div 
            className={`md:col-span-${heroLeftColSpan} flex flex-col items-start pr-0`}
            style={{ paddingRight: `${heroTitleMarginRight}px` }}
          >
            <motion.h1
              className="font-bold text-soft-black w-full"
              style={{
                fontSize: `clamp(${heroTitleSizeMin}px, ${heroTitleSizeVw}vw, ${heroTitleSizeMax}px)`,
                letterSpacing: `${heroTitleLetterSpacing}em`,
                lineHeight: heroTitleLineHeight,
                maxWidth: `${heroTitleMaxWidth}px`,
                marginBottom: `${heroMarginBottom}px`
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: typeof t('hero.title') === 'string' 
                          ? (t('hero.title') as string).replace(' de ', '<br/>de ') 
                          : t('hero.title') 
                }} 
              />
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-4 w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a
                href="#contato"
                className="px-8 md:px-10 py-4 bg-soft-black text-warm-white rounded-full text-xs font-medium hover:bg-opacity-80 transition-all inline-block"
              >
                {t('hero.cta1')}
              </a>
              <a
                href="#cases"
                className="px-8 py-4 bg-[#DFD8CC] text-soft-black rounded-full text-xs font-medium hover:bg-opacity-80 transition-all border-none inline-block shadow-sm"
              >
                {t('hero.cta2')}
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Icon + Description text */}
          <div 
            className={`col-span-12 md:col-span-${heroRightColSpan} flex flex-col items-start justify-center`}
            style={{ paddingTop: `${heroSubtitleMarginTop}px`, marginLeft: `${heroSubtitleMarginLeft}px` }}
          >
            <motion.div
              className="bg-soft-black flex items-center justify-center rounded-2xl mb-6 shadow-md"
              style={{ width: `${heroIconSize}px`, height: `${heroIconSize}px` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src={logoSymbolRito}
                alt="RITO"
                className="h-6 md:h-8 w-auto object-contain brightness-0 invert"
              />
            </motion.div>

            <motion.p
              className="uppercase tracking-widest font-bold text-soft-black/70"
              style={{ 
                fontSize: `${heroSubtitle}px`, 
                maxWidth: `${heroSubtitleMaxWidth}px`,
                lineHeight: heroSubtitleLineHeight
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {t('hero.subtitle')}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar (Natural Flow) */}
      <motion.div
        className="w-full flex flex-col gap-8 md:gap-12 pt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center text-[9px] md:text-[10px] text-soft-black/40 uppercase tracking-widest font-bold gap-6">
          <div>
            {t('hero.since')}
          </div>
          <div className="flex flex-wrap gap-6 md:gap-12">
            <span>{t('hero.art')}</span>
            <span>{t('hero.design')}</span>
            <span>{t('hero.technology')}</span>
            <span>{t('hero.futures')}</span>
          </div>
        </div>

        <div className="w-full flex justify-end md:justify-center">
          <img
            src={marcasImg}
            alt="Partners"
            className="h-auto object-contain brightness-0 opacity-[0.65] max-w-none"
            style={{ width: `${heroBrandsWidth}%` }}
          />
        </div>
      </motion.div>
    </div>
  );
}
