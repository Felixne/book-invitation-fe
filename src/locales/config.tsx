import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./en/en.json";
import viTranslation from "./vi/vi.json";

export const resources = {
  en: {
    translation: enTranslation,
  },
  vi: {
    translation: viTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    lng: "vi",
    interpolation: {
      escapeValue: false,
    },
    resources,
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error);
  });
