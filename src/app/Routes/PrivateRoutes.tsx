import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "src/features/Admin/Routes/Routes";

import HomeRoutes from "../../features/Home/Routes/HomeRoutes";

const PrivateRoutes = () => {
  // const { isAdmin } = useSelector(userRoleSelector);
  // console.log(isAdmin);

  return (
    <Routes>
      <Route path="admin/*" element={<AdminRoutes />} />
      <Route path="/*" element={<HomeRoutes />} />
    </Routes>
  );
};

export default memo(PrivateRoutes);
