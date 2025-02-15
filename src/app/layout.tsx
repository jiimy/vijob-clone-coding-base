import { ReactNode } from "react";
import Head from "./head";
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="ko">
      <Head />
      <body>
        {children}
      </body>
    </html>
  );
}