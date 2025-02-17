'use client';
import ListMockup from '@/components/List/ListMockup';
import s from './jobpage.module.scss';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import useScrollTracker from '@/hooks/useScrollTracker';
import ListInfiniteQuery from '@/components/List/ListInfiniteQuery';

const Jobpage = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [scrollEnd, setScrollEnd] = useState(false);

  useScrollTracker(listRef);

  // 리스트에게 스크롤이 바닥에 닿았는지 넘기기
  const handleScroll = useCallback((e: any) => {
    const listRefCurrent = listRef.current;
    if (listRefCurrent) {
      const { scrollTop, scrollHeight, clientHeight } = listRefCurrent;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setScrollEnd(true);
      } else {
        setScrollEnd(false);
      }
    }
  }, [])

  // 현재위치 스크롤 저장
  useLayoutEffect(() => {
    if (listRef.current) {
      listRef.current.addEventListener('scroll', handleScroll)
      return () => {
        if (listRef.current) {
          sessionStorage.setItem('scrollPosition', listRef?.current?.scrollTop.toString());
          listRef.current.removeEventListener('scroll', handleScroll)
        }
      }
    }
  }, [])

  // 스크롤 값 가져오기
  useLayoutEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition && listRef.current) {
      setTimeout(() => {
        if (listRef.current) {
          listRef.current.scrollTop = parseInt(savedScrollPosition, 10);
          // console.log('세션에 있는 값: ', parseInt(savedScrollPosition, 10), listRef.current.scrollTop);
        }
      }, 10);
    }
  }, []);


  return (
    // <div>
    <div className={s.content} ref={listRef}>
      <div style={{ minHeight: `var(--headerHeight)` }}></div>
      환영해요
      <div>오늘 새로 등록된 일자리 전국 <span>35</span>건</div>
      {/* <ListMockup scrollEnd={scrollEnd} /> */}
      <ListInfiniteQuery />
    </div>
  );
};

export default Jobpage;