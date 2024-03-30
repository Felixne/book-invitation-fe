import Categories from "./Categories/Categories";
import Product from "./Product/Product";
import Slider from "./Slider/Slider";

const HomePage = () => {
  return (
    <div className="w-full h-fit">
      <Slider />
      <Categories />
      <Product />
    </div>
  );
};
export default HomePage;
