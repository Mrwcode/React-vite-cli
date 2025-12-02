/*
 * Author: Gavin.wang
 * Date: 2025-04-28 10:29:06
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-01 10:43:52
 * FilePath: /react-vite-cli/src/utils/localStorageTool/index.ts
 * Description:
 */
export const localStorageTool = {
  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem(key: string) {
    const originString = localStorage.getItem(key);
    try {
      if (originString) return JSON.parse(originString);
    } catch (error) {
      return originString;
    }
  },
  clearItem(key: string) {
    localStorage.removeItem(key);
  },
};

export default localStorageTool;
