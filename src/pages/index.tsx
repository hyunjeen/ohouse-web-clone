import Banner from '@/components/modules/banner/Banner';
import SideBanner from '@/components/modules/side_banner/SideBanner';
import ServiceMenu from '@/components/modules/service_menu/ServiceMenu';
import Products from '@/components/modules/products/Products';
import { ToastContainer } from 'react-toastify';
import { usePopup } from '@/hooks/usePopup';

function Index() {
  usePopup();
  return (
    <div className={`m-auto flex max-w-[var(--max-container-size)] flex-col`}>
      <div
        className={`relative mt-6 flex max-h-[200px] flex-1 sm:max-h-[504px]`}
      >
        <Banner />
        <SideBanner />
      </div>
      <div className={`mt-7`}>
        <ServiceMenu />
      </div>
      <div className={`mt-10`}>
        <Products />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Index;
