import React from "react";
import { ChildrenProps } from "@/types/childrenProps";

function Button({ children }: ChildrenProps) {
  return (
    <button className={`w-full bg-blue-400 mt-5 py-4 text-white rounded`}>
      {children}
    </button>
  );
}

export default Button;
