import React, { createContext, useContext, useEffect, useState } from 'react';
import it from '../i18n/it';

export type Language = 'en' | 'it';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultText: string) => string;
}

const ItalianTranslations: Record<string, string> = it;

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('lang') as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const t = (key: string, defaultText: string) => {
    if (language === 'it') {
      return ItalianTranslations[key] || defaultText;
    }
    return defaultText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
