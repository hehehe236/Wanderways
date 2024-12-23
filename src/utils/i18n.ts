import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Locals } from '@/utils/locals.ts';

const getDefaultLanguage = (): string => {
    const storedLanguage = localStorage.getItem('i18nextLng');
    return storedLanguage || Locals.EN.lang;
};

const initializeI18n = async () => {
    const defaultLanguage = getDefaultLanguage();
    const defaultTranslations = await import(`@/i18n/locales/${defaultLanguage}.ts`);

    await i18n
        .use(initReactI18next)
        .use(LanguageDetector)
        .init({
            resources: {
                [defaultLanguage]: {
                    translation: defaultTranslations.default,
                },
            },
            lng: defaultLanguage,
            fallbackLng: Locals.EN.lang,
            interpolation: {
                escapeValue: false,
            },
        });
};

initializeI18n();

export const loadLanguage = async (lng: string) => {
    const translations = await import(`@/i18n/locales/${lng}.ts`);
    i18n.addResourceBundle(lng, 'translation', translations.default, true, true);
    i18n.changeLanguage(lng);
};

export default i18n;
