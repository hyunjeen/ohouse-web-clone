import React from "react";
import type { ChildrenProps } from "@/types/childrenProps";
import Link from "next/link";

interface ListItemProps extends ChildrenProps {
  primaryId: number;
  currentId: number;
  src: string;
}

function ListItem(props: ListItemProps) {
  return (
    <li
      className={`current:text-blue-500 hover:text-blue-500 ${
        props.currentId === props.primaryId ? "active" : ""
      } }`}
    >
      <Link className={`active:text-blue-500 px-4 py-2 `} href={props.src}>
        {props.children}
      </Link>
    </li>
  );
}

export default ListItem;
