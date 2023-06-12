import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {
  setCurrentMainMenuOrder,
  setCurrentSubMenuOrder,
} from '@/redux/slice/currentMenuOrder.slice';
import type { ChildrenProps } from '@/types/childrenProps';
import { MenuItems } from '@/dummyData/menuItem.data';

const PagePathMiddleware = ({ children }: ChildrenProps) => {
  const { pathname } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    MenuItems.some((value) =>
      value.sub.some((value1) => {
        if (value1.src === pathname) {
          dispatch(setCurrentMainMenuOrder(value.id));
          dispatch(setCurrentSubMenuOrder(value1.id));
          return true; // return true when condition is met
        }
        return false;
      })
    );
  }, [pathname, dispatch]);

  return <>{children}</>;
};

export default PagePathMiddleware;
