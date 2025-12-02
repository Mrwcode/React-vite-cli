import { atom } from 'recoil';

export const tokenAtom = atom<{ token: string } | null>({
  key: 'tokenAtom',
  default: localStorageTool.getItem('authorizedToken'),
});

export const userAtom = atom<any>({
  key: 'userAtom',
  default: localStorageTool.getItem('authorizedUser'),
});
