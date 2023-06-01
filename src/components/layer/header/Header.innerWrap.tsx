import { ChildrenProps } from "@/types/childrenProps";

function HeaderInnerWrap({ children }: ChildrenProps) {
  return (
    <div className={"border-b"}>
      <div className={"flex items-center max-w-7xl m-auto py-4 gap-7"}>
        {children}
      </div>
    </div>
  );
}

export default HeaderInnerWrap;
