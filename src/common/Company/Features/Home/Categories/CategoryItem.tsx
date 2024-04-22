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
      className="p-4 w-fit hover:bg-violet-100 hover:border-violet-500  font-semibold flex items-center justify-center h-16 rounded-lg border-2 border-gray-100"
    >
      <div className="xs:w-32 md:w-40 text-center">{name}</div>
    </div>
  );
};

export default CategoryItem;
