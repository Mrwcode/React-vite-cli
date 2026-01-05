/*
 * Author: Gavin.wang
 * Date: 2025-04-28 10:29:06
 * LastEditors: Gavin.wang
 * LastEditTime: 2026-01-05 17:03:19
 * FilePath: /react-vite-cli/src/utils/localStorageTool/index.ts
 * Description:
 */
const isBrowser = typeof window !== 'undefined';

export const localStorageTool = {
  getItem<T>(key: string, defaultValue?: T): T | undefined {
    if (!isBrowser) return defaultValue;
    const value = localStorage.getItem(key);
    if (value === null) return defaultValue;

    try {
      return JSON.parse(value);
    } catch {
      return value as T;
    }
  },

  setItem(key: string, value: any) {
    if (!isBrowser) return;
    localStorage.setItem(key, JSON.stringify(value));
  },

  removeItem(key: string) {
    if (!isBrowser) return;
    localStorage.removeItem(key);
  },

  clear() {
    if (!isBrowser) return;
    localStorage.clear();
  },
};

export default localStorageTool;
