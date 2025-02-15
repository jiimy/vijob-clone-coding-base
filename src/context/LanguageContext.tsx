'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type language = 'ko' | 'en';
interface LanguageContextType {
  language: language;
  toggleLanguage: () => void;
  setLanguage: React.Dispatch<React.SetStateAction<'ko' | 'en'>>;
};

// const LanguageContext = createContext<LanguageContextType>({
//   language: 'ko',
//   toggleLanguage: () => { },
//   setLanguage: () => { },
// });

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children, initialLanguage }: { children: ReactNode, initialLanguage: string }) => {
  // const [language, setLanguage] = useState<string>('ko');
  const [language, setLanguage] = useState<language>(initialLanguage === 'ko' || initialLanguage === 'en' ? initialLanguage : 'ko');

  const toggleLanguage = () => {
    const newLanguage = language === 'ko' ? 'en' : 'ko';
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};