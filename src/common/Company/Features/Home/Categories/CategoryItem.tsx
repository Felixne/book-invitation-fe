import { useCallback } from "react";

import { CategoryDataType } from "@interfaces/Common/categoryType";

interface CategoryItemProps {
  category: CategoryDataType;
  onChangeFilter: (category: CategoryDataType) => void;
}

const CategoryItem = ({ category, onChangeFilter }: CategoryItemProps) => {
  const handleFilter = useCallback(() => {
    onChangeFilter(category);
  }, [onChangeFilter, category]);
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleFilter}
      className="p-4 w-fit hover:bg-violet-100 hover:border-violet-500  font-semibold flex items-center justify-center h-16 rounded-lg border-2 border-gray-100"
    >
      <div className="xs:w-32 md:w-40 text-center">{category.name}</div>
    </div>
  );
};

export default CategoryItem;
