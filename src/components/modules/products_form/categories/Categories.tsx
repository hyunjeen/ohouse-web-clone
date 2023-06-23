import Select from '@/components/common/select/Select';
import { Control, useController } from 'react-hook-form';
import { SelectOption } from '@/components/common/select/selectTypes';
import { SingleValue } from 'react-select';
import { ProductVal } from '@/components/modules/products_form/types';

interface CategoriesProps {
  control: Control<ProductVal>;
  data: SelectOption[];
}

function Categories({ control, data }: CategoriesProps) {
  const {
    field: { value, name, onChange },
  } = useController({ name: 'category', control });

  const handleChange = (selected: SingleValue<SelectOption>) => {
    const selectedCategory = data.find(
      (category) => category.value === selected?.value
    );
    if (selectedCategory) {
      // onChangeCurrentCategory(selectedCategory.value);
      onChange(selectedCategory.value);
    }
  };

  return (
    <Select
      id={name}
      value={value}
      title={'카테고리'}
      data={data}
      handleChange={handleChange}
    />
  );
}

export default Categories;
