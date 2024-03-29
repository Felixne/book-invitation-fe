import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="w-full h-120">
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
        <SwiperSlide>
          <img
            className="w-full h-120 object-cover"
            alt="de-mairiage"
            src="https://thietkekhainguyen.com/wp-content/uploads/2022/10/thiep-cuoi-trong-suot-788x445.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-120 object-cover"
            alt="de-mairiage"
            src="https://lacoweddingpaper.com/wp-content/uploads/2023/03/1-03-scaled.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-120 object-cover"
            alt="de-mairiage"
            src="https://thietkekhainguyen.com/wp-content/uploads/2022/10/thiep-cuoi-trong-suot-788x445.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-120 object-cover"
            alt="de-mairiage"
            src="https://lacoweddingpaper.com/wp-content/uploads/2023/03/1-03-scaled.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slider;
