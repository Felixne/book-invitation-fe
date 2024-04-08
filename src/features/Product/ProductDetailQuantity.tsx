import { memo } from "react";

import { Button } from "@components/Button";

const ProductDetailQuantity = () => {
  return (
    <div className="w-full h-fit">
      <div className="font-semibold ">QUANTITY</div>
      <div className="w-40 my-2 h-10 ">
        <div className="flex items-center justify-start">
          <div className="flex justify-center items-center w-6 h-6 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
            </svg>
          </div>
          <span id="counter" className="text-lg font-semibold mx-4">
            1
          </span>
          <div className="flex justify-center items-center w-6 h-6 rounded-full text-white focus:outline-none bg-primary-200 hover:bg-primary-300">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12" />
            </svg>
          </div>
        </div>
      </div>
      <Button color="light" className="xs:w-full md:w-2/3">
        ADD TO CARD
      </Button>
    </div>
  );
};
export default memo(ProductDetailQuantity);
