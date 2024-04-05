import _ from "lodash";
import { lazy, memo, useCallback, useLayoutEffect, useMemo, useState } from "react";
import { Route, Routes, matchPath, useNavigate } from "react-router-dom";
import ProductRoutes from "src/features/Product/ProductRoutes";

import { ErrorRoutes } from "@features/Error";
import useDispatch from "@hooks/useDispatch";
import useSelector from "@hooks/useSelector";

import { LoadingOverlay } from "../../common/Company/Components";
import { AUTH_PATH } from "../Constants";
import { authService, configService } from "../Services";
import { setConfig, setUser } from "../Slices/commonSlice";

const AuthRoutes = lazy(() => import("@auth/Routes/AuthRoutes"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));

const CommonRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector((state) => state.common.user);

  const excludeRedirectPaths = useMemo(() => ["/", "error/*", "auth/*", "docs/*"], []);
  const excludeGetUserPaths = useMemo(() => [], []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getPublicConfigs = useCallback(async () => {
    const data = await configService.getPublicConfigs();

    dispatch(setConfig(data));
  }, [dispatch]);

  useLayoutEffect(() => {
    if (user?.uuid) {
      setIsLoading(false);
      return;
    }

    const { pathname } = window.location;

    const isMatchedExcludeRedirectPath = excludeRedirectPaths.some((path) => matchPath(path, pathname));
    const isMatchedGetUserExcludePath = excludeGetUserPaths.some((path) => matchPath(path, pathname));

    if (isMatchedGetUserExcludePath) {
      setIsLoading(false);
      return;
    }

    if (_.isEmpty(user)) {
      authService
        .getMe(false)
        .then((data) => {
          return dispatch(setUser(data));
        })
        .catch(() => {
          if (isMatchedExcludeRedirectPath) {
            return;
          }

          const from = pathname;
          navigate(`${AUTH_PATH.LOGIN}?redirect=${encodeURIComponent(from)}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [dispatch, navigate, excludeGetUserPaths, excludeRedirectPaths, user]);

  useLayoutEffect(() => {
    getPublicConfigs();
  }, [getPublicConfigs]);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <Routes>
      <Route path="*" element={<PrivateRoutes />} />
      <Route path="auth/*" element={<AuthRoutes />} />
      <Route path="error/*" element={<ErrorRoutes />} />
      <Route path="product/*" element={<ProductRoutes />} />
    </Routes>
  );
};

export default memo(CommonRoutes);
