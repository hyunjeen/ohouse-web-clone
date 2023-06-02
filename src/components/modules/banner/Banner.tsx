import Image from "next/image";
import bannerImage from "/public/banner.png";
import BannerInfo from "@/components/modules/banner/BannerInfo";

function Banner() {
  return (
    <section
      className={`flex overflow-hidden relative rounded cursor-pointer basis-[78.125%]`}
    >
      <Image
        src={bannerImage}
        alt={"배너이미지"}
        className={`transition ease-in-out hover:scale-105 flex flex-1`}
      />
      <BannerInfo />
    </section>
  );
}

export default Banner;
