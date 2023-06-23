import type { ChildrenProps } from '@/types/childrenProps';
import { ButtonHTMLAttributes } from 'react';

function Button({
  children,
  ...props
}: ChildrenProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`mt-5 rounded bg-blue-400 py-4 text-white ${props.className}`}
    >
      {children}
    </button>
  );
}

export default Button;
