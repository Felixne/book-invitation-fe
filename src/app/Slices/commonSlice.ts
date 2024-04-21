import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _, { isEmpty, set } from "lodash";

import { getLocalStorageByKey, setLocalStorageByKey } from "@utils/Helpers/commonHelper";
import { CategoryDataType } from "@interfaces/Common/categoryType";

import { CartDataType } from "../Types/Common/cartType";
import { LayoutSidebarTypeEnum } from "../../common/Company/Layout/constant";
import { ConfigDataType } from "../Types/Common/configType";
import { LanguageDataType } from "../Types/Common/languageType";
import { UserDataType } from "../Types/Common/userType";

interface GlobalStateLayoutSidebarConfigType {
  id: string;
  type: LayoutSidebarTypeEnum;
  isCollapsed?: boolean;
}

interface CommonGlobalStateType {
  cart: CartDataType[];
  configs: ConfigDataType[];
  languages: LanguageDataType[];
  user: UserDataType | null;
  isOpenLayoutSidebar: boolean;
  layoutSidebarType: LayoutSidebarTypeEnum;
  layoutSidebars: GlobalStateLayoutSidebarConfigType[];
  isOpenTimeoutModal: boolean;
  loadingOverlayIds: string[];
  categories: CategoryDataType[];
}

const initialState: CommonGlobalStateType = {
  configs: getLocalStorageByKey("configs", []),
  languages: [],
  user: null,
  isOpenLayoutSidebar: true,
  layoutSidebarType: LayoutSidebarTypeEnum.GITLAB,
  layoutSidebars: [],
  isOpenTimeoutModal: false,
  loadingOverlayIds: [],
  cart: [],
  categories: [],
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setConfig: (state, action: PayloadAction<ConfigDataType[]>) => {
      if (!_.isEqual(action.payload, state.configs)) {
        const newConfigs = action.payload;

        state.configs = newConfigs;
        setLocalStorageByKey("configs", newConfigs);
      }
    },
    setLanguage: (state, action: PayloadAction<LanguageDataType[]>) => {
      state.languages = action.payload;
    },
    setUser: (state, action: PayloadAction<UserDataType>) => {
      state.user = action.payload;
    },
    setCategories: (state, action: PayloadAction<CategoryDataType[]>) => {
      state.categories = action.payload;
    },
    updateUser: (state, action: PayloadAction<UserDataType>) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
    updateUserAvatar: (state, action: PayloadAction<string>) => {
      set(state, "user.avatar", action.payload);
    },
    updateUserCoverImage: (state, action: PayloadAction<string>) => {
      set(state, "user.cover_image", action.payload);
    },
    toggleLayoutSidebar: (state, action: PayloadAction<string>) => {
      const layoutSidebar = state.layoutSidebars.find((sidebar) => sidebar.id === action.payload);

      if (layoutSidebar) {
        layoutSidebar.isCollapsed = !layoutSidebar.isCollapsed;
      }
    },
    collapseLayoutSidebar: (state, action: PayloadAction<string>) => {
      const layoutSidebar = state.layoutSidebars.find((sidebar) => sidebar.id === action.payload);

      if (layoutSidebar) {
        layoutSidebar.isCollapsed = true;
      }
    },
    expandLayoutSidebar: (state, action: PayloadAction<string>) => {
      const layoutSidebar = state.layoutSidebars.find((sidebar) => sidebar.id === action.payload);

      if (layoutSidebar) {
        layoutSidebar.isCollapsed = false;
      }
    },
    setLayoutSidebarType: (state, action: PayloadAction<LayoutSidebarTypeEnum>) => {
      state.layoutSidebarType = action.payload;
    },
    addSidebar: (state, action: PayloadAction<GlobalStateLayoutSidebarConfigType>) => {
      const index = state.layoutSidebars.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        state.layoutSidebars.splice(index, 1);
      }

      state.layoutSidebars.push(action.payload);
    },
    showLoadingOverlay: (state, action: PayloadAction<string>) => {
      state.loadingOverlayIds = [...(state.loadingOverlayIds ?? []), action.payload];
    },
    hideLoadingOverlay: (state, action: PayloadAction<string>) => {
      state.loadingOverlayIds = state.loadingOverlayIds?.filter((id) => id !== action.payload);
    },
    showTimeoutModal: (state) => {
      state.isOpenTimeoutModal = true;
    },
    hideTimeoutModal: (state) => {
      state.isOpenTimeoutModal = false;
    },
    addToCart: (state, actions: PayloadAction<CartDataType>) => {
      const isIncludesCart = state.cart.find((item) => item.product_uuid === actions.payload.product_uuid);
      if (isEmpty(isIncludesCart)) {
        state.cart.push(actions.payload);
      } else {
        Object.assign(isIncludesCart, actions.payload);
      }
    },
    removeToCart: (state, actions: PayloadAction<CartDataType>) => {
      const isIncludesCart = state.cart.find((item) => item.product_uuid === actions.payload.product_uuid);
      if (isEmpty(isIncludesCart)) return;
      if (actions.payload.quantity >= 0) {
        Object.assign(isIncludesCart, actions.payload);
      }
    },
    setCarts: (state, actions: PayloadAction<CartDataType[]>) => {
      state.cart = actions.payload;
    },
  },
});

const { actions, reducer: commonReducer } = commonSlice;

export const {
  setConfig,
  setLanguage,
  setUser,
  setCategories,
  updateUser,
  updateUserAvatar,
  updateUserCoverImage,
  collapseLayoutSidebar,
  expandLayoutSidebar,
  toggleLayoutSidebar,
  setLayoutSidebarType,
  addSidebar,
  showLoadingOverlay,
  hideLoadingOverlay,
  showTimeoutModal,
  hideTimeoutModal,
  addToCart,
  removeToCart,
  setCarts,
} = actions;

export default commonReducer;
