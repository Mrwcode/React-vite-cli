/*
 * Author  Gavin.wang
 * Date  2025-11-28 17:16:09
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-02 16:46:02
 * Description
 */

import type { routeItem } from '@/types/routes';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { FundProjectionScreenOutlined } from '@ant-design/icons';

// 路径path和nameEn务必保持唯一
// 路径统一使用起始于根路径的绝对路径
/*
 * icon支持阿里图库和antd Icon两种方式
 */
const routesConfig: routeItem[] = [
  {
    path: '/screen',
    nameEn: 'screen',
    icon: <FundProjectionScreenOutlined />,
    label: '大屏',
    displayInMenu: true,
    Component: () => <Navigate to='/screen' replace={true} />,
  },
  {
    path: '/home',
    nameEn: 'home',
    icon: 'xiaoxi1',
    label: '首页',
    displayInMenu: true,
    Component: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/about',
    nameEn: 'about',
    icon: 'fenxibaogao',
    label: '菜单1',
    displayInMenu: true,
    Component: lazy(() => import('@/pages/About')),
  },
  {
    path: '/about/children',
    nameEn: 'children',
    label: '菜单2',
    displayInMenu: false,
    Component: lazy(() => import('@/pages/About/children')),
  },

  {
    path: '/',
    nameEn: 'redirectHome',
    Component: () => <Navigate to='/home' replace={true} />,
  },
];

const screenRoutesConfig: routeItem[] = [
  {
    path: '/screen',
    nameEn: 'screen',
    icon: <FundProjectionScreenOutlined />,
    label: '大屏',
    displayInMenu: true,
    Component: lazy(() => import('@/pages/Screen')),
  },
  {
    path: '/screen/children',
    nameEn: 'screenChildren',
    label: '二级大屏',
    displayInMenu: false,
    Component: lazy(() => import('@/pages/Screen/children')),
  },
];

export { routesConfig, screenRoutesConfig };
