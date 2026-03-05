import { motion } from 'framer-motion';
import { CASES } from '../constants';
import logoSimbolo from '../lib/assets/logo/logo_simbolo.png';
import { useTextSizes } from '../hooks/useTextSizes';

export function Cases() {
  const {
    sectionTitle, sectionTitleMaxWidth, sectionTitleLineHeight, sectionAlign,
    bodyText, bodyMaxWidth, bodyLineHeight,
    metaText, metaLetterSpacing
  } = useTextSizes();

  return (
    <div
      className="space-y-16"
      style={{ textAlign: sectionAlign as any }}
    >
      <h2
        className="md:leading-tight"
        style={{
          fontSize: `${sectionTitle}px`,
          lineHeight: sectionTitleLineHeight,
          maxWidth: `${sectionTitleMaxWidth}px`,
          marginLeft: sectionAlign === 'left' ? '0' : 'auto',
          marginRight: sectionAlign === 'right' ? '0' : 'auto'
        }}
      >
        Cases
      </h2>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${sectionAlign === 'center' ? 'justify-items-center' : sectionAlign === 'right' ? 'justify-items-end' : ''}`}>
        {CASES.map((item) => (
          <motion.div
            key={item.id}
            className="group cursor-pointer text-left w-full"
            whileHover={{ y: -10 }}
          >
            <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-soft-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
                <p
                  className="text-warm-white text-center font-light leading-relaxed"
                  style={{
                    fontSize: `${bodyText}px`,
                    lineHeight: bodyLineHeight,
                    maxWidth: `${bodyMaxWidth}px`
                  }}
                >
                  {item.description}
                </p>
              </div>
              <div className="absolute top-4 left-4">
                <span
                  className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full tracking-widest uppercase"
                  style={{
                    fontSize: `${metaText}px`,
                    letterSpacing: `${metaLetterSpacing}px`
                  }}
                >
                  {item.tag}
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <span
                className="text-neutral-gray uppercase tracking-widest"
                style={{
                  fontSize: `${metaText}px`,
                  letterSpacing: `${metaLetterSpacing}px`
                }}
              >
                Rito
              </span>
              <h3 className="text-xl leading-tight group-hover:underline underline-offset-4 decoration-1">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-12 flex justify-center opacity-30">
        <img src={logoSimbolo} alt="" className="w-16 h-16 object-contain" />
      </div>
    </div>
  );
}
