import { useGetCategoriesQuery } from '@/services/categoryApi';
import Categories from '@/components/modules/products_form/categories/Categories';
import Subcategories from '@/components/modules/products_form/categories/Subcategories';
import { Control, useWatch } from 'react-hook-form';
import { ProductVal } from '@/components/modules/products_form/types';

function CategoryGroup({ control }: { control: Control<ProductVal> }) {
  const { data = [] } = useGetCategoriesQuery();
  const currentCategory = useWatch({ control, name: 'category' });

  return (
    <div className={'flex w-full gap-1'}>
      <Categories control={control} data={data} />
      {currentCategory && (
        <Subcategories control={control} currentCategory={currentCategory} />
      )}
    </div>
  );
}

export default CategoryGroup;
