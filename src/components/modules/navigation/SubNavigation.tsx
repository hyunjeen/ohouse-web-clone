import ListView from '@/components/modules/navigation/list/ListView';
import { CurMenuOrderProps } from '@/components/layer/header/types';
import { MenuItems } from '@/dummyData/menuItem.data';
import { useMemo } from 'react';

function SubNavigation({
  curMainMenuOrder,
  curSubMenuOrder,
}: CurMenuOrderProps) {
  const [{ sub: subMenuItems }] = useMemo(() => {
    return MenuItems.filter((value) => value.id === curMainMenuOrder);
  }, [curMainMenuOrder]);

  return <ListView order={curSubMenuOrder} data={subMenuItems} sub={true} />;
}

export default SubNavigation;
