import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { isEmpty } from "lodash";

import { LoadingSkeleton } from "@components/Loading";
import useSelector from "@hooks/useSelector";
import { CategoryDataType } from "@interfaces/Common/categoryType";

import CategoryItem from "./CategoryItem";

interface CategoriesProps {
  onChangeFilter: (category: CategoryDataType) => void;
}

const Categories = ({ onChangeFilter }: CategoriesProps) => {
  const { t } = useTranslation();
  const categories = useSelector((state) => state.common.categories);

  return (
    <div className="w-full h-fit xs:px-6 md:px-20 xl:px-40 my-8 ">
      <Swiper
        slidesPerView={6}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1248: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        {isEmpty(categories)
          ? Array.from({ length: 5 }).map((_1, index) => (
              <LoadingSkeleton
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className=" xs:w-fit bg-white w-full rounded-lg"
              />
            ))
          : [{ uuid: 999, name: t("all"), description: "all" } as CategoryDataType, ...categories].map(
              (item) => (
                <SwiperSlide key={item.uuid}>
                  <CategoryItem key={item.uuid} category={item} onChangeFilter={onChangeFilter} />
                </SwiperSlide>
              ),
            )}
      </Swiper>
    </div>
  );
};
export default Categories;
