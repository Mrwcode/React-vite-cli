/*
 * Author: Gavin.wang
 * Date: 2025-11-28 18:13:34
 * LastEditors: Gavin.wang
 * LastEditTime: 2026-01-05 17:16:22
 * FilePath: /react-vite-cli/src/pages/Home/index.tsx
 * Description:
 */
import { DatePicker } from 'antd';
import styles from './index.module.less';
import api from '@/services';
import { useTranslation } from 'react-i18next';

const ComponentName = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      {t('测试中英文切换')}
      <br />
      <DatePicker />
    </div>
  );
};

export default ComponentName;
