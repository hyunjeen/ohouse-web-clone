import type { ChildrenProps } from "@/types/childrenProps";

function HeaderInnerWrap({ children }: ChildrenProps) {
  return (
    <div className={"border-b"}>
      <div className={"flex items-center max-w-7xl m-auto  gap-3"}>
        {children}
      </div>
    </div>
  );
}

export default HeaderInnerWrap;
