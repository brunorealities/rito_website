import { useState, useEffect } from 'react';
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
import { DEBUG } from './config/debugConfig';
import { FEATURES } from './config/features';

import { useTextSizes } from './hooks/useTextSizes';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { OceanicoPage } from './components/OceanicoPage';

export function AppContent() {
  const { t } = useLanguage();
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

  const [isOceanico, setIsOceanico] = useState(false);

  useEffect(() => {
    const checkPath = () => {
      const path = window.location.pathname.toLowerCase();
      setIsOceanico(
        path === '/oceanico' || 
        path === '/oceanico/' || 
        path.endsWith('/oceanico.html') ||
        path.endsWith('/oceanico/index.html')
      );
    };

    checkPath();

    window.addEventListener('popstate', checkPath);
    return () => {
      window.removeEventListener('popstate', checkPath);
    };
  }, []);

  if (isOceanico) {
    return <OceanicoPage />;
  }

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
          {FEATURES.showHero && (
            <Section id="hero" className="pt-48" paddingY={heroPadding} minHeight={heroMinHeight}>
              <Hero />
            </Section>
          )}

          {FEATURES.showIngredients && (
            <Section id="ingredients" paddingY={ingredientsPadding} minHeight={ingredientsMinHeight}>
              <Ingredients />
            </Section>
          )}

          {FEATURES.showCases && (
            <Section id="cases" paddingY={casesPadding} minHeight={casesMinHeight}>
              <Cases />
            </Section>
          )}

          {FEATURES.showHowWeWork && (
            <Section id="como" paddingY={howWeWorkPadding} minHeight={howWeWorkMinHeight}>
              <HowWeWork />
            </Section>
          )}

          {FEATURES.showManifesto && (
            <Section id="manifesto" paddingY={manifestoPadding} minHeight={manifestoMinHeight}>
              <Manifesto />
            </Section>
          )}

          {FEATURES.showTestimonials && (
            <Section id="testimonials" paddingY={testimonialsPadding} minHeight={testimonialsMinHeight}>
              <Testimonials />
            </Section>
          )}

          {FEATURES.showContact && (
            <Section id="contato" className="min-h-[60vh] bg-[#F4F1ED]">
              <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto py-24">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold mb-16 text-center text-soft-black"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {t('cta.title')}
                </motion.h2>

                <motion.form
                  action="https://formsubmit.co/contato@rito.cc"
                  method="POST"
                  className="w-full flex flex-col gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <input type="hidden" name="_subject" value="Novo contato pelo site Rito!" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="flex flex-col md:flex-row gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder={t('cta.namePlaceholder')}
                      className="w-full bg-white/50 border border-soft-black/20 rounded-md px-6 py-4 text-soft-black placeholder:text-soft-black/50 focus:outline-none focus:border-soft-black transition-colors"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder={t('cta.emailPlaceholder')}
                      className="w-full bg-white/50 border border-soft-black/20 rounded-md px-6 py-4 text-soft-black placeholder:text-soft-black/50 focus:outline-none focus:border-soft-black transition-colors"
                      required
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder={t('cta.messagePlaceholder')}
                    rows={5}
                    className="w-full bg-white/50 border border-soft-black/20 rounded-md px-6 py-4 text-soft-black placeholder:text-soft-black/50 focus:outline-none focus:border-soft-black transition-colors resize-none"
                    required
                  ></textarea>

                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      className="px-10 py-5 bg-soft-black text-warm-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-opacity-80 transition-all w-full md:w-auto"
                    >
                      {t('cta.button')}
                    </button>
                  </div>
                </motion.form>
              </div>
            </Section>
          )}

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
