import { memo } from "react";
import { Route, Routes } from "react-router-dom";

import { LayoutContainer } from "@common/Layout";

import AdminUserManagement from "../User/User";
import AdminSidebar from "../AdminSidebar";
import AdminCategoryManagement from "../Category/Category";
import AdminProductManagement from "../Product/Product";

const AdminRoutes = () => {
  return (
    <LayoutContainer sidebar={<AdminSidebar />} sidebarIds={["adminSidebar"]}>
      <Routes>
        <Route
          path="*"
          element={<div className="flex min-h-fit-layout w-full items-center justify-center">Admin</div>}
        />
        <Route path="product" element={<AdminProductManagement />} />
        <Route path="user" element={<AdminUserManagement />} />
        <Route path="category" element={<AdminCategoryManagement />} />
      </Routes>
    </LayoutContainer>
  );
};

export default memo(AdminRoutes);
