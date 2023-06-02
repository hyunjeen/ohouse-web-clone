import { ForwardedRef, forwardRef } from "react";

interface InputProps {
  placeholder: string;
  type?: string;
  error?: boolean;
}

const Input = forwardRef(
  (
    { placeholder, error, type, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <input
      ref={ref}
      type={type}
      className={`w-full h-[50px] border rounded px-4 py-3 outline-0 ${
        error ? "border-red-600" : ""
      }`}
      placeholder={placeholder}
      {...props}
    />
  )
);
Input.displayName = "Input";
export default Input;
