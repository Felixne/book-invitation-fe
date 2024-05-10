import { useCallback } from "react";
import { twMerge } from "tailwind-merge";

interface ProductImageProps {
  src: string;
  alt: string;
  onClickImage: (img: string) => void;
  className: string;
}

const ProductImage = ({ src, alt, onClickImage, className }: ProductImageProps) => {
  const handeClickImage = useCallback(() => {
    onClickImage(src);
  }, [onClickImage, src]);
  return (
    <img
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      loading="lazy"
      tabIndex={0}
      onClick={handeClickImage}
      className={twMerge("object-cover object-center rounded-xl", className)}
      alt={src}
      src={alt}
    />
  );
};
export default ProductImage;
