export const LANGUAGE_API_PATH = {
  LANGUAGES: "languages",
  LANGUAGE: "language",
  LANGUAGE_ID: "language/:id",
};

export const CONFIG_API_PATH = {
  CONFIGS: "api/configs",
};

export const AUTH_API_PATH = {
  LOGIN: "api/login",
  REGISTER: "api/register",
  FORGET_PASSWORD: "auth/forget-password",
  RESET_PASSWORD: "auth/reset-password",
  REFRESH_TOKEN: "api/refresh",
  ME: "api/me",
};

export const COMMON_API_PATH = {
  UPLOAD_IMAGE: "v1/upload",
};

export const CATEGORY_API_PATH = {
  CATEGORIES: "/api/categories",
};

export const USER_API_PATH = {
  USERS: "api/users",
};

export const PRODUCT_API_PATH = {
  PRODUCTS: "api/products",
  PRODUCT_ID: (id: number) => `api/product/${id}`,
};
