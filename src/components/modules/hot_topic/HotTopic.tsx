import React from "react";
import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faPlay } from "@fortawesome/free-solid-svg-icons";

SwiperCore.use([Navigation, Autoplay]);

function HotTopic() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      loop
      direction={"vertical"}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className={`h-[40px] flex items-center `}
    >
      {/*  가상 데이터로 실험 // 추후 순위 관련  데이터 api로 패칭후 뿌려주기 */}
      {Array.from({ length: 5 }, (val, index) => {
        index++;
        const ratingState = index % 2 === 0 ? "down" : "up";
        return { id: index, title: `title-${index}`, ratingState: ratingState };
      }).map((value, index) => {
        return (
          <SwiperSlide key={index} className={`flex items-center`}>
            <div className={`flex gap-2 items-center`}>
              <span className={`font-medium`}>{value.id}</span>
              <FontAwesomeIcon
                icon={faPlay}
                className={`${
                  value.ratingState === "up"
                    ? "-rotate-90 text-red-600 translate-y-[1px]"
                    : "rotate-90 text-blue-600 translate-y-[2px]"
                } text-[8px] mx-1 `}
              />
              <span className={`w-[104px]`}>{value.title}</span>
            </div>
          </SwiperSlide>
        );
      })}
      <FontAwesomeIcon icon={faAngleDown} className={`text-gray-400 ml-5`} />
    </Swiper>
  );
}

export default HotTopic;
