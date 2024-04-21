import { isEmpty } from "lodash";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { LoadingSkeleton } from "@components/Loading";
import useSelector from "@hooks/useSelector";

import CategoryItem from "./CategoryItem";

interface CategoriesProps {
  onChangeFilter: (category: string) => void;
}

const Categories = ({ onChangeFilter }: CategoriesProps) => {
  const categories = useSelector((state) => state.common.categories);

  return (
    <div className="w-full h-fit xs:px-6 md:px-20 xl:px-40 my-8 ">
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {isEmpty(categories)
          ? Array.from({ length: 5 }).map((_1, index) => (
              <LoadingSkeleton
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className=" xs:w-fit bg-white w-full rounded-lg"
              />
            ))
          : [{ uuid: 999, name: "All", description: "all" }, ...categories].map((item) => (
              <SwiperSlide key={item.uuid}>
                <CategoryItem key={item.uuid} name={item.name} onChangeFilter={onChangeFilter} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};
export default Categories;
