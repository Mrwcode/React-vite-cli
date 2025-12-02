/*
 * Author: Gavin.wang
 * Date: 2025-11-28 13:58:14
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-02 11:44:30
 * FilePath: /react-vite-cli/src/utils/routesHelper/index.tsx
 * Description:
 */
import { matchPath, Link } from 'react-router-dom';
import styles from './index.module.less';
import tuoyuan from '@/assets/images/tuoyuan.png';

import type { routeItem } from '@/types/routes';
import Icon from '@/components/Icon';
//根据路由配置，匹配相应的菜单项，目前主要用于面包屑
let matchedRouteLabel = '';

export const matchUrlWithRouteConfig = (url: string, routesArr: routeItem[]): string => {
  routesArr.map((item) => {
    if (item.path === url && item.label) {
      matchedRouteLabel = item.label;
    } else if (item.path && matchPath({ path: item.path, caseSensitive: false }, url) && item.label) {
      matchedRouteLabel = item.label;
    } else if (item.subMenu) {
      return matchUrlWithRouteConfig(url, item.subMenu);
    } else if (item.children) {
      return matchUrlWithRouteConfig(url, item.children);
    }
  });

  return matchedRouteLabel;
};

// 渲染菜单
export const menuRender = (_routesConfig: any[], selectedKeys?: any): any => {
  return _routesConfig
    .map((route: routeItem) => {
      const { path, nameEn, label, aliasLabelInMenu, icon, displayInMenu, subMenu } = route;
      const isSelected = selectedKeys?.includes(path);
      const iconColor = isSelected ? '#4543E9' : '#666';
      if (displayInMenu && label) {
        return {
          key: path || nameEn,
          icon: icon ? <Icon name={icon} color={iconColor} /> : null,
          children: subMenu ? menuRender(subMenu, selectedKeys) : undefined,
          label: (() => {
            if (!subMenu) {
              return (
                <div className={styles.menuItem}>
                  <Link to={`.${path}`}>{aliasLabelInMenu || label}</Link>
                  {isSelected && <img src={tuoyuan} alt='点' />}
                </div>
              );
            } else {
              return aliasLabelInMenu || label;
            }
          })(),
        };
      }
    })
    .filter((menu) => menu);
};
