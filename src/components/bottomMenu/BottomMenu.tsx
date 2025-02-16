'use client';
import React from 'react';
import s from './bottommenu.module.scss';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

// 하단 메뉴버튼들
const BottomMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { language } = useLanguage();

  return (
    <div className={s.bottommenu}>
      <div onClick={() => router.push(`/${language}/job`)}
      >
        {pathname.includes('/job') ?
          <Image src={'/icons/nav-job-active.48x48.png'} width={48} height={48} alt="home" /> :
          <Image src={'/icons/nav-job.48x48.png'} width={48} height={48} alt="home" />
        }
        홈
      </div>
      <div onClick={() => router.push(`/${language}/community`)}>
        {pathname.includes('/community') ?
          <Image src={'/icons/nav-life-active.48x48.png'} width={48} height={48} alt="home" /> :
          <Image src={'/icons/nav-life.48x48.png'} width={48} height={48} alt="home" />
        }
        커뮤니티
      </div>
      <div onClick={() => router.push(`/${language}/content`)}>
        {pathname.includes('/content') ?
          <Image src={'/icons/nav-life-active.48x48.png'} width={48} height={48} alt="home" /> :
          <Image src={'/icons/nav-life.48x48.png'} width={48} height={48} alt="home" />
        }
        콘텐츠
      </div>
      <div onClick={() => router.push(`/${language}/chat`)}>
        {pathname.includes('/chat') ?
          <Image src={'/icons/nav-chat-active.48x48.png'} width={48} height={48} alt="home" /> :
          <Image src={'/icons/nav-chat.48x48.png'} width={48} height={48} alt="home" />
        }
        채팅
      </div>
      <div onClick={() => router.push(`/${language}/setting`)}>
        {pathname.includes('/setting') ?
          <Image src={'/icons/nav-setting-active.48x48.png'} width={48} height={48} alt="home" /> :
          <Image src={'/icons/nav-setting.48x48.png'} width={48} height={48} alt="home" />
        }
        내정보
      </div>
    </div>
  );
};

export default BottomMenu;