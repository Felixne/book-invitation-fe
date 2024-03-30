interface CategoryItemProps {
  name: string;
}

const CategoryItem = ({ name }: CategoryItemProps) => {
  return (
    <div className="col-span-1 hover:bg-pink-100 hover:border-pink-200 font-semibold flex items-center justify-center h-16 rounded-lg border-2 border-gray-100">
      {name}
    </div>
  );
};

export default CategoryItem;
