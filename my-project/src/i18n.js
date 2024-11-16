import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import am from './locales/am.json';
const savedLanguage = localStorage.getItem('language') || 'en';
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    am: { translation: am },
  },
  lng: savedLanguage, // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React handles XSS
  },detection: {
    order: ['localStorage', 'navigator'], // Detect language from localStorage, fallback to browser
    caches: ['localStorage'], // Cache language in localStorage
  },
});

export default i18n;