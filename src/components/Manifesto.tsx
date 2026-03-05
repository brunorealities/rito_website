import { motion } from 'framer-motion';
import logoSimbolo from '@/src/lib/assets/logo/logo_simbolo.png';
import { useLanguage } from '../contexts/LanguageContext';

export function Manifesto() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto text-center py-24">
      <motion.h2
        className="text-6xl md:text-8xl mb-16 leading-tight"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {t('manifesto.title')}
      </motion.h2>

      <div className="space-y-8 text-xl md:text-2xl text-neutral-gray font-light leading-relaxed max-w-2xl mx-auto">
        <p>
          {t('manifesto.paragraph1')}
        </p>
        <p>
          {t('manifesto.paragraph2')}
        </p>
      </div>

      <div className="mt-24 flex justify-center opacity-30">
        <img src={logoSimbolo} alt="" className="w-16 h-16 object-contain" />
      </div>
    </div>
  );
}
