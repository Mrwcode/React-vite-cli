/*
 * Author: Gavin.wang
 * Date: 2025-12-01 10:10:55
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-01 10:12:49
 * FilePath: /react-vite-cli/src/stores/user.ts
 * Description:
 */
import { atom } from 'recoil';

export const userAtom = atom<any>({
  key: 'userAtom',
  default: undefined,
});
