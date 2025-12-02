import { routesConfig } from '@/routes/configs';
import type { routeItem } from '@/types/routes';
import { menuRender } from '@/utils/routesHelper';
import { Layout, Menu, Tooltip } from 'antd';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './index.module.less';

const { Sider } = Layout;

const DrawerMenu = () => {
  const location = useLocation();
  const previousPageLocation = useRef<any>(null);
  const [menuItems, setMenuItems] = useState([]);
  const [siderCollapsed, setSiderCollapsed] = useState(false);

  const findMatchedLabelInRoutesConfigByPathname = (newPathnameArr: any): any => {
    let currentPageLabel = '';
    let currentPage: any;
    const findMatchedLabelInRoutesConfig = (routesArr: routeItem[]): any => {
      for (let i = 0; i < routesArr.length; i++) {
        if (routesArr[i].path === '/' + newPathnameArr[0]) {
          currentPageLabel = routesArr[i].aliasLabelInMenu || (routesArr[i].label as string);
          currentPage = routesArr[i];
        }
        if (_.isArray(routesArr[i].subMenu) && routesArr[i].subMenu) {
          findMatchedLabelInRoutesConfig(routesArr[i].subMenu!);
        }
      }
    };
    findMatchedLabelInRoutesConfig(routesConfig);

    return {
      currentPageLabel,
      currentPage,
    };
  };

  const initDefaultSelectedKeys = () => {
    const newPathnameArr = _.cloneDeep(location).pathname.split('/').slice(1);
    const { currentPage } = findMatchedLabelInRoutesConfigByPathname(newPathnameArr);

    if (currentPage?.authKey) {
      return [currentPage.authKey];
    } else {
      return ['/' + newPathnameArr[0]];
    }
  };
  const [selectedKeys, setSelectedKeys] = useState<string[]>(initDefaultSelectedKeys());

  const calcDefaultOpenKeys = () => {
    const currentPath = location.pathname;

    const target: string[] = [];
    let foundFlag = false;

    const locatePathInRoutes = (routerArr: any[]) => {
      for (let i = 0; i < routerArr.length; i++) {
        if (routerArr[i]?.path === currentPath) {
          target.push(routerArr[i].path as string);
          foundFlag = true;
          break;
        } else if (routerArr[i].subMenu) {
          target.push(routerArr[i].nameEn);
          locatePathInRoutes(routerArr[i].subMenu as routeItem[]);
          if (foundFlag) {
            break;
          } else {
            target.pop();
          }
        }
      }
    };
    locatePathInRoutes(routesConfig);
    return target;
  };

  useEffect(() => {
    setMenuItems(menuRender(routesConfig, selectedKeys));
  }, [selectedKeys]);

  const locationWatcher = () => {
    if (previousPageLocation.current) {
      const oldPathnameArr = _.cloneDeep(previousPageLocation.current).pathname.split('/').slice(1);
      const newPathnameArr = _.cloneDeep(location).pathname.split('/').slice(1);
      const compareDeep = oldPathnameArr.length > newPathnameArr.length ? oldPathnameArr.length : newPathnameArr.length;
      // 将前后路由进行深度对比，来判断是否跳转至另一大模块
      let similarDeep = 0;
      for (let i = 0; i < compareDeep; i++) {
        if (oldPathnameArr[i] !== newPathnameArr[i]) {
          similarDeep = i;
          break;
        }
      }

      if (similarDeep === 0) {
        const { currentPage } = findMatchedLabelInRoutesConfigByPathname(newPathnameArr);
        if (currentPage?.authKey) {
          setSelectedKeys([currentPage?.authKey]);
        } else {
          setSelectedKeys(['/' + newPathnameArr[0]]);
        }
        localStorageTool.clearItem('queryFormCache');
      }
    } else {
      // 此情况仅显示基础title，不拼接模块名称
    }

    previousPageLocation.current = location;
  };

  useEffect(() => {
    locationWatcher();
  }, [location]);

  return (
    <Sider
      collapsible={true}
      // collapsed={siderCollapsed}  //开启定制化的收缩，将collapsible置为false
      theme='light'
      className={styles.basicLayoutSider}
      width={300}>
      <Menu
        className={styles.mainNavMenu}
        mode='inline'
        items={[...menuItems]}
        selectedKeys={selectedKeys}
        defaultOpenKeys={calcDefaultOpenKeys()}
        style={{ borderRight: 'none' }}
      />
      {/*
       *定制化sider
       */}
      {/* <div
        className={`${styles.collapsedBtn} ${siderCollapsed ? styles.collapsed : styles.uncollapsed}`}
        onClick={() => setSiderCollapsed(!siderCollapsed)}>
        <div className={styles.up}></div>
        <div className={styles.down}></div>
      </div> */}
    </Sider>
  );
};

export default DrawerMenu;
