export const LANGUAGE_API_PATH = {
  LANGUAGES: "languages",
  LANGUAGE: "language",
  LANGUAGE_ID: "language/:id",
};

export const CONFIG_API_PATH = {
  CONFIGS: "api/configs",
  CONFIG: "api/config",
  CONFIG_ID: (id: number) => `api/config/${id}`,
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
  UPLOAD_IMAGE: "api/upload",
};

export const CATEGORY_API_PATH = {
  CATEGORIES: "api/categories",
  CATEGORY: "api/category",
  CATEGORY_ID: (id: number) => `api/category/${id}`,
  CATEGORIES_ACCESS_ID: (id: number) => `api/categories-access?category_uuid=${id}`,
};

export const USER_API_PATH = {
  USERS: "api/users",
  USER: "api/user",
  USER_ID: (id: number) => `api/user/${id}`,
};

export const PRODUCT_API_PATH = {
  PRODUCTS: "api/products",
  PRODUCT: "api/product",
  PRODUCT_ID: (id: number) => `api/product/${id}`,
};

export const CART_API_PATH = {
  CARTS: "api/carts",
  CART: "api/cart",
  CART_ID: (id: number) => `api/cart/${id}`,
};

export const ROLE_API_PATH = {
  ROLES: "api/roles",
  ROLE: "api/role",
  ROLE_ID: (id: number) => `api/role/${id}`,
};

export const MY_BILLING_ADDRESS_API_PATH = {
  BILLING_ADDRESSES: "api/my/billing-addresses",
  BILLING_ADDRESS: "api/my/billing-address",
  BILLING_ADDRESS_ID: (id: number) => `api/my/billing-address/${id}`,
};

export const BOOKING_FORM_API_PATH = {
  BOOKING_FORMS: "api/booking-forms",
  BOOKING_FORM: "api/booking-form",
  BOOKING_FORM_ID: (id: number) => `api/booking-form/${id}`,
};
