import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="grid grid-cols-12 gap-6 items-center">
      <div className="col-span-12 md:col-span-8">
        <motion.h1 
          className="text-6xl md:text-8xl leading-[0.9] mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Tecnologias de reimaginação para organizações que precisam decidir no presente.
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-neutral-gray max-w-xl mb-12 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Experiências imersivas para vivenciar cenários complexos, criar memória de futuros e mover cultura.
        </motion.p>
        <div className="flex flex-wrap gap-4">
          <motion.button
            className="px-8 py-4 bg-soft-black text-warm-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Quero desenhar uma experiência
          </motion.button>
          <motion.button
            className="px-8 py-4 border border-soft-black text-soft-black rounded-full text-sm font-medium hover:bg-soft-black hover:text-warm-white transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Cases
          </motion.button>
        </div>
      </div>
      
      <div className="col-span-12 mt-24 flex justify-between items-end text-[10px] uppercase tracking-widest text-neutral-gray opacity-50">
        <span>Desde 2016</span>
        <span>Estudos de Futuros</span>
        <span>Arte</span>
        <span>Design</span>
        <span>Tecnologia</span>
      </div>
    </div>
  );
}
