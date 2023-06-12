import type { ChildrenProps } from '@/types/childrenProps';
import Link from 'next/link';

interface ListItemProps extends ChildrenProps {
  menuId: number;
  currentId: number;
  src: string;
  sub?: boolean;
}

function ListItem(props: ListItemProps) {
  return (
    <li
      className={`flex items-center hover:text-blue-500 current:text-blue-500 ${
        props.currentId === props.menuId ? 'active' : ''
      }`}
    >
      <Link
        className={`inline-block px-4 current:text-blue-500 ${
          props.sub ? 'py-3' : 'py-5'
        }`}
        href={props.src}
      >
        {props.children}
      </Link>
    </li>
  );
}

export default ListItem;
