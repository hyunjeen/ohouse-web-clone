import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import slide1_R from '/public/slide-banner-w.png';
import slide1 from '/public/slide1.jpeg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Autoplay]);

function SideBanner() {
  return (
    <Swiper
      id={'side-banner'}
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
      className={`flex w-full pt-[28.57142857142857%] sm:ml-4 sm:basis-[21.875%] sm:pt-0`}
    >
      {Array.from({ length: 2 }).map((value, index) => (
        <SwiperSlide key={index}>
          <Image
            src={slide1}
            alt="slide1"
            className={`hidden h-full object-cover sm:block `}
          />
          <Image
            src={slide1_R}
            alt={'slide1_R'}
            fill
            sizes={'640px'}
            className={`h-full w-full object-cover sm:hidden`}
          />
        </SwiperSlide>
      ))}
      <span className="swiper-pagination bottom-2 left-auto right-2 inline w-auto rounded-full bg-transparent-3 px-4 text-white"></span>
    </Swiper>
  );
}

export default SideBanner;
