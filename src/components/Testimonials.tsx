import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/src/constants';

export function Testimonials() {
  return (
    <div className="space-y-16">
      <h2 className="text-6xl md:text-8xl">O que falam de nós:</h2>
      
      <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
        {TESTIMONIALS.map((item) => (
          <motion.div
            key={item.id}
            className="min-w-[300px] md:min-w-[450px] p-12 bg-white rounded-2xl shadow-sm snap-start flex flex-col justify-between"
          >
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12 text-neutral-gray italic">
              "{item.text}"
            </p>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold mb-1">{item.author}</p>
              <p className="text-xs text-neutral-gray uppercase tracking-widest">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
