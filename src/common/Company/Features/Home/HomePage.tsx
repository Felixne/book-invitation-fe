import { useCallback, useState } from "react";

import { BaseListQueryType } from "@interfaces/Common";

import Categories from "./Categories/Categories";
import Product from "./Product/Product";
import Slider from "./Slider/Slider";

const HomePage = () => {
  const [queryParams, setQueryParams] = useState<BaseListQueryType | null>(null);
  const handleFilter = useCallback((caterory: string) => {
    if (caterory === "All") {
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
          filterBy: "filter.name",
          values: [caterory],
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
