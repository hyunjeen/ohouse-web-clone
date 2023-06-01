import React from "react";
import HeaderLayout from "@/layout/HeaderLayout";
import FullLayout from "@/layout/FullLayout";
import type { ChildrenProps } from "@/types/childrenProps";
import type { LayoutProps } from "@/layout/types";

function Layout({ pathname, children }: LayoutProps & ChildrenProps) {
  const FullLayoutPath = ["/users/sign_in", "/un_users/new"];
  console.log(pathname);
  return (
    <>
      {FullLayoutPath.some((value) => {
        return value === pathname;
      }) ? (
        <FullLayout>{children}</FullLayout>
      ) : (
        <HeaderLayout>{children}</HeaderLayout>
      )}
    </>
  );
}

export default Layout;
