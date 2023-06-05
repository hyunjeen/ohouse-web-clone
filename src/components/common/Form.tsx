import { ChildrenProps } from '@/types/childrenProps';

interface FormProps extends ChildrenProps {
  onSubmit: () => void;
}

function Form({ children, onSubmit }: FormProps) {
  return (
    <form
      className={
        'flex items-center justify-center ' +
        'm-auto h-full w-full max-w-[350px] flex-col'
      }
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
