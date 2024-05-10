import { memo } from "react";

interface TableContentColumnListImageProps {
  images?: string[];
}

const TableContentColumnListImage = ({ images }: TableContentColumnListImageProps) => {
  return (
    <div className="w-fit flex items-start gap-x-2">
      {images?.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <img key={index} src={item} alt={item} className="h-20 w-20 rounded-md" />
      ))}
    </div>
  );
};

export default memo(TableContentColumnListImage);
