/*
 * Author: Gavin.wang
 * Date: 2025-12-02 11:03:20
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-02 11:04:41
 * FilePath: /react-vite-cli/src/pages/About/index.tsx
 * Description:
 */
import { Button } from 'antd';
import styles from './index.module.less';

const ComponentName = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <Button
        onClick={() => {
          navigate('/about/children');
        }}>
        二级页面
      </Button>
    </div>
  );
};

export default ComponentName;
