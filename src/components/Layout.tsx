import type { ReactNode } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface LayoutProps {
  hero?: ReactNode;
  children: ReactNode;
}

function Layout({ children, hero }: LayoutProps) {
  return (
    <div className="layout-wrapper font-bebas">
      <div className="header-main-wrapper h-screen bg-[url(/images/photo1.png)] bg-cover bg-center">
        <Header />

        <div className="h-[calc(100vh-7rem)]">{hero}</div>
      </div>

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
