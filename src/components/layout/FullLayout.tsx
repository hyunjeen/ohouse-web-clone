import type { ChildrenProps } from '@/types/childrenProps';
import 'react-toastify/dist/ReactToastify.css';

function FullLayout({ children }: ChildrenProps) {
  return <main>{children}</main>;
}

export default FullLayout;
