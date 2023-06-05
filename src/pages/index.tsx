import Banner from '@/components/modules/banner/Banner';
import SideBanner from '@/components/modules/side_banner/SideBanner';
import ServiceMenu from '@/components/modules/service_menu/ServiceMenu';

function Index() {
  return (
    <div className={`m-auto flex max-w-[var(--max-container-size)] flex-col`}>
      <div className={`mt-6 flex max-h-[504px] flex-1`}>
        <Banner />
        <SideBanner />
      </div>
      <ServiceMenu />
    </div>
  );
}

export default Index;
