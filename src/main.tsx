/*
 * Author: Gavin.wang
 * Date: 2025-11-26 16:04:30
 * LastEditors: Gavin.wang
 * LastEditTime: 2026-01-05 17:16:57
 * FilePath: /react-vite-cli/src/main.tsx
 * Description:
 */
import '@/assets/styles/initial.less';
import { App, ConfigProvider } from 'antd';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import RouterGenerator from './routes';
import antdConfig from '../configs/antd.config';
import BroadcastProvider from './layouts/BroadcastProvider';
import LoadingPage from './pages/CommonPages/LoadingPage';
import './i18n';
import 'dayjs/locale/zh-cn';

const ProjectApp = () => {
  return (
    <RecoilRoot>
      <ConfigProvider {...antdConfig}>
        <App style={{ height: '100%' }}>
          <BroadcastProvider />
          <Suspense fallback={<LoadingPage />}>
            <RouterGenerator />
          </Suspense>
        </App>
      </ConfigProvider>
    </RecoilRoot>
  );
};
ReactDOM.createRoot(document.getElementById('root')!).render(<ProjectApp />);
