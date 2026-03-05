import { motion } from 'framer-motion';
import { INGREDIENTS } from '../constants';
import arteImg from '../lib/assets/icones/icones_site/Novos Icons/arte.png';
import techImg from '../lib/assets/icones/icones_site/Novos Icons/tecnologia.png';
import designImg from '../lib/assets/icones/icones_site/Novos Icons/design.png';
import futureImg from '../lib/assets/icones/icones_site/Novos Icons/estudosdefuturos.png';
import { useTextSizes } from '../hooks/useTextSizes';
import { useLanguage } from '../contexts/LanguageContext';

export function Ingredients() {
  const { t } = useLanguage();
  const {
    sectionTitle, sectionTitleMaxWidth, sectionTitleLineHeight, sectionAlign,
    bodyText, bodyMaxWidth, bodyLineHeight,
    ingredientsColGap, ingredientsRowGap, sectionHeaderGap
  } = useTextSizes();

  return (
    <div
      className="grid grid-cols-12 gap-12"
      style={{ textAlign: sectionAlign as any }}
    >
      <div className="col-span-12">
        <h2
          className="mb-4"
          style={{
            fontSize: `${sectionTitle}px`,
            lineHeight: sectionTitleLineHeight,
            maxWidth: `${sectionTitleMaxWidth}px`,
            marginLeft: sectionAlign === 'left' ? '0' : 'auto',
            marginRight: sectionAlign === 'right' ? '0' : 'auto',
            marginBottom: `${sectionHeaderGap}px`
          }}
        >
          {t('ingredients.title')}
        </h2>
        <p
          className="text-xl text-neutral-gray"
          style={{
            maxWidth: `${bodyMaxWidth}px`,
            marginLeft: sectionAlign === 'left' ? '0' : 'auto',
            marginRight: sectionAlign === 'right' ? '0' : 'auto',
            marginBottom: `${sectionHeaderGap}px`
          }}
        >
          {t('ingredients.subtitle')}
        </p>

        <div
          className={`grid grid-cols-1 md:grid-cols-[minmax(0,28rem)_minmax(0,28rem)] ${sectionAlign === 'center' ? 'justify-center' : sectionAlign === 'right' ? 'justify-end' : 'justify-start'
            }`}
          style={{
            columnGap: `${ingredientsColGap}px`,
            rowGap: `${ingredientsRowGap}px`
          }}
        >
          {INGREDIENTS.map((item, index) => {
            const items = t('ingredients.items') as any[];
            const translatedItem = items && items[index] ? items[index] : item;

            return (
              <motion.div
                key={item.id}
                className="p-8 bg-white/40 backdrop-blur-sm border border-black/5 rounded-2xl hover:bg-white/60 transition-colors group text-left max-w-md w-full"
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.id === 'arte' && <img src={arteImg} alt="Arte" className="w-12 h-12 object-contain" />}
                  {item.id === 'tecnologia' && <img src={techImg} alt="Tecnologia" className="w-12 h-12 object-contain" />}
                  {item.id === 'design' && <img src={designImg} alt="Design" className="w-12 h-12 object-contain" />}
                  {item.id === 'futuros' && <img src={futureImg} alt="Estudos de Futuros" className="w-12 h-12 object-contain" />}
                </div>
                <h3 className="text-2xl mb-2">{translatedItem.title}</h3>
                <p
                  className="text-neutral-gray leading-relaxed font-light"
                  style={{
                    fontSize: `${bodyText}px`,
                    lineHeight: bodyLineHeight
                  }}
                >
                  {translatedItem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
