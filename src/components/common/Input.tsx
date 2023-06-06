import { ForwardedRef, forwardRef } from 'react';

interface InputProps {
  placeholder: string;
  type?: string;
  autoComplete?: `off`;
  error?: boolean;
}

const Input = forwardRef(
  (
    { placeholder, error, type, autoComplete, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <input
      ref={ref}
      type={type}
      className={`h-[50px] w-full rounded border px-4 py-3 outline-0 ${
        error ? 'border-red-600' : ''
      }`}
      autoComplete={autoComplete}
      placeholder={placeholder}
      {...props}
    />
  )
);
Input.displayName = 'Input';
export default Input;
