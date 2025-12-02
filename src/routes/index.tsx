/*
 * Author  Luke.Lu
 * Date  2023-12-05 13:54:13
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-02 11:38:18
 * Description
 */
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routesConfig } from '@/routes/configs';
import type { routeItem } from '@/types/routes';

import LoginPage from '@/pages/CommonPages/LoginPage';
import ErrorPage from '@/pages/CommonPages/ErrorPage';

const AuthLayout = lazy(() => import('@/layouts/AuthLayout'));
const BasicLayout = lazy(() => import('@/layouts/BasicLayout'));

const processedArr: routeItem[] = [];
const routesRender = (routesArr: routeItem[]) => {
  routesArr.map((route) => {
    if (route.Component) {
      processedArr.push(route);
    } else if (route.subMenu) {
      routesRender(route.subMenu);
    }
  });

  return processedArr;
};

const RouterGenerater = () => {
  const [router, setRouter] = useState<any>(
    createBrowserRouter([
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/',
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/',
            element: <BasicLayout />,
            children: routesRender(routesConfig),
          },
        ],
      },
    ]),
  );

  /*
   * 走在线路由逻辑
   */
  // const matchLocalRouter = (path: string, routes = routesConfig): routeItem | null => {
  //   for (const item of routes) {
  //     if (item.path === path) return item;
  //     if (item.subMenu) {
  //       const found = matchLocalRouter(path, item.subMenu);
  //       if (found) return found;
  //     }
  //   }
  //   return null;
  // };

  // const initRouter = async () => {
  //   try {
  //     const res: onlineMenuObject[] = [];
  //     const permissionRouters: any = [];
  //     res?.forEach((route) => {
  //       if (!route.subMenu) {
  //         permissionRouters.push(matchLocalRouter(route.path));
  //       } else {
  //         route.subMenu.forEach((sub) => {
  //           permissionRouters.push(matchLocalRouter(sub.path));
  //         });
  //       }
  //     });

  //     setRouter(
  //       createBrowserRouter([
  //         {
  //           path: '/login',
  //           element: <LoginPage />,
  //         },
  //         {
  //           path: '/',
  //           element: <AuthLayout />,
  //           errorElement: <ErrorPage />,
  //           children: [
  //             {
  //               path: '/',
  //               element: <BasicLayout />,
  //               children: permissionRouters,
  //             },
  //           ],
  //         },
  //       ]),
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   initRouter();
  // }, [token]);

  return <RouterProvider router={router} />;
};

export default RouterGenerater;
