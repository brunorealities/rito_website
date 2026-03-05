import React from 'react';
import logoSlogan from '@/src/lib/assets/logo/logo_slogan.png';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const tags = (t('footer.tags') as string[]) || [];

  return (
    <footer className="bg-soft-black text-warm-white py-8 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest opacity-60">
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <span>{tag}</span>
              {index < tags.length - 1 && <span>•</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center">
          <img
            src={logoSlogan}
            alt="Rito - Reimagination Technologies"
            className="h-14 w-auto object-contain brightness-0 invert opacity-60"
          />
        </div>
      </div>
    </footer>
  );
}
