import { ChildrenProps } from '@/types/childrenProps';

interface FormProps extends ChildrenProps {
  onSubmitHandler: () => Promise<void>;
}

function Form({ children, onSubmitHandler }: FormProps) {
  return (
    <form
      className={
        'flex items-center justify-center ' +
        'm-auto h-full w-full max-w-[350px] flex-col'
      }
      onSubmit={onSubmitHandler}
    >
      {children}
    </form>
  );
}

export default Form;
