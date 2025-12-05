import { atom } from 'recoil';

export const historyRecorderAtom = atom<any[]>({
  key: 'historyRecorderAtom',
  default: [],
  dangerouslyAllowMutability: true,
});
