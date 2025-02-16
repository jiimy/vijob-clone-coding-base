'use client';
import React, { useCallback, useLayoutEffect, useRef } from 'react';

const HeaderController = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback((e: any) => {
    const listRefCurrent = ref.current;
    if (listRefCurrent) {
      console.log('e', e);
    }
  }, [])

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll)
      return () => {
        if (ref.current) {
          ref.current.removeEventListener('scroll', handleScroll)
        }
      }
    }
  }, [])

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};

export default HeaderController;