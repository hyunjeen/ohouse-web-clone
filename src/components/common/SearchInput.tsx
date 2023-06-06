import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ClassNameProps } from '@/types/classNameProps';

function SearchInput({ className }: ClassNameProps) {
  return (
    <div
      className={`flex h-[40px] items-center  rounded border px-2 ${className}`}
    >
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`ml-1 mr-2 translate-y-[2px]`}
      />
      <input className={`w-full outline-0`} placeholder={'통합검색'} />
    </div>
  );
}

export default SearchInput;
