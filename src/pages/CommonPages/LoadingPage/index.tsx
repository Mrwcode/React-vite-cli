/*
 * Author: Gavin.wang
 * Date: 2025-04-28 10:29:06
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-01 10:36:34
 * FilePath: /react-vite-cli/src/pages/CommonPages/LoadingPage/index.tsx
 * Description:
 */
import { Spin } from 'antd';
import styles from './index.module.less';

const LoadingPage = () => {
  return (
    <div className={styles.loadingPage}>
      <Spin spinning={true}>
        <div className={styles.placeholder}></div>
      </Spin>
    </div>
  );
};

export default LoadingPage;
