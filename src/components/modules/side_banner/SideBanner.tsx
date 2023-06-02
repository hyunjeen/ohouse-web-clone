import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from "swiper";
import Image from "next/image";
import slide1 from "/public/slide1.jpeg";
import slide2 from "/public/slide2.jpeg";
import slide3 from "/public/slide3.jpeg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

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
        el: ".swiper-pagination",
        type: "custom",
        renderCustom: (swiper, current, total) => {
          return `<span}>${current}/${total}</span>`;
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className={`flex basis-[21.875%] ml-4`}
    >
      <SwiperSlide>
        <Image src={slide1} alt={"slide1"} className={`object-cover h-full`} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide2} alt={"slide2"} className={`object-cover h-full`} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide3} alt={"slide3"} className={`object-cover h-full`} />
      </SwiperSlide>
      <span className="swiper-pagination w-auto bg-gray-400 rounded-full px-4 bg-black bg-transparent-3 inline bottom-2 right-2 text-white left-auto"></span>
    </Swiper>
  );
}

export default SideBanner;
