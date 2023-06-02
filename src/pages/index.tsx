import Banner from "@/components/modules/banner/Banner";

function Index() {
  return (
    <div className={`flex max-w-[var(--max-container-size)] m-auto`}>
      <div className={`flex flex-1 max-h-[504px] mt-6`}>
        <Banner />
      </div>
    </div>
  );
}

export default Index;
