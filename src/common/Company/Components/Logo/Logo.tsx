import { HTMLAttributes, memo } from "react";
import { twMerge } from "tailwind-merge";

import { useSelector } from "@hooks/index";
import { commonSelector } from "@selectors/index";

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  imageClassName?: string;
}

const Logo = ({ className, imageClassName }: LogoProps) => {
  const logoConfigValue = useSelector(commonSelector.logoConfigSelector);
  const appNameConfigValue = useSelector(commonSelector.appNameConfigSelector);

  return (
    <div className={className}>
      {!logoConfigValue && (
        <div
          className={twMerge(
            "inline-flex h-12 xs:w-28 md:w-40 animate-pulse rounded-none bg-gray-100",
            imageClassName,
          )}
        />
      )}
      {logoConfigValue && <img src={logoConfigValue} alt={appNameConfigValue} className={imageClassName} />}
    </div>
  );
};

export default memo(Logo);
