import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import assistantEn from "./en/assistant.json";

export const resources = {
  en: {
    assistant: assistantEn,
  },
};

i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    ns: ["assistant"],
    interpolation: {
      escapeValue: false,
    },
    resources,
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error);
  });
