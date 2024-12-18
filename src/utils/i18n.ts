import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import uk from '@/i18n/locales/uk.ts';
import en from '@/i18n/locales/en.ts';
import { Locals } from '@/utils/locals.ts';

const resources = {
    en: {
        translation: en,
    },
    uk: {
        translation: uk,
    },
};

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: Locals.EN.lang,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
