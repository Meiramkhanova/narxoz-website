import type { ReactNode } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-wrapper font-bebas">
      <div className="header-main-wrapper h-screen bg-gray-200 bg-[url(/images/photo1.png)] bg-cover bg-center">
        <Header />

        <main className="h-[calc(100vh-7rem)]">{children}</main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
