import { ReactNode, memo } from "react";

import { Info } from "@components/Info";

import Footer from "./Components/Footer/Footer";
import LayoutHeader from "./Components/Header/Header";

interface DefaultLayoutProps {
  children: ReactNode | ReactNode[];
  headerPrefix?: ReactNode;
}

const LayoutDefault = ({ children, headerPrefix }: DefaultLayoutProps) => {
  return (
    <>
      <LayoutHeader prefix={headerPrefix} />
      {children}
      <Footer />
      <Info />
    </>
  );
};

export default memo(LayoutDefault);
