import BottomMenu from "@/components/bottomMenu/BottomMenu";
import Header from "@/components/header/Header";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <>
      <Header theme="home" />
      <div className="content">
        {children}
      </div>
      <BottomMenu />
    </>
  );
}