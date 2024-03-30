import { HTMLAttributes, memo } from "react";
import { twMerge } from "tailwind-merge";

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  imageClassName?: string;
}

const Logo = ({ className, imageClassName }: LogoProps) => {
  return (
    <div className={className}>
      <div className={twMerge("inline-flex text-3xl font-semibold h-12 w-40 text-black", imageClassName)}>
        DEMARIAGE
      </div>
    </div>
  );
};

export default memo(Logo);
