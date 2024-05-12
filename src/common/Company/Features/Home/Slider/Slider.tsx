import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { isEmpty } from "lodash";

import useSelector from "@hooks/useSelector";
import { commonSelector } from "@selectors/index";
import { LoadingSkeleton } from "@components/Loading";

const Slider = () => {
  const sliderConfigValue = useSelector(commonSelector.homeSliderSelector);
  return (
    <div className="w-full xs:h-60 md:h-96">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        {isEmpty(sliderConfigValue) ? (
          <LoadingSkeleton className="w-full xs:h-60 md:h-96" />
        ) : (
          sliderConfigValue?.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={index}>
              <img className="w-full xs:h-60 md:h-96  object-scale-down" alt="de-mairiage" src={item} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};
export default Slider;
