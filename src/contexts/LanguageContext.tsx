import React, { createContext, useState, useContext, ReactNode } from 'react';
import { pt } from '../locales/pt';
import { en } from '../locales/en';

type Language = 'pt' | 'en';
type Dictionary = typeof pt;

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('pt');

    const dictionaries: Record<Language, Dictionary> = {
        pt,
        en,
    };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
    };

    // Helper to fetch nested keys like "hero.title"
    const t = (path: string): any => {
        const keys = path.split('.');
        let current: any = dictionaries[language];

        for (const key of keys) {
            if (current[key] === undefined) {
                console.warn(`Translation key not found: ${path}`);
                return path;
            }
            current = current[key];
        }

        return current;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
