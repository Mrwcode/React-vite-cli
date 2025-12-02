/*
 * Author: Gavin.wang
 * Date: 2025-11-27 17:34:00
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-01 13:55:48
 * FilePath: /react-vite-cli/src/layouts/AuthLayout/index.tsx
 * Description:
 */
import { tokenAtom } from '@/stores/currentUser';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const AuthLayout = () => {
  const validToken = useRecoilValue(tokenAtom);

  const location = useLocation();

  useEffect(() => {
    if (!validToken) {
      // 使用window.location进行跳转，重新进入后会刷新各种缓存的atom
      // window.location.href = `/login?redirect=${location.pathname}`;
    }
  }, [location.pathname, validToken]);

  return <Outlet />;
};

export default AuthLayout;
