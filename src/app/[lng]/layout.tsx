import { LanguageProvider } from "@/context/LanguageContext";
import { ReactNode } from "react";
import '../globals.css';
import Head from "../head";
import '../layout.scss';

interface RootLayoutProps {
  children: ReactNode;
  params: { lng: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  // const lang = getServerCurrentLanguage(); // URL에서 언어 감지
  console.log('root layout:', params, params.lng);

  return (
    <LanguageProvider initialLanguage={params.lng}>
      <div className="main">
        <div className="mobile-view">
          <div>
            {children}
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}