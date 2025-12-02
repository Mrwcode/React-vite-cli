/*
 * Author: Gavin.wang
 * Date: 2025-07-30 11:04:47
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-01 11:22:34
 * FilePath: /react-vite-cli/src/pages/CommonPages/ErrorPage/index.tsx
 * Description:
 */
import { BugOutlined } from '@ant-design/icons';
import { Button, Layout, Result } from 'antd';
import { useRouteError } from 'react-router-dom';
import styles from './index.module.less';

const { Header, Content } = Layout;

const ErrorPage = () => {
  const routerError = useRouteError() as { status: number; data: string };
  const navigate = useNavigate();

  return (
    <Layout className={styles.wrapper}>
      <Header className={styles.header}>
        <div className={styles.mainTitleBox}>
          <h1>标题</h1>
        </div>
      </Header>
      <Layout className={styles.contentWrapper}>
        <Content>
          <div className={styles.content}>
            <div className={styles.errorMessage}>
              {routerError.status === 404 ? (
                <Result
                  status='404'
                  title='404'
                  subTitle='对不起，您访问的页面不存在'
                  extra={
                    <Button type='primary' onClick={() => navigate('/')}>
                      回到我的对话
                    </Button>
                  }
                />
              ) : import.meta.env.MODE === 'development' ? (
                <p>
                  <BugOutlined />
                  <span>代码出错啦</span>
                </p>
              ) : (
                <Result
                  status='500'
                  title='页面异常'
                  subTitle='抱歉，页面出现异常，请刷新页面重试或联系管理员'
                  extra={
                    <Button type='primary' onClick={() => navigate('/')}>
                      回到我的对话
                    </Button>
                  }
                />
              )}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ErrorPage;
