import { ChildrenProps } from "@/types/childrenProps";

interface FormProps extends ChildrenProps {
  onSubmit: () => void;
}

function Form({ children, onSubmit }: FormProps) {
  return (
    <form
      className={
        "flex justify-center items-center " +
        "max-w-[350px] m-auto h-full flex-col w-full"
      }
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
