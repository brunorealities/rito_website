import { motion } from 'framer-motion';
import { STEPS } from '@/src/constants';
import sinaisImg from '@/src/lib/assets/icones/icones_site/Novos Icons/sinais.png';
import cenariosImg from '@/src/lib/assets/icones/icones_site/Novos Icons/cenarios.png';
import prototipagemImg from '@/src/lib/assets/icones/icones_site/Novos Icons/prototipagemnarrativa.png';
import experienciaImg from '@/src/lib/assets/icones/icones_site/Novos Icons/experienciaimersiva.png';

export function HowWeWork() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'sinais': return sinaisImg;
      case 'cenarios': return cenariosImg;
      case 'prototipagem': return prototipagemImg;
      case 'experiencia': return experienciaImg;
      default: return null;
    }
  };

  return (
    <div className="grid grid-cols-12 gap-12">
      <div className="col-span-12 md:col-span-5">
        <h2 className="text-6xl md:text-8xl leading-tight mb-8">Como a gente trabalha</h2>
        <p className="text-xl text-neutral-gray font-light leading-relaxed max-w-md mb-12">
          Nossa metodologia combina futurologia, design especulativo e facilitação imersiva para transformar organizações que precisam decidir hoje sobre o amanhã.
        </p>
        <button className="px-8 py-4 bg-neutral-gray/20 text-soft-black rounded-full text-sm font-medium hover:bg-neutral-gray/30 transition-all">
          Quero desenhar uma experiência
        </button>
      </div>

      <div className="col-span-12 md:col-span-7 space-y-12">
        {STEPS.map((step, idx) => (
          <motion.div
            key={step.id}
            className="flex gap-8 group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl font-serif italic text-neutral-gray/40 group-hover:text-soft-black transition-colors">
                {step.number}
              </span>
              {idx !== STEPS.length - 1 && (
                <div className="w-px h-full bg-neutral-gray/20 mt-4 group-hover:bg-soft-black transition-colors" />
              )}
            </div>
            <div className="pb-12 flex-1">
              <div className="flex items-center gap-4 mb-4">
                <img src={getIcon(step.id)} alt={step.title} className="w-8 h-8 object-contain opacity-40 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-4xl group-hover:translate-x-2 transition-transform">{step.title}</h3>
              </div>
              <p className="text-neutral-gray max-w-lg leading-relaxed ml-12">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
