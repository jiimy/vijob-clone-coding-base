'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation'

type LangContextType = {
  lang: string;
  setLang: (lang: string) => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<string>('ko'); // 기본 언어 'ko'로 설정
  const router = useRouter();
  const pathname = usePathname();

  // 언어를 변경하고 URL도 업데이트
  const changeLang = (newLang: string) => {
    router.push(`/${newLang}${pathname.split('/').slice(2).join('/')}`);
  };

  return (
    <LangContext.Provider value={{ lang, setLang: changeLang }}>
      {children}
    </LangContext.Provider>
  );
};

// LangContext 사용 hook
export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};
