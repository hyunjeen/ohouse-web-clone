import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { error, className, ...rest } = props;
    return (
      <input
        ref={ref}
        {...rest}
        className={`h-[50px] w-full rounded border px-4 py-3 outline-0 ${
          error ? 'border-red-600' : ''
        }${className}`}
      />
    );
  }
);
Input.displayName = 'Input';
export default Input;
