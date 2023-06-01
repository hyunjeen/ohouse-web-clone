import React from "react";
import Header from "@/components/layer/header/Header";
import { ChildrenProps } from "@/types/childrenProps";
type LayoutProps = ChildrenProps;
function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  );
}

export default Layout;
