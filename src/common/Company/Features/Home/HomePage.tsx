import { useCallback, useState } from "react";

import { BaseListQueryType } from "@interfaces/Common";
import { CategoryDataType } from "@interfaces/Common/categoryType";

import Categories from "./Categories/Categories";
import Product from "./Product/Product";
import Slider from "./Slider/Slider";

const HomePage = () => {
  const [queryParams, setQueryParams] = useState<BaseListQueryType | null>(null);
  const handleFilter = useCallback((caterory: CategoryDataType) => {
    if (caterory.uuid === 999) {
      setQueryParams((prev) => ({
        ...prev,
        filterParams: [],
      }));
      return;
    }
    setQueryParams((prev) => ({
      ...prev,
      filterParams: [
        {
          filterBy: "filter.category_uuid",
          values: [caterory.uuid],
        },
      ],
    }));
  }, []);
  return (
    <div className="w-full h-fit">
      <Slider />
      <Categories onChangeFilter={handleFilter} />
      <Product queryParams={queryParams} setQueryParams={setQueryParams} />
    </div>
  );
};
export default HomePage;
