import CategoryItem from "./CategoryItem";

const Categories = () => {
  const categoryList = [
    {
      uuid: 1,
      name: "All",
    },
    {
      uuid: 2,
      name: "Acrylic",
    },
    {
      uuid: 3,
      name: "Letterpress",
    },
    {
      uuid: 4,
      name: "Pocket",
    },
    {
      uuid: 5,
      name: "Luxurious",
    },
  ];
  return (
    <div className="w-full h-fit px-40 py-8 grid grid-cols-5 gap-x-6  ">
      {categoryList.map((item) => (
        <CategoryItem key={item.uuid} name={item.name} />
      ))}
    </div>
  );
};
export default Categories;
