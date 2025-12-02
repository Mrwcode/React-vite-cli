/*
 * Author: Gavin.wang
 * Date: 2025-12-01 10:26:56
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-02 11:40:59
 * FilePath: /react-vite-cli/src/types/routes.d.ts
 * Description:
 */
import { ReactNode } from 'react';

export type routeItem = {
  nameEn: string;
  label?: string;
  aliasLabelInMenu?: string; //在菜单中显示的别名
  authKey?: string; // 菜单权限字段，也用于左侧菜单激活key
  showBackBtn?: boolean; //该页面是否显示返回按钮
  displayInMenu?: boolean; //是否显示在在菜单中
  path?: string;
  icon?: ReactNode;
  subMenu?: routeItem[]; //作为下级菜单的分类
  children?: routeItem[]; //作为react-router的嵌套路由进行渲染
  Component?: LazyExoticComponent<ReactNode>;
};
