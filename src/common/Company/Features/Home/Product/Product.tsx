import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@components/Button";
import { ProductDataType } from "@interfaces/Common/productType";
import { getProducts } from "@services/App/productService";
import useToast from "@hooks/useToast";
import { LoadingSkeleton } from "@components/Loading";
import { BaseListQueryType, TableFilterStateType } from "@interfaces/Common";
import useWatchParam from "@hooks/useWatchParam";

import ProductItem from "./ProductItem";

interface ProductProps {
  queryParams?: BaseListQueryType | null;
  setQueryParams?: Dispatch<SetStateAction<BaseListQueryType | null>>;
}

const Product = ({ queryParams, setQueryParams }: ProductProps) => {
  const [productData, setProductData] = useState<ProductDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  const { t } = useTranslation();
  const [filterParam] = useWatchParam("filter");
  const defaultFilter = useMemo<TableFilterStateType[] | null>(() => {
    if (!filterParam) {
      return null;
    }

    const decoded = decodeURIComponent(filterParam);

    const filterStrings = decoded.split(";");
    const filters: TableFilterStateType[] = filterStrings.map((filterString) => {
      const [filterBy, value] = filterString.split("=");
      return { filterBy, values: value.split(",").map((item) => item.replace(/\+/g, " ")) };
    });

    return filters;
  }, [filterParam]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await getProducts(
        ({
          ...queryParams,
          filterParams: [
            ...((queryParams?.filterParams as TableFilterStateType[]) || []),
            ...(defaultFilter ? (defaultFilter as TableFilterStateType[]) : []),
          ],
        } as BaseListQueryType) || ({} as BaseListQueryType),
      );
      setProductData(data);
    } catch (error) {
      toast.error(t("unknown"));
    } finally {
      setIsLoading(false);
    }
  }, [toast, t, queryParams, defaultFilter]);

  const handleSetParams = useCallback(() => {
    if (!setQueryParams) return;
    setQueryParams((prev) => ({ ...prev, pageSize: 99 }));
  }, [setQueryParams]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="xs:px-6 md:px-20 xl:px-40">
      <div className="w-full h-fit  grid xs:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {!isLoading && productData.map((item) => <ProductItem key={item.uuid} product={item} />)}
        {isLoading &&
          Array.from({ length: 8 }).map((_1, index) => (
            <LoadingSkeleton
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="col-span-1 h-60 bg-white  group rounded-xl border border-gray-100"
            />
          ))}
      </div>
      <div className="w-full py-8 flex justify-center items-center">
        <div className="xs:w-40 md:w-48 h-10">
          <Button isLoading={isLoading} onClick={handleSetParams} color="primary" className="w-full h-full">
            {t("loadMore")}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Product;
