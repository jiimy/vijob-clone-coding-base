'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import s from './header.module.scss';
import useCssVar from '@/hooks/useCssVar';
import { useScrollContext } from '@/context/ScrollContext';

type headerProps = {
  theme: 'home' | 'detail' | 'title' // home = 홈의 검색창이 포함됨. detail = 상세페이지용, title = 제목만 있음
}


const Header = ({ theme }: headerProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const { isScrolled } = useScrollContext();

  useEffect(() => {
    setHeight(wrapRef?.current?.clientHeight);
  }, [wrapRef?.current?.clientHeight]);
  useCssVar(`${height}px`, "--headerHeight");

  return (
    <header>
      {theme === 'home' &&
        <div className={s.header_home} ref={wrapRef}>
          <div className={s.title}>
            <span>전국</span>
            <div className={s.search}>
            </div>
          </div>
          <div className={s.area}>
            <div className={s.banner}></div>
            <div className={s.filter}>
              <span>필터 1</span>
              <span>필터 2</span>
            </div>
          </div>
          {isScrolled && <div className={s.border}></div>}
        </div>}
      {theme === 'detail' &&
        <div className={s.detail}>
          <span>뒤로가기</span>
          <span>공유, 디테일 아이콘</span>
        </div>}
    </header>
  );
};

export default Header;