import Image from 'next/image';
import bannerImage from '/public/banner.png';
import BannerInfo from '@/components/modules/banner/BannerInfo';

function Banner() {
  return (
    <section
      className={`relative flex basis-[78.125%] cursor-pointer overflow-hidden rounded`}
    >
      <Image
        src={bannerImage}
        alt={'배너이미지'}
        className={`flex flex-1 transition ease-in-out hover:scale-105`}
        placeholder={'blur'}
      />
      <BannerInfo />
    </section>
  );
}

export default Banner;
