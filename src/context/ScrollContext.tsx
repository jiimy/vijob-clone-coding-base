'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ScrollContextType {
  isScrolled: boolean;
  setIsScrolled: (value: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

interface ScrollProviderProps {
  children: ReactNode;
}


// 스크롤을 하는지 유무 체크 프로바이더
export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <ScrollContext.Provider value={{ isScrolled, setIsScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};