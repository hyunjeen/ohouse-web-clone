import type { ChildrenProps } from '@/types/childrenProps';

function HeaderInnerWrap({ children }: ChildrenProps) {
  return (
    <div className={'border-b'}>
      <div className={'m-auto flex max-w-7xl items-center  gap-3'}>
        {children}
      </div>
    </div>
  );
}

export default HeaderInnerWrap;
