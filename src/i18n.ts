/*
 * Author: Gavin.wang
 * Date: 2026-01-05 15:45:27
 * LastEditors: Gavin.wang
 * LastEditTime: 2026-01-05 17:17:27
 * FilePath: /react-vite-cli/src/i18n.ts
 * Description:
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import zhCommon from './locales/zh/common.json';
import enCommon from './locales/en/common.json';

i18n.use(initReactI18next).init({
  lng: localStorageTool.getItem<'zh' | 'en'>('language', 'zh'),
  fallbackLng: 'zh',
  resources: {
    zh: {
      translation: zhCommon,
    },
    en: {
      translation: enCommon,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
