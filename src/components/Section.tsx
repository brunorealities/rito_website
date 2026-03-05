import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import { useTextSizes } from '../hooks/useTextSizes';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  paddingY?: number;
}

export function Section({ children, className, id, paddingY = 96 }: SectionProps) {

  return (
    <section
      id={id}
      className={cn(
        "min-h-screen w-full flex flex-col justify-center px-6 md:px-24 relative overflow-hidden",
        className
      )}
      style={{
        paddingTop: `${paddingY}px`,
        paddingBottom: `${paddingY}px`
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        className="max-w-7xl mx-auto w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
