interface CategoryItemProps {
  name: string;
}

const CategoryItem = ({ name }: CategoryItemProps) => {
  return (
    <div className="px-4 xs:w-fit  md:col-span-1 hover:bg-violet-100 hover:border-violet-500 md:w-full  font-semibold flex items-center justify-center h-16 rounded-lg border-2 border-gray-100">
      {name}
    </div>
  );
};

export default CategoryItem;
