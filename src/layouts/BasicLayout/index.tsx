/*
 * Author: Gavin.wang
 * Date: 2025-10-30 09:46:25
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-02 17:33:56
 * FilePath: /react-vite-cli/src/layouts/BasicLayout/index.tsx
 * Description:
 */
import { historyRecorderAtom } from '@/stores/historyRecorder';
import { Breadcrumb, Button, Layout, Menu, Spin, Tooltip } from 'antd';
import { Suspense } from 'react';
import { Link, useLocation, useOutlet } from 'react-router-dom';
import styles from './index.module.less';
import DrawerMenu from '@/components/DrawerMenu';
import Header from '@/components/Header';
import { routesConfig } from '@/routes/configs';
import { matchUrlWithRouteConfig } from '@/utils/routesHelper';

const { Content } = Layout;

const BasicLayout = () => {
  const [historyRecorder, setHistoryRecorder] = useRecoilState(historyRecorderAtom);
  const location = useLocation();
  const backgroundElementRef = useRef(document.body);
  const outlet = useOutlet();
  const navigate = useNavigate();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const breadcrumbBoxItems = pathSnippets?.map((_item, index) => {
    let url: any = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const breadcrumbTitle = matchUrlWithRouteConfig(url, routesConfig);

    const matchedRecentHistory = _.findLast(historyRecorder, (item) => item.pathname === url);

    if (matchedRecentHistory) url = matchedRecentHistory;
    return {
      key: matchedRecentHistory ? matchedRecentHistory.key : url,
      title:
        index === pathSnippets.length - 1 ? (
          <span>{breadcrumbTitle}</span>
        ) : (
          <Link to={url} state={location.state || {}} className={styles.breadcrumbLink}>
            {breadcrumbTitle}
          </Link>
        ),
    };
  });

  useEffect(() => {
    if (historyRecorder.length > 9) historyRecorder.shift();
    historyRecorder.push(location);
    setHistoryRecorder(historyRecorder);
  }, [location]);

  useEffect(() => {
    const { parentElement } = backgroundElementRef.current;
    if (!parentElement || !backgroundElementRef.current) {
      return;
    }

    const BASE_WIDTH = 1920;
    const BASE_HEIGHT = 1080;

    const resizeHandler = () => {
      const widthScale = parentElement.offsetWidth / BASE_WIDTH;
      const heightScale = parentElement.offsetHeight / BASE_HEIGHT;
      backgroundElementRef.current.style.transform = `scale(${widthScale}, ${heightScale})`;
    };

    const observer = new ResizeObserver(resizeHandler);
    observer.observe(parentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout className={styles.wrapper} ref={backgroundElementRef}>
      <Suspense
        fallback={
          <div className={styles.loadingBox}>
            <Spin spinning={true} size='large' />
          </div>
        }>
        <Header />
        <Layout>
          <DrawerMenu />
          <Layout>
            <Content className={styles.content} id='allowScreenArea'>
              <div className={styles.topNavBox}>
                <div className={styles.breadcrumb}>
                  <Breadcrumb items={breadcrumbBoxItems} />
                </div>
                <div className={styles.backBtnBox}>
                  {outlet?.props?.children?.props.match?.route?.showBackBtn && (
                    <Button
                      size='small'
                      onClick={() => {
                        const currentPath: string = outlet?.props?.children?.props.match?.route?.path;
                        if (typeof currentPath === 'string') {
                          const backLevelPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
                          const matchedRecentHistory = _.findLast(
                            historyRecorder,
                            (item) => item.pathname === backLevelPath,
                          );

                          if (matchedRecentHistory)
                            navigate(matchedRecentHistory?.pathname + matchedRecentHistory?.search);
                          else navigate(backLevelPath);
                        } else {
                          navigate(-1);
                        }
                      }}>
                      返回
                    </Button>
                  )}
                </div>
              </div>
              {outlet || (
                <div className={styles.welcomeContent}>
                  <p>欢迎使用</p>
                </div>
              )}
            </Content>
          </Layout>
        </Layout>
      </Suspense>
    </Layout>
  );
};

export default BasicLayout;
