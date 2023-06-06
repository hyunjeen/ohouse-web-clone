import type { ChildrenProps } from '@/types/childrenProps';

interface ButtonProps extends ChildrenProps {
  type?: 'submit';
}

function Button({ children, type }: ButtonProps) {
  return (
    <button
      className={`mt-5 w-full rounded bg-blue-400 py-4 text-white`}
      type={type || 'button'}
    >
      {children}
    </button>
  );
}

export default Button;
