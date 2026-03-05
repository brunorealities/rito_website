import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/src/constants';
import { useLanguage } from '../contexts/LanguageContext';

export function Testimonials() {
  const { t } = useLanguage();
  return (
    <div className="space-y-16">
      <h2 className="text-6xl md:text-8xl">{t('testimonials.title')}</h2>

      <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
        {TESTIMONIALS.map((item, index) => {
          const items = t('testimonials.items') as any[];
          const translatedItem = items && items[index] ? items[index] : item;

          return (
            <motion.div
              key={item.id}
              className="min-w-[300px] md:min-w-[450px] p-12 bg-white rounded-2xl shadow-sm snap-start flex flex-col justify-between"
            >
              <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12 text-neutral-gray italic">
                "{translatedItem.text}"
              </p>
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold mb-1">{translatedItem.author}</p>
                <p className="text-xs text-neutral-gray uppercase tracking-widest">{translatedItem.role}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
