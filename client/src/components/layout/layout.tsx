import React, { ReactNode } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-100 h-full">
      <Header />
      <main className="flex-grow h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
