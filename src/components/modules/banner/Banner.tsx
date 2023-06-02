import Image from "next/image";
import bannerImage from "../../../../public/banner.png";
import BannerInfo from "@/components/modules/banner/BannerInfo";

function Banner() {
  return (
    <section className={`overflow-hidden relative rounded cursor-pointer`}>
      <Image
        src={bannerImage}
        alt={"배너이미지"}
        className={`transition ease-in-out hover:scale-105 `}
      />
      <BannerInfo />
    </section>
  );
}

export default Banner;
