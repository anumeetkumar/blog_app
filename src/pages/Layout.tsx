import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="px-[7rem]">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
