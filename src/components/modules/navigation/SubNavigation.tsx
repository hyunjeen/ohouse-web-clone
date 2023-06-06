import { useMemo } from 'react';
import ListView from '@/components/modules/navigation/list/ListView';
import { DummyListItem, MainDummyListItems } from '@/dummyData/menuItem.data';

function SubNavigation({
  mainOrder,
  order,
}: {
  mainOrder: number;
  order: number;
}) {
  const data: MainDummyListItems[][] = useMemo(
    () => DummyListItem.map(({ sub }) => sub),
    []
  );

  const viewData = useMemo(() => data[mainOrder], [data, mainOrder]);

  return <ListView order={order} data={viewData} sub={true} />;
}

export default SubNavigation;
