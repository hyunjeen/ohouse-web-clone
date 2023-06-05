import React from 'react';
import Header from '@/components/layer/header/Header';
import type { ChildrenProps } from '@/types/childrenProps';

type LayoutProps = ChildrenProps;

function HeaderLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer />
    </>
  );
}

export default HeaderLayout;
