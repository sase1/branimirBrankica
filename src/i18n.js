
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationMK from "./locales/mk/translation.json";
import translationEN from "./locales/en/translation.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            mk: { translation: translationMK },
            en: { translation: translationEN },
        },
        lng: "mk", // default language
        fallbackLng: "mk",
        interpolation: { escapeValue: false },
    });

export default i18n;