import { motion } from 'framer-motion';
import cenariosImg from '../lib/assets/icones/icones_site/Novos Icons/cenarios.png';
import experienciasImg from '../lib/assets/icones/icones_site/Novos Icons/experienciaimersiva.png';
import { useLanguage } from '../contexts/LanguageContext';

export function Ingredients() {
  const { t } = useLanguage();

  const columns = t('ingredients.columns') as any[];

  return (
    <div className="flex min-w-0 flex-col gap-16 md:gap-24">
      {/* Main Content Grid */}
      <div className="grid min-w-0 grid-cols-1 gap-14 sm:gap-16 md:grid-cols-12 md:gap-12 lg:gap-24 items-start">
        
        {/* Column 1 - Lead and Description */}
        <motion.div 
          className="col-span-1 min-w-0 md:col-span-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="max-w-lg text-[clamp(1.5rem,7vw,1.875rem)] font-bold mb-6 sm:mb-8 leading-[1.18]">
            {t('ingredients.lead')}
          </h2>
          <p className="max-w-prose text-sm md:text-base text-soft-black/70 leading-relaxed font-medium">
            {t('ingredients.description')}
          </p>
        </motion.div>

        {/* Column 2 - Reimaginação Estratégica */}
        {columns && columns[0] && (
          <motion.div 
            className="col-span-1 min-w-0 md:col-span-3 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <img src={cenariosImg} alt="" className="w-10 h-10 object-contain grayscale" />
            </div>
            <h3 className="max-w-full text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-[0.12em] sm:tracking-widest mb-5 sm:mb-6 leading-snug">
              {columns[0].title}
            </h3>
            <p className="max-w-prose text-xs md:text-sm text-soft-black/80 mb-7 sm:mb-8 leading-relaxed font-medium">
              {columns[0].subtitle}
            </p>
            <ul className="max-w-full flex flex-col gap-1 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-widest leading-relaxed text-soft-black/50">
              {columns[0].items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Column 3 - Futuros Experienciais */}
        {columns && columns[1] && (
          <motion.div 
            className="col-span-1 min-w-0 md:col-span-3 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-8">
              <img src={experienciasImg} alt="" className="w-10 h-10 object-contain grayscale" />
            </div>
            <h3 className="max-w-full text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-[0.12em] sm:tracking-widest mb-5 sm:mb-6 leading-snug">
              {columns[1].title}
            </h3>
            <p className="max-w-prose text-xs md:text-sm text-soft-black/80 mb-7 sm:mb-8 leading-relaxed font-medium">
              {columns[1].subtitle}
            </p>
            <ul className="max-w-full flex flex-col gap-1 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-widest leading-relaxed text-soft-black/50">
              {columns[1].items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}

      </div>
    </div>
  );
}
