import { ChildrenProps } from "@/types/childrenProps";

interface ButtonProps extends ChildrenProps {
  type?: "submit";
}

function Button({ children, type }: ButtonProps) {
  return (
    <button
      className={`w-full bg-blue-400 mt-5 py-4 text-white rounded`}
      type={type && "button"}
    >
      {children}
    </button>
  );
}

export default Button;
