import { useEffect, useState, memo } from 'react';
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from '@tanstack/react-query';
import s from './list.module.scss';
import { CardItem } from 'snow-white-ui';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { listApi } from '@/api/list';

const List = () => {
  const [ref, isView] = useInView();
  const router = useRouter();
  const { language } = useLanguage();
  const size = 10;

  const {
    data: List,
    fetchNextPage: ListFetchNextPage,
    hasNextPage: ListHasNextPage,
    status: ListStatus,
    error: ListError,
    refetch,
    isLoading,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ["getFeedList"],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await listApi(pageParam, size);
      return response.map((item: any) => ({
        id: item.id,
        title: item.title,
        content: item.content,
        schedule: item.schedule,
        pay: item.pay,
        recruit: item.recruit
      }));
    },
    staleTime: 1000 * 60 * 1,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      // console.log('aa', allPages);
      return lastPage?.length === size ? allPages.length : undefined;
    },
  });

  useEffect(() => {
    if (isView && ListHasNextPage && !isFetchingNextPage) {
      ListFetchNextPage();
    }
  }, [isView, ListHasNextPage, ListFetchNextPage, isFetchingNextPage]);

  const onLink = (index: number) => {
    router.push(`/${language}/job/${index}`, { scroll: false });
  };

  const flattenedData = List?.pages.flat() || [];

  return (
    <div className={s.list}>
      {ListStatus === "success" && (
        <>
          {flattenedData?.map((item: any, index) => (
            <div key={index} onClick={() => onLink(index)}>
              <CardItem>
                <CardItem.ItemTitle>{item.title}</CardItem.ItemTitle>
                <CardItem.ItemContent>{item.content[language]}</CardItem.ItemContent>
                <CardItem.ItemSchedule>{item.schedule[language]}</CardItem.ItemSchedule>
                <CardItem.ItemPay>{item.pay[language]}</CardItem.ItemPay>
                <CardItem.ItemRecruit>{item.recruit[language]}</CardItem.ItemRecruit>
              </CardItem>
              <span className={s.logo}>
                <span className={s.imgwrap}>
                  <Image src={"https://static.vivace.theego.dev/vijob/uploads/businesses/profile-images/202502/thumbnails/xxLlQub65LZ344MykLLqubZC.png"}
                    width={36}
                    height={36}
                    alt="로고"
                  />
                </span>
                을지로6가
              </span>
            </div>
          ))}
          <div ref={ref} style={{ height: '20px' }}></div>
        </>
      )}
      {ListStatus === "pending" && (
        <div>
          불러오는 중 ...
        </div>
      )}
    </div>
  )
}

export default memo(List)