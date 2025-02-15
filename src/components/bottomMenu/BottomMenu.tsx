'use client';
import React from 'react';
import s from './bottommenu.module.scss';

// 하단 메뉴버튼들
const BottomMenu = () => {
  return (
    <div className={s.bottommenu}>
      <ul>
        <li>홈</li>
        <li>커뮤니티</li>
        <li>콘텐츠</li>
        <li>채팅</li>
        <li>내정보</li>
      </ul>
    </div>
  );
};

export default BottomMenu;