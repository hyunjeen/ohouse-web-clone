import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import slide1 from '/public/slide1.jpeg';
import slide2 from '/public/slide2.jpeg';
import slide3 from '/public/slide3.jpeg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Autoplay]);

function SideBanner() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      loop
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: (swiper, current, total) => {
          return `<span}>${current}/${total}</span>`;
        },
      }}
      className={`ml-4 flex basis-[21.875%]`}
    >
      <SwiperSlide>
        <Image
          src={slide1}
          alt={'slide1'}
          className={`h-full object-cover`}
          placeholder={'blur'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide2} alt={'slide2'} className={`h-full object-cover`} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide3} alt={'slide3'} className={`h-full object-cover`} />
      </SwiperSlide>
      <span className="swiper-pagination bottom-2 left-auto right-2 inline w-auto rounded-full bg-transparent-3 px-4 text-white"></span>
    </Swiper>
  );
}

export default SideBanner;
