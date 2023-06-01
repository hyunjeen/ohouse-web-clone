import React from "react";
import { ChildrenProps } from "@/types/childrenProps";

function Label({ children, name }: ChildrenProps & { name: string }) {
  return (
    <label className={`w-full mt-4`}>
      <p className={`font-bold mb-3`}>{name}</p>
      {children}
    </label>
  );
}

export default Label;
