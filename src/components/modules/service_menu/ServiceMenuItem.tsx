import React from 'react';
import Image from 'next/image';

interface ServiceMenusItemProps {
  title: string;
  iconUrl: string;
}

function ServiceMenuItem({ title, iconUrl }: ServiceMenusItemProps) {
  return (
    <div className={`flex cursor-pointer flex-col items-center gap-2`}>
      <Image
        src={iconUrl}
        width={128}
        height={111}
        alt={title}
        className={`md:w-full`}
      />
      <span className={`whitespace-nowrap`}>{title}</span>
    </div>
  );
}

export default ServiceMenuItem;
