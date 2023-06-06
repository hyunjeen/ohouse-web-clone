import type { ChildrenProps } from '@/types/childrenProps';
import { ClassNameProps } from '@/types/classNameProps';
import React from 'react';

function HeaderInnerWrap({
  children,
  className,
}: ChildrenProps & ClassNameProps) {
  return (
    <div className={` w-full border-b bg-white ${className ? className : ''}`}>
      <div className={'m-auto flex max-w-7xl items-center gap-3'}>
        {children}
      </div>
    </div>
  );
}

export default React.memo(HeaderInnerWrap);
