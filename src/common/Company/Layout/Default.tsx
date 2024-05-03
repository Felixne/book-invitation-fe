import { ReactNode, memo, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { Info } from "@components/Info";

import Footer from "./Components/Footer/Footer";
import LayoutHeader from "./Components/Header/Header";

interface DefaultLayoutProps {
  children: ReactNode | ReactNode[];
  headerPrefix?: ReactNode;
}

const LayoutDefault = ({ children, headerPrefix }: DefaultLayoutProps) => {
  const { pathname } = useLocation();

  const isMatchAdminPath = useMemo(() => pathname.includes("admin"), [pathname]);
  return (
    <>
      <LayoutHeader prefix={headerPrefix} />
      {children}
      <Footer />
      {!isMatchAdminPath && <Info />}
    </>
  );
};

export default memo(LayoutDefault);
