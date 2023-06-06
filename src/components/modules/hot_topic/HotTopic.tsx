import SwiperCore, { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPlay } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';

SwiperCore.use([Navigation, Autoplay]);

const data = Array.from({ length: 5 }, (val, index) => {
  index++;
  const ratingState = index % 2 === 0 ? 'down' : 'up';
  return { id: index, title: `title-${index}`, ratingState: ratingState };
});

function HotTopic() {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      slidesPerView={1}
      loop
      direction={'vertical'}
      autoplay={{
        delay: 3000,
      }}
      init={true}
      observer={true}
      observeParents={true}
      className={`flex h-[40px] items-center overflow-hidden `}
    >
      {data.map((value) => (
        <SwiperSlide key={value.id} className={`flex items-center`}>
          <div className={`flex items-center gap-2 `}>
            <span className={`font-medium`}>{value.id}</span>
            <FontAwesomeIcon
              icon={faPlay}
              className={`${
                value.ratingState === 'up'
                  ? 'translate-y-[1px] -rotate-90 text-red-600'
                  : 'translate-y-[2px] rotate-90 text-blue-600'
              } mx-1 text-[8px] `}
            />
            <span className={`w-[104px]`}>{value.title}</span>
          </div>
        </SwiperSlide>
      ))}
      <FontAwesomeIcon icon={faAngleDown} className={`ml-5 text-gray-400`} />
    </Swiper>
  );
}

export default React.memo(HotTopic);
