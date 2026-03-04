import { motion } from 'framer-motion';
import { CASES } from '@/src/constants';
import logoSimbolo from '@/src/lib/assets/logo/logo_simbolo.png';

export function Cases() {
  return (
    <div className="space-y-16">
      <h2 className="text-6xl md:text-8xl">Cases</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CASES.map((item) => (
          <motion.div
            key={item.id}
            className="group cursor-pointer"
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
                <p className="text-warm-white text-center text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-[10px] text-white rounded-full tracking-widest uppercase">
                  {item.tag}
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-neutral-gray uppercase tracking-widest">Rito</span>
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
