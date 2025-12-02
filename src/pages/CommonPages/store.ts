/*
 * Author  Luke.Lu
 * Date  2024-01-30 10:01:51
 * LastEditors  Luke.Lu
 * LastEditTime  2024-03-22 16:29:29
 * Description
 */
import { atom } from 'recoil';

export const systemConfigAtom = atom<Record<string, any>>({
  key: 'systemConfigAtom',
  default: {},
});
