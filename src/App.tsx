import { Hero } from './components/Hero';
import { Ingredients } from './components/Ingredients';
import { Cases } from './components/Cases';
import { HowWeWork } from './components/HowWeWork';
import { Manifesto } from './components/Manifesto';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { Scene } from './components/canvas/Scene';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Leva } from 'leva';
import { DEBUG } from './components/canvas/Particles';

import { useTextSizes } from './hooks/useTextSizes';
import { LanguageProvider } from './contexts/LanguageContext';

function AppContent() {
  const {
    heroPadding, heroMinHeight,
    ingredientsPadding, ingredientsMinHeight,
    casesPadding, casesMinHeight,
    howWeWorkPadding, howWeWorkMinHeight,
    manifestoPadding, manifestoMinHeight,
    testimonialsPadding, testimonialsMinHeight
  } = useTextSizes();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Painel de Debug persistente no canto da tela */}
      <Leva
        hidden={!DEBUG}
        fill={false}
        flat={false}
        collapsed={false}
        theme={{
          sizes: {
            controlWidth: '160px',
            rootWidth: '380px'
          },
          colors: { accent1: '#888', accent2: '#ccc', accent3: '#eee' }
        }}
      />
      {/* Persistent WebGL Canvas */}
      <Scene />

      <main className="relative">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-soft-black origin-left z-[100]"
          style={{ scaleX }}
        />

        {/* Navigation */}
        <Navbar />

        {/* Content Sections */}
        <div className="relative z-10">
          <Section id="hero" className="pt-48" paddingY={heroPadding} minHeight={heroMinHeight}>
            <Hero />
          </Section>

          <Section id="ingredients" paddingY={ingredientsPadding} minHeight={ingredientsMinHeight}>
            <Ingredients />
          </Section>

          <Section id="cases" paddingY={casesPadding} minHeight={casesMinHeight}>
            <Cases />
          </Section>

          <Section id="como" paddingY={howWeWorkPadding} minHeight={howWeWorkMinHeight}>
            <HowWeWork />
          </Section>

          <Section id="manifesto" paddingY={manifestoPadding} minHeight={manifestoMinHeight}>
            <Manifesto />
          </Section>

          <Section id="testimonials" paddingY={testimonialsPadding} minHeight={testimonialsMinHeight}>
            <Testimonials />
          </Section>

          <Section id="cta" className="min-h-[60vh]">
            <div className="flex flex-col items-center justify-center text-center">
              <motion.h2
                className="text-4xl md:text-6xl mb-12 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Pronto para reimaginar o futuro da sua organização?
              </motion.h2>
              <motion.button
                className="px-12 py-6 bg-soft-black text-warm-white rounded-full text-lg font-medium hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quero desenhar uma experiência
              </motion.button>
            </div>
          </Section>

          <Footer />
        </div>
      </main>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
