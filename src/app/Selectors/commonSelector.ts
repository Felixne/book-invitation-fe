import { createSelector } from "@reduxjs/toolkit";

import { LayoutSidebarTypeEnum } from "@common/Layout";

import { ConfigKeyEnum, UserRoleEnum } from "../Enums";
import { RootState } from "../store";

export const logoConfigSelector = createSelector(
  (state: RootState) => state.common.configs.find((config) => config.key === ConfigKeyEnum.LOGO),
  (logo) => logo?.value,
);

export const appNameConfigSelector = createSelector(
  (state: RootState) => state.common.configs.find((config) => config.key === ConfigKeyEnum.APP_NAME),
  (appName) => appName?.value ?? process.env.REACT_APP_NAME,
);

export const homeSliderSelector = createSelector(
  (state: RootState) => state.common.configs.find((config) => config.key === ConfigKeyEnum.IMAGE_HEADER_HOME),
  (config) => config?.value as unknown as string[],
);

export const statusOrderSelector = createSelector(
  (state: RootState) => state.common.configs.find((config) => config.key === ConfigKeyEnum.STATUS_ORDER),
  (config) => config?.value,
);

export const configSelector = createSelector(
  (state: RootState) => state.common.configs,
  (config) =>
    config.reduce<Record<ConfigKeyEnum | string, unknown>>(
      (acc, curr) => ({ ...acc, [curr.key]: curr.value }),
      {},
    ),
);

export const layoutSidebarSelector = (id: string) =>
  createSelector(
    (state: RootState) => state.common.layoutSidebars.find((sidebar) => sidebar.id === id),
    (sidebar) => sidebar,
  );

export const layoutSidebarsSelector = (ids: string[]) =>
  createSelector(
    (state: RootState) => state.common.layoutSidebars.filter((sidebar) => ids.includes(sidebar.id)),
    (sidebars) => sidebars,
  );

export const layoutSidebarTypeSelector = (id: string) =>
  createSelector(layoutSidebarSelector(id), (layoutSidebar) => {
    let isJira = false;
    let isSEM = false;
    let isGitlab = false;

    if (layoutSidebar) {
      isJira = layoutSidebar.type === LayoutSidebarTypeEnum.JIRA;
      isSEM = layoutSidebar.type === LayoutSidebarTypeEnum.SEM;
      isGitlab = layoutSidebar.type === LayoutSidebarTypeEnum.GITLAB;
    }

    return {
      isJira,
      isSEM,
      isGitlab,
    };
  });

export const layoutSidebarIsCollapsedSelector = (id: string) =>
  createSelector(layoutSidebarSelector(id), (sidebar) => sidebar?.isCollapsed ?? false);

export const userRoleSelector = createSelector(
  (state: RootState) => state.common.user,
  (user) => {
    const isSystem = user?.role?.name === UserRoleEnum.SYSTEM;
    const isAdmin = user?.role?.name === UserRoleEnum.ADMIN;

    return {
      isSystem,
      isAdmin,
    };
  },
);
