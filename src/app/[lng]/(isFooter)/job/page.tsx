'use client';
import ListMockup from '@/components/List/ListMockup';
import s from './jobpage.module.scss';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import useScrollTracker from '@/hooks/useScrollTracker';

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

  useLayoutEffect(() => {
    if (listRef.current) {
      listRef.current.addEventListener('scroll', handleScroll)
      return () => {
        if (listRef.current) {
          listRef.current.removeEventListener('scroll', handleScroll)
        }
      }
    }
  }, [])

  return (
    // <div>
    <div className={s.content} ref={listRef}>
      <div style={{ minHeight: `var(--headerHeight)` }}></div>
      환영해요
      <div>오늘 새로 등록된 일자리 전국 <span>35</span>건</div>
      <ListMockup scrollEnd={scrollEnd} />
    </div>
  );
};

export default Jobpage;