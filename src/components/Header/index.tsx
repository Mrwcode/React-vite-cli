/*
 * Author: Gavin.wang
 * Date: 2025-12-01 15:44:21
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-02 10:25:00
 * FilePath: /react-vite-cli/src/components/Header/index.tsx
 * Description:
 */
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import styles from './index.module.less';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: '修改密码',
  },
  {
    key: '2',
    label: '退出系统',
  },
];

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>系统名称</div>
      <div className={styles.rightOperation}>
        <Dropdown menu={{ items }}>
          <Space className={styles.userName}>Admin</Space>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
