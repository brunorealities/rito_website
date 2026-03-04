import { motion } from 'framer-motion';
import logoSimbolo from '@/src/lib/assets/logo/logo_simbolo.png';

export function Manifesto() {
  return (
    <div className="max-w-4xl mx-auto text-center py-24">
      <motion.h2
        className="text-6xl md:text-8xl mb-16 leading-tight"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Mapear. Imaginar. Sistematizar. Ilustrar. Experimentar.
      </motion.h2>

      <div className="space-y-8 text-xl md:text-2xl text-neutral-gray font-light leading-relaxed max-w-2xl mx-auto">
        <p>
          Futurologia não é prever o que vai acontecer. É ampliar o campo do possível para que as organizações tomem decisões mais corajosas e mais bem fundamentadas ainda no presente.
        </p>
        <p>
          A Rito traduz esse método em experiências que o corpo e a emoção entendem antes da cabeça decidir.
        </p>
      </div>

      <div className="mt-24 flex justify-center opacity-30">
        <img src={logoSimbolo} alt="" className="w-16 h-16 object-contain" />
      </div>
    </div>
  );
}
