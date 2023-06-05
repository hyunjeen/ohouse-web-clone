import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { DummyListItem } from "@/dummyData/menuItem.data";
import { useDispatch } from "react-redux";
import {
  setMainMenuOrder,
  setSubMenuOrder,
} from "@/store/menuOrder/menuOrder.slice";
import type { ChildrenProps } from "@/types/childrenProps";

const PagePathMiddleware = ({ children }: ChildrenProps) => {
  const { pathname } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    DummyListItem.some((value) =>
      value.sub.some((value1) => {
        if (value1.src === pathname) {
          dispatch(setMainMenuOrder(value.id));
          dispatch(setSubMenuOrder(value1.id));
          return true; // return true when condition is met
        }
        return false;
      })
    );
  }, [pathname, dispatch]);

  return <>{children}</>;
};

export default PagePathMiddleware;
