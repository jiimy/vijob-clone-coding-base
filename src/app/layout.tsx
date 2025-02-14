import { LangProvider } from '@/context/LanguageContext';
import './globals.css';
import Head from './head';
import './layout.scss';

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="ko">
      <Head />
      <body>
        <LangProvider>
          <div className="page">
            {children}
          </div>
        </LangProvider>
      </body>
    </html>
  )
}
