import { motion } from 'framer-motion';
import { INGREDIENTS } from '@/src/constants';
import arteImg from '@/src/lib/assets/icones/icones_site/Novos Icons/arte.png';
import techImg from '@/src/lib/assets/icones/icones_site/Novos Icons/tecnologia.png';
import designImg from '@/src/lib/assets/icones/icones_site/Novos Icons/design.png';
import futureImg from '@/src/lib/assets/icones/icones_site/Novos Icons/estudosdefuturos.png';

export function Ingredients() {
  return (
    <div className="grid grid-cols-12 gap-12">
      <div className="col-span-12 md:col-span-8">
        <h2 className="text-5xl md:text-7xl mb-4">Ingredientes</h2>
        <p className="text-xl text-neutral-gray mb-16 max-w-none">Quatro dimensões que se entrelaçam em cada projeto que a gente cria.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {INGREDIENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              className="p-8 bg-white/40 backdrop-blur-sm border border-black/5 rounded-2xl hover:bg-white/60 transition-colors group"
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                {item.id === 'arte' && <img src={arteImg} alt="Arte" className="w-12 h-12 object-contain" />}
                {item.id === 'tecnologia' && <img src={techImg} alt="Tecnologia" className="w-12 h-12 object-contain" />}
                {item.id === 'design' && <img src={designImg} alt="Design" className="w-12 h-12 object-contain" />}
                {item.id === 'futuros' && <img src={futureImg} alt="Estudos de Futuros" className="w-12 h-12 object-contain" />}
              </div>
              <h3 className="text-2xl mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-gray leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
