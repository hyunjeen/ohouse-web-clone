import Banner from "@/components/modules/banner/Banner";
import SideBanner from "@/components/modules/side_banner/SideBanner";
import ServiceMenu from "@/components/modules/service_menu/ServiceMenu";

function Index() {
  return (
    <div className={`flex flex-col max-w-[var(--max-container-size)] m-auto`}>
      <div className={`flex flex-1 max-h-[504px] mt-6`}>
        <Banner />
        <SideBanner />
      </div>
      <ServiceMenu />
    </div>
  );
}

export default Index;
