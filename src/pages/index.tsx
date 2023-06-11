import Banner from '@/components/modules/banner/Banner';
import SideBanner from '@/components/modules/side_banner/SideBanner';
import ServiceMenu from '@/components/modules/service_menu/ServiceMenu';
import Products from '@/components/modules/products/Products';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { toastifyDefault } from '@/util/toastifyDefault';

function Index() {
  const { query } = useRouter();

  useEffect(() => {
    const isPopup = window.sessionStorage.getItem('signup_popup');
    if (isPopup == null && query.signup_popup == 'true') {
      toastifyDefault('회원가입을 축하합니다');
      window.sessionStorage.setItem('signup_popup', 'true');
    }
  }, [query]);
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
