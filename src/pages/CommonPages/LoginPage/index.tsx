import { tokenAtom, userAtom } from '@/stores/currentUser';
import { ApiOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import queryString from 'query-string';
import { useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styles from './index.module.less';

const LoginPage = () => {
  const navigate = useNavigate();
  const setToken = useSetRecoilState(tokenAtom);
  const setCurrentUser = useSetRecoilState(userAtom);
  const [loginForm] = Form.useForm();
  const [searchParams] = useSearchParams();
  const [loginLoading, setLoginLoading] = useState(false);
  const [verifyCode, setVerifyCode] = useState<{ captchaBase64: string; uuid: string } | null>();

  const verifyToken = async () => {
    const token = localStorageTool.getItem('authorizedToken')?.token;
    if (!token) {
      return;
    } else {
      try {
        api.user
          .getUserInfo()
          .then((res) => {
            if (res) navigate('/');
            else {
              localStorageTool.removeItem('authorizedToken');
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const fetchVerifyCode = async () => {
    const verifyCode = await api.user.getVerifyCode();
    setVerifyCode(verifyCode);
  };

  const fetchPublicCode = async () => {
    const publicKey = await api.user.getPublicKey();
    localStorageTool.setItem('publickKey', publicKey);
  };

  const onLogin = async () => {
    const values = loginForm.getFieldsValue();
    if (!verifyCode?.uuid) return;

    const encryptedPassword = encryptTool.encryptPassword(values.password);
    if (!encryptedPassword) return;

    const params = {
      verifyCode: values.verifycode,
      password: encryptedPassword,
      uuid: verifyCode.uuid,
      loginName: values.username,
    };
    try {
      setLoginLoading(true);
      const token = await api.user.login(params);
      if (token) {
        localStorageTool.setItem('authorizedToken', {
          token: token,
        });

        setToken({
          token: token,
        });

        const userInfo = await api.user.getUserInfo();
        setCurrentUser(userInfo);
        localStorageTool.setItem('authorizedUser', userInfo);
      }
      setLoginLoading(false);

      const { redirect } = queryString.parse(searchParams.toString());
      if (typeof redirect === 'string') navigate(redirect);
      else navigate('/');
    } catch (error) {
      fetchVerifyCode();
      setLoginLoading(false);
    }
  };

  useEffect(() => {
    if (localStorageTool.getItem('authorizedToken')) {
      // 如果已经登录，优先进行校验token并重定向，否则再拉取基本配置
      verifyToken();
    } else {
      fetchPublicCode();
      fetchVerifyCode();
    }
  }, []);

  return (
    <div className={styles.LoginWrapper}>
      <div className={styles.backgroundImg} />

      <div className={styles.loginForm}>
        <div className={styles.title}>
          <h1>系统</h1>
        </div>
        <div className={styles.loginFormContent}>
          <Form form={loginForm}>
            <Form.Item name='username'>
              <Input placeholder='用户名' />
            </Form.Item>
            <Form.Item name='password'>
              <Input.Password placeholder='密码' />
            </Form.Item>
            <div className={styles.verifyCode}>
              <Form.Item style={{ flex: 1 }} name='verifycode'>
                <Input
                  placeholder='验证码'
                  onChange={(event) => {
                    const values = loginForm.getFieldsValue();
                    if (values.username && values.password && event.target.value.length === 4) {
                      onLogin();
                    }
                  }}
                />
              </Form.Item>
              <div
                className={styles.verifyImg}
                onClick={() => {
                  fetchVerifyCode();
                }}>
                {verifyCode?.captchaBase64 ? (
                  <img src={verifyCode?.captchaBase64} alt='验证码图片' />
                ) : (
                  <div className={styles.noVerifyCode}>
                    <ApiOutlined />
                    <span>验证码接口异常</span>
                  </div>
                )}
              </div>
            </div>
            <Button type='primary' block onClick={() => onLogin()} loading={loginLoading}>
              登录
            </Button>
            <p className={styles.forgetPasswordTip}>如果忘记密码，请联系管理员</p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
