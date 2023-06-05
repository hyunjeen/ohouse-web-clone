import type { ChildrenProps } from '@/types/childrenProps';

function FullLayout({ children }: ChildrenProps) {
  return <main>{children}</main>;
}

export default FullLayout;
