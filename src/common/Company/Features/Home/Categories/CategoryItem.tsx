import { useCallback } from "react";

interface CategoryItemProps {
  name: string;
  onChangeFilter: (category: string) => void;
}

const CategoryItem = ({ name, onChangeFilter }: CategoryItemProps) => {
  const handleFilter = useCallback(() => {
    onChangeFilter(name);
  }, [onChangeFilter, name]);
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleFilter}
      className="px-4 xs:w-fit  md:col-span-1 hover:bg-violet-100 hover:border-violet-500 md:w-full  font-semibold flex items-center justify-center h-16 rounded-lg border-2 border-gray-100"
    >
      {name}
    </div>
  );
};

export default CategoryItem;
