import { IconLogoVijob } from "@/components/icon";
import LottieContainer from "@/components/lottie/LottieContainer";
import { LanguageProvider } from "@/context/LanguageContext";
import { mainPageText } from "@/data/mockData";
import classnames from 'classnames';
import Image from "next/image";
import { ReactNode } from "react";
import lottieJon from "../../../assets/lottie/radial-blur.json";
import '../globals.css';
import '../layout.scss';
import s from './joblayout.module.scss';
import { ScrollProvider } from "@/context/ScrollContext";

interface RootLayoutProps {
  children: ReactNode;
  params: { lng: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  // const lang = getServerCurrentLanguage(); // URL에서 언어 감지
  console.log('root layout:', params, params.lng);

  const lng = params.lng as "ko" | "en";

  return (
    <LanguageProvider initialLanguage={params.lng}>
      <ScrollProvider>
      <div className="main">
        <div className={classnames(s.layout, 'main-view')}>
          <div><IconLogoVijob /></div>
          <div>
            <h2 className={s.title}>
              {mainPageText.title[lng]}
            </h2>
            <p className={s.comment}>{mainPageText.comment[lng]}</p>
          </div>
          {/* 하얀 로고 */}
          <div className={s.lottie_logo}>
            <LottieContainer path={lottieJon} classname={s.wrap} />
            <Image src="/logo/vijob-ai.black.svg" alt="main" width={108} height={32} />
          </div>
          <div className={s.peopleimg}>
            <Image src="/images/foreeders.svg" alt="main" width={284} height={181} />
          </div>
          <div className={s.qrcode}>
            <Image src="/qrcode/store.qrcode.svg" alt="main" width={58} height={58} />
          </div>
          <div className={s.desc}>{mainPageText.desc[lng]}</div>
          <div className={s.buttons}>
            <button>
              <Image src="/images/app-store-black-border.svg" alt="main" width={134} height={50} />
            </button>
            <button>
              <Image src="/images/google-play-black-border.svg" alt="main" width={134} height={50} />
            </button>
          </div>
        </div>
        <div className="mobile-view">
          <div>
            {children}
          </div>
        </div>
      </div>
      </ScrollProvider>
    </LanguageProvider>
  );
}