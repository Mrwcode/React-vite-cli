/*
 * Author: Gavin.wang
 * Date: 2025-12-02 15:03:41
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-02 15:10:52
 * FilePath: /react-vite-cli/src/layouts/ScreenLayout/index.tsx
 * Description:
 */
import { Layout, Spin } from 'antd';
import styles from './index.module.less';
import { Suspense } from 'react';
import { useOutlet } from 'react-router-dom';

const { Content } = Layout;

const ScreenLayout = () => {
  const outlet = useOutlet();
  const backgroundElementRef = useRef(document.body);

  useEffect(() => {
    const { parentElement } = backgroundElementRef.current;
    if (!parentElement) {
      return null;
    }
    const observer = new ResizeObserver(() => {
      const widthScale = parentElement.offsetWidth / 1920;
      const height = parentElement.offsetHeight / 1080;
      backgroundElementRef.current.style.transform = `scale(${widthScale}, ${height})`;
    });
    observer.observe(parentElement);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Layout className={styles.wrapper} ref={backgroundElementRef}>
      <Layout className={styles.contentWrapper}>
        <Suspense
          fallback={
            <div className={styles.loadingBox}>
              <Spin spinning={true} size='large' />
            </div>
          }>
          <Content className={styles.content}>
            {outlet || (
              <div className={styles.welcomeContent}>
                <p>欢迎使用运维决策平台</p>
              </div>
            )}
          </Content>
        </Suspense>
      </Layout>
    </Layout>
  );
};

export default ScreenLayout;
