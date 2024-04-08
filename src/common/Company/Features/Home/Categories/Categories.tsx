import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { CategoryDataType } from "@interfaces/Common/categoryType";
import { getCaterories } from "@services/App/categoryService";
import useToast from "@hooks/useToast";
import { LoadingSkeleton } from "@components/Loading";

import CategoryItem from "./CategoryItem";

const Categories = () => {
  const [categories, setCategories] = useState<CategoryDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  const { t } = useTranslation();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await getCaterories();
      setCategories(data);
    } catch (error) {
      toast.error(t("unknown"));
    } finally {
      setIsLoading(false);
    }
  }, [t, toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="w-full h-fit xs:px-6 md:px-20 xl:px-40 my-8 xs:flex xs:overflow-x-scroll hidden-scrollbar md:overflow-auto md:grid md:grid-cols-5 xs:gap-x-4 md:gap-x-6  ">
      {!isLoading && categories.map((item) => <CategoryItem key={item.uuid} name={item.name} />)}
      {isLoading &&
        Array.from({ length: 5 }).map((_1, index) => (
          <LoadingSkeleton
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className=" xs:w-fit bg-white md:col-span-1 md:w-full rounded-lg"
          />
        ))}
    </div>
  );
};
export default Categories;
