import React from "react";
import HeaderLayout from "@/components/layout/HeaderLayout";
import FullLayout from "@/components/layout/FullLayout";
import type { ChildrenProps } from "@/types/childrenProps";
import type { LayoutProps } from "@/components/layout/types";
import { useRouter } from "next/router";

function Layout({ pathname, children }: LayoutProps & ChildrenProps) {
  const FullLayoutPath = ["/users/sign_in", "/un_users/new"];
  const router = useRouter();
  if (router.pathname === `/404`) {
    return <FullLayout>{children}</FullLayout>;
  }
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
