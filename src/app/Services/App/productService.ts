import { ProductDataType } from "@interfaces/Common/productType";

const fakeData = Array.from({ length: 20 }).map((_, index) => ({
  uuid: index + 1,
  name: "Simple Wedding Card",
  price: "10.000",
  image: "https://lacoweddingpaper.com/wp-content/uploads/2024/02/DSC_0332-scaled.jpg",
  description:
    " Lorem ipsum dolor sit amet. A odit quia et blanditiis veritatis eum quia alias ea repudiandae inventore. Est rerum possimus est quod reiciendis eos tempore fugiat in velit dolor? Aut nisiplaceat ut dicta consequatur aut vero voluptatem vel temporibus blanditiis ab quos quasi eum corrupti provident eos ullam necessitatibus.",
  category: "Simple Card",
}));
const getProducts = async (): Promise<ProductDataType[]> => {
  return Promise.resolve(fakeData);
};

const getProductById = async (id: number | string): Promise<ProductDataType> => {
  console.log(id);
  return Promise.resolve({
    uuid: 1,
    name: "Simple Wedding Card",
    price: "10.000",
    image: "https://lacoweddingpaper.com/wp-content/uploads/2024/02/DSC_0332-scaled.jpg",
    description:
      " Lorem ipsum dolor sit amet. A odit quia et blanditiis veritatis eum quia alias ea repudiandae inventore. Est rerum possimus est quod reiciendis eos tempore fugiat in velit dolor? Aut nisiplaceat ut dicta consequatur aut vero voluptatem vel temporibus blanditiis ab quos quasi eum corrupti provident eos ullam necessitatibus.",
    category: "Simple Card",
  });
};

export { getProductById, getProducts };
