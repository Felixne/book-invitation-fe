import Product from "@common/Features/Home/Product/Product";

const ProductPage = () => {
  return (
    <div className="w-full h-fit">
      <div className="w-full h-fit px-20 py-8">
        <div className="w-full text-center h-fit text-2xl font-semibold">ALL CARD</div>
        <div className="text-sm font-thin text-center w-full ">We have some sample for your choice.</div>
      </div>
      <Product />
    </div>
  );
};
export default ProductPage;
