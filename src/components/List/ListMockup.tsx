'use client';
import { mockData, mockData2 } from '@/data/mockData';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CardItem } from 'snow-white-ui';
import s from './list.module.scss';

const ITEMS_PER_PAGE = 10;

const ListMockup = () => {
  const [items, setItems] = useState(mockData2.slice(0, ITEMS_PER_PAGE));
  const [hasMore, setHasMore] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);

  const loadMoreItems = useCallback(() => {
    setItems((prevItems) => {
      const newItems = mockData2.slice(prevItems.length, prevItems.length + ITEMS_PER_PAGE);
      if (newItems.length === 0) {
        setHasMore(false);
      }
      return [...prevItems, ...newItems];
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 5 && hasMore) {
          loadMoreItems();
        }
      }
    };

    const listRefCurrent = listRef.current;
    if (listRefCurrent) {
      listRefCurrent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (listRefCurrent) {
        listRefCurrent.removeEventListener('scroll', handleScroll);
      }
    };
  }, [loadMoreItems, hasMore]);

  return (
    <div ref={listRef} style={{ height: '500px', overflowY: 'auto' }}>
      {items.map((item: { title: string; content: { ko: string; en: string } }, index: number) => (
        <div key={index}>
          <CardItem >
            <CardItem.ItemTitle>{item.title}</CardItem.ItemTitle>
            <CardItem.ItemContent>{item.content['ko']}</CardItem.ItemContent>
          </CardItem>
        </div>
      ))
      }
      {hasMore && <div>Loading...</div>}
    </div >
  );
};

export default ListMockup;
