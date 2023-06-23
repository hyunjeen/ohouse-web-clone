import Select from '@/components/common/select/Select';
import { Control, useController } from 'react-hook-form';
import { useGetSubCategoriesQuery } from '@/services/categoryApi';
import { SelectOption } from '@/components/common/select/selectTypes';
import { SingleValue } from 'react-select';
import { useEffect, useState } from 'react';
import { ProductVal } from '@/components/modules/products_form/types';

interface SubcategoriesProps {
  control: Control<ProductVal>;
  currentCategory: string;
}
function Subcategories({ control, currentCategory }: SubcategoriesProps) {
  const [sub, SetSub] = useState<string | null>(null);
  const {
    field: { name, onChange },
  } = useController({
    name: 'subcategory',
    control,
  });

  useEffect(() => {
    SetSub(null);
  }, [currentCategory]);

  const { data = [] } = useGetSubCategoriesQuery(currentCategory);

  const handleChange = (selected: SingleValue<SelectOption>) => {
    const selectedCategory = data.find(
      (subcategory) => subcategory.value === selected?.value
    );
    if (selectedCategory) {
      onChange(selectedCategory.value);
      SetSub(selected ? selected.value : null);
    }
  };

  return (
    <Select
      id={name}
      value={sub}
      title={'서브카테고리'}
      data={data}
      handleChange={handleChange}
    />
  );
}

export default Subcategories;
