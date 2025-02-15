'use client';
import { mockData, MockDataType } from '@/data/mockData';
import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import { CardItem } from 'snow-white-ui';
import s from './list.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';

const ITEMS_PER_PAGE = 10;

const ListMockup = () => {
  const [items, setItems] = useState<MockDataType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const router = useRouter();

  // 세션 스토리지에서 items의 갯수와 스크롤 위치 가져오기
  const loadItemsFromSession = () => {
    const savedItemCount = sessionStorage.getItem('itemCount');
    if (savedItemCount) {
      return parseInt(savedItemCount, 10);
    }
    return 0;
  };

  const saveSessionData = (itemCount: number, scrollTop: number) => {
    sessionStorage.setItem('itemCount', itemCount.toString());
    sessionStorage.setItem('scrollPosition', scrollTop.toString());
  };

  useEffect(() => {
    const itemCount = loadItemsFromSession();
    const newItems = mockData.slice(0, itemCount + ITEMS_PER_PAGE);
    setItems(newItems);
  }, []);

  // 스크롤 위치 복원 (렌더링 후에 적용)
  useLayoutEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition && listRef.current) {
      setTimeout(() => {
        if (listRef.current) {
          listRef.current.scrollTop = parseInt(savedScrollPosition, 10);
        }
      }, 5);
    }
  }, []);

  const loadMoreItems = useCallback(() => {
    setItems((prevItems) => {
      const newItems = mockData.slice(prevItems.length, prevItems.length + ITEMS_PER_PAGE);
      if (newItems.length === 0) {
        setHasMore(false);
      }
      const updatedItems = [...prevItems, ...newItems];

      if (listRef.current) {
        saveSessionData(updatedItems.length, listRef.current.scrollTop);
      }

      return updatedItems;
    });
  }, []);

  useEffect(() => {
    const listRefCurrent = listRef.current;
    const handleScroll = () => {
      if (listRefCurrent) {
        const { scrollTop, scrollHeight, clientHeight } = listRefCurrent;
        if (scrollTop + clientHeight >= scrollHeight - 5 && hasMore) {
          loadMoreItems();
        }
      }
    };

    if (listRef.current) {
      listRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (listRef.current) {
        listRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [loadMoreItems, hasMore]);

  // 페이지 이동 시 스크롤 위치 저장
  const saveScrollPosition = () => {
    if (listRef.current) {
      sessionStorage.setItem('scrollPosition', listRef.current.scrollTop.toString());
    }
  };

  useEffect(() => {
    const beforeUnloadHandler = () => {
      saveScrollPosition();
    };

    window.addEventListener('beforeunload', beforeUnloadHandler);

    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
      saveScrollPosition();
    };
  }, []);

  const onLink = (index: number) => {
    saveScrollPosition();
    router.push(`/${language}/job/${index}`, { scroll: false });
  };

  return (
    <div ref={listRef} className={s.list}>
      {items.map((item: MockDataType, index: number) => (
        <div key={index} onClick={() => onLink(index)}>
          <CardItem>
            <CardItem.ItemTitle>{item.title}</CardItem.ItemTitle>
            <CardItem.ItemContent>{item.content[language]}</CardItem.ItemContent>
            <CardItem.ItemSchedule>{item.schedule[language]}</CardItem.ItemSchedule>
            <CardItem.ItemPay>{item.pay[language]}</CardItem.ItemPay>
            <CardItem.ItemRecruit>{item.recruit[language]}</CardItem.ItemRecruit>
          </CardItem>
          <span>프로필</span>
        </div>
      ))}
      {hasMore && <div>Loading...</div>}
    </div>
  );
};

export default ListMockup;
