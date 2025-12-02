/*
 * Author  Luke.Lu
 * Date  2023-12-10 14:14:04
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-01 10:48:12
 * Description 为全局模块提供智能补全
 */
import apiCollection from '@/services/index';
import lodash from 'lodash';
import dayjsType from 'dayjs';
import type { MessageInstance } from 'antd/es/message/interface';
import type { NotificationInstance } from 'antd/es/notification/interface';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';
import { NavigateFunction } from 'react-router-dom';
import { SetStateAction, Dispatch } from 'react';
import localStorageToolType from '@/utils/localStorageTool';
import type { RecoilValue, RecoilState } from 'recoil';

declare global {
  const api: typeof apiCollection;
  const _: typeof lodash;
  const dayjs: typeof dayjsType;
  const message: MessageInstance;
  const notification: NotificationInstance;

  function useEffect(effect: EffectCallback, deps?: DependencyList): void;
  function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
  function useRef<T>(initialValue: T): MutableRefObject<T>;
  function useRef<T>(initialValue: T | null): RefObject<T>;
  function useRef<T = undefined>(): MutableRefObject<T | undefined>;

  function useRecoilState<T>(recoilState: RecoilState<T>): [T, SetterOrUpdater<T>];
  function useRecoilValue<T>(recoilValue: RecoilValue<T>): T;
  function useSetRecoilState<T>(recoilState: RecoilState<T>): SetterOrUpdater<T>;

  function useNavigate(): NavigateFunction;
  // 工具类
  const localStorageTool: typeof localStorageToolType;

  interface Window {
    ENV: {
      debugEnvironment: string;
      routeMode: 'online' | 'local';
      buildTimeStamp: string;
      branchName: string;
      ssoControlRoom: string;
    };
  }
}
