import type { ChildrenProps } from "@/types/childrenProps";
import Link from "next/link";

interface ListItemProps extends ChildrenProps {
  primaryId: number;
  currentId: number;
  src: string;
  sub?: boolean;
}

function ListItem(props: ListItemProps) {
  return (
    <li
      className={`flex items-center current:text-blue-500 hover:text-blue-500 ${
        props.currentId === props.primaryId ? "active" : ""
      } }`}
    >
      <Link
        className={`active:text-blue-500 inline-block px-4 ${
          props.sub ? "py-3" : "py-5"
        }`}
        href={props.src}
      >
        {props.children}
      </Link>
    </li>
  );
}

export default ListItem;
