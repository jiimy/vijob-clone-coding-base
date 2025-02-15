'use client';
import { mockData, MockDataType } from '@/data/mockData';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CardItem } from 'snow-white-ui';
import s from './list.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useScrollResotration from '@/hooks/useScrollResotration';

const ITEMS_PER_PAGE = 10;

const ListMockup = () => {
  const [items, setItems] = useState(mockData.slice(0, ITEMS_PER_PAGE));
  const [hasMore, setHasMore] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const router = useRouter();

  const loadMoreItems = useCallback(() => {
    setItems((prevItems) => {
      const newItems = mockData.slice(prevItems.length, prevItems.length + ITEMS_PER_PAGE);
      if (newItems.length === 0) {
        setHasMore(false);
      }
      return [...prevItems, ...newItems];
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

    if (listRefCurrent) {
      listRefCurrent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (listRefCurrent) {
        listRefCurrent.removeEventListener('scroll', handleScroll);
      }
    };
  }, [loadMoreItems, hasMore]);

  const onLink = (index: number) => {
    router.push(`/${language}/job/${index}`, { scroll: false });
  }

  return (
    <div ref={listRef} className={s.list}>
      {items.map((item: MockDataType, index: number) => (
        // <Link key={index} href={`/${language}/job/${index}`}>
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
      ))
      }
      {hasMore && <div>Loading...</div>}
    </div >
  );
};

export default ListMockup;
