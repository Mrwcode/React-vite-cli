/*
 * Author  Luke.Lu
 * Date  2024-01-12 23:26:58
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-01 13:48:45
 * Description
 */
import { atom } from 'recoil';

export const historyRecorderAtom = atom<any[]>({
  key: 'historyRecorderAtom',
  default: [],
  dangerouslyAllowMutability: true,
});
