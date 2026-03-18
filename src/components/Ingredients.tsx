import { motion } from 'framer-motion';
import cenariosImg from '../lib/assets/icones/icones_site/Novos Icons/cenarios.png';
import experienciasImg from '../lib/assets/icones/icones_site/Novos Icons/experienciaimersiva.png';
import { useLanguage } from '../contexts/LanguageContext';

export function Ingredients() {
  const { t } = useLanguage();

  const columns = t('ingredients.columns') as any[];

  return (
    <div className="flex flex-col gap-24 px-6 md:px-24">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start">
        
        {/* Column 1 - Lead and Description */}
        <motion.div 
          className="col-span-12 md:col-span-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-tight max-w-sm">
            {t('ingredients.lead')}
          </h2>
          <p className="text-sm md:text-base text-soft-black/70 leading-relaxed font-medium">
            {t('ingredients.description')}
          </p>
        </motion.div>

        {/* Column 2 - Reimaginação Estratégica */}
        {columns && columns[0] && (
          <motion.div 
            className="col-span-12 md:col-span-3 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <img src={cenariosImg} alt="" className="w-10 h-10 object-contain grayscale" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-6 leading-tight">
              {columns[0].title}
            </h3>
            <p className="text-xs md:text-sm text-soft-black/80 mb-8 leading-relaxed font-medium">
              {columns[0].subtitle}
            </p>
            <ul className="flex flex-col gap-1 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-soft-black/50">
              {columns[0].items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Column 3 - Futuros Experienciais */}
        {columns && columns[1] && (
          <motion.div 
            className="col-span-12 md:col-span-3 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-8">
              <img src={experienciasImg} alt="" className="w-10 h-10 object-contain grayscale" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-6 leading-tight">
              {columns[1].title}
            </h3>
            <p className="text-xs md:text-sm text-soft-black/80 mb-8 leading-relaxed font-medium">
              {columns[1].subtitle}
            </p>
            <ul className="flex flex-col gap-1 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-soft-black/50">
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
