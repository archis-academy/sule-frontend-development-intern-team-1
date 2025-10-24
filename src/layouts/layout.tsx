import React from "react";
import SecondaryHeader from "@/components/secondaryHeader/secondaryHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SecondaryHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
