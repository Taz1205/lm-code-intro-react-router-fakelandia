import React, { ReactNode } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col m-0 p-0 border-0 bg-yellow-100 min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
