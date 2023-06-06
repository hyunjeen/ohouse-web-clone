import React from 'react';
import ListItem from '@/components/modules/navigation/list/ListItem';
import { MainDummyListItems } from '@/dummyData/menuItem.data';

interface ListViewProps {
  data: MainDummyListItems[];
  order: number;
  sub?: boolean;
}

function ListView({ data, order, sub }: ListViewProps) {
  return (
    <div className={`flex-1`}>
      <ul className={'flex items-center '}>
        {data.map(({ title, src, id }) => (
          <ListItem
            key={id}
            src={src}
            currentId={id}
            primaryId={order}
            sub={sub}
          >
            {title}
          </ListItem>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(ListView);
