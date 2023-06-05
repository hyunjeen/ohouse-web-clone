import React, { useMemo } from "react";
import ListView from "@/components/modules/navigation/list/ListView";
import { DummyListItem, MainDummyListItems } from "@/dummyData/menuItem.data";

function Navigation({ order }: { order: number }) {
  const data: MainDummyListItems[] = useMemo(
    () =>
      DummyListItem.map(({ title, id, sub }) => ({
        title,
        id,
        src: sub[0].src,
      })),
    []
  );
  return (
    <div className={`mr-auto text-[18px] font-medium sticky`}>
      <ListView order={order} data={data} />
    </div>
  );
}

export default Navigation;
