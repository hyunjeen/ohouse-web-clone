import React from "react";
import Image from "next/image";

interface ServiceMenusItemProps {
  title: string;
  iconUrl: string;
}

function ServiceMenuItem({ title, iconUrl }: ServiceMenusItemProps) {
  return (
    <div className={`flex flex-col gap-2 items-center cursor-pointer`}>
      <Image
        src={iconUrl}
        width={128}
        height={111}
        sizes={"100vw"}
        alt={title}
        className={` md:w-full`}
      />
      <span className={`whitespace-nowrap`}>{title}</span>
    </div>
  );
}

export default ServiceMenuItem;
