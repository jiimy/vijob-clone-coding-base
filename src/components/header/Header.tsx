'use client';
import React from 'react';
import s from './header.module.scss';

type headerProps = {
  theme: 'home' | 'detail' | 'title' // home = 홈의 검색창이 포함됨. detail = 상세페이지용, title = 제목만 있음
}

const Header = ({ theme }: headerProps) => {
  return (
    <header>
      {theme === 'home' &&
        <div className={s.header_home}>
          <div className={s.search}>검색창 및 타이틀</div>
          <div className={s.area}>배너 및 필터</div>
        </div>}
      {theme === 'detail' &&
        <>
        </>}
    </header>
  );
};

export default Header;