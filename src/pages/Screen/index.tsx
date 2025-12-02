/*
 * Author: Gavin.wang
 * Date: 2025-12-02 15:16:25
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-02 16:34:37
 * FilePath: /react-vite-cli/src/pages/Screen/index.tsx
 * Description:
 */
import { Button } from 'antd';
import styles from './index.module.less';

const ScreenPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      大屏
      <Button
        onClick={() => {
          navigate('/screen/children');
        }}>
        二级页面
      </Button>
    </div>
  );
};

export default ScreenPage;
