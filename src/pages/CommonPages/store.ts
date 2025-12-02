/*
 * Author: Gavin.wang
 * Date: 2025-04-28 10:29:06
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-02 16:52:16
 * FilePath: /react-vite-cli/src/pages/CommonPages/store.ts
 * Description:
 */
import { atom } from 'recoil';

export const systemConfigAtom = atom<Record<string, any>>({
  key: 'systemConfigAtom',
  default: {},
});
