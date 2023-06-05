import SwiperCore, { A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faPlay } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Autoplay]);

const data = Array.from({ length: 5 }, (val, index) => {
  index++;
  const ratingState = index % 2 === 0 ? "down" : "up";
  return { id: index, title: `title-${index}`, ratingState: ratingState };
});

function HotTopic() {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      slidesPerView={1}
      loop
      direction={"vertical"}
      autoplay={{
        delay: 3000,
      }}
      init={true}
      observer={true}
      observeParents={true}
      className={`h-[40px] flex items-center overflow-hidden `}
    >
      {data.map((value) => (
        <SwiperSlide key={value.id} className={`flex items-center`}>
          <div className={`flex gap-2 items-center `}>
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
      ))}
      <FontAwesomeIcon icon={faAngleDown} className={`text-gray-400 ml-5`} />
    </Swiper>
  );
}

export default HotTopic;
