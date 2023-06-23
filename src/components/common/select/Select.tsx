import React from 'react';
import Label from '@/components/common/Label';
import FormSelect from 'react-select';
import { SelectPropsType } from '@/components/common/select/selectTypes';

const selectStyle = {
  control: () => 'border-0',
  container: () => 'border w-full',
  valueContainer: () => `px-4 py-3`,
  placeholder: () => 'm-0',
  input: () => `p-0 m-0`,
};

function Select({
  id: name,
  title,
  data,
  handleChange,
  value,
}: SelectPropsType) {
  return (
    <div className={'w-[50%]'}>
      <Label htmlFor={name} title={title} />
      <FormSelect
        classNames={{
          ...selectStyle,
        }}
        id={name}
        required={true}
        options={data}
        value={value ? data.find((opt) => opt.value == value) : null}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
}

export default Select;
