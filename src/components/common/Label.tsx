import React from 'react';
import { ChildrenProps } from '@/types/childrenProps';

function Label({ children, name }: ChildrenProps & { name: string }) {
  return (
    <label className={`mt-4 w-full`}>
      <p className={`mb-3 font-bold`}>{name}</p>
      {children}
    </label>
  );
}

export default Label;
