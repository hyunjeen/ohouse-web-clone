import React from "react";
import ListItem from "@/components/modules/navigation/list/ListItem";
import { MainDummyListItems } from "@/dummyData/menuItem.data";
interface ListViewProps {
  data: MainDummyListItems[];
  order: number;
  sub?: boolean;
}
function ListView({ data, order }: ListViewProps) {
  return (
    <ul className={"flex items-center text-[18px] font-bold"}>
      {data.map(({ title, src, id }) => (
        <ListItem key={id} src={src} currentId={id} primaryId={order}>
          {title}
        </ListItem>
      ))}
    </ul>
  );
}

export default ListView;
