import ListView from '@/components/modules/navigation/list/ListView';
import { MainItemType, MenuItems } from '@/dummyData/menuItem.data';

const MainItems: MainItemType[] = MenuItems.map(({ id, title, sub }) => ({
  id,
  title,
  src: sub[0].src,
}));

function Navigation({ order }: { order: number }) {
  return (
    <div className={`sticky mr-auto text-[18px] font-medium`}>
      <ListView order={order} data={MainItems} />
    </div>
  );
}

export default Navigation;
