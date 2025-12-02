/*
 * Author: Gavin.wang
 * Date: 2025-11-28 18:19:24
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-01 11:39:54
 * FilePath: /react-vite-cli/src/utils/request/index.ts
 * Description:
 */
import axios from 'axios';

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 15000,
  withCredentials: false,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('TOKEN');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 文件下载必须加 responseType
    if (config.url?.includes('/download')) {
      config.responseType = 'blob';
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// 响应拦截器
service.interceptors.response.use(
  (response: any) => {
    const { data, config } = response;

    // 如果是文件流，直接返回 Blob
    if (config.responseType === 'blob') return data;

    // 后端自定义 code 处理（依据你们后端标准修改）
    if (data.code === 200) {
      return data.data ?? data;
    }

    // token 失效
    if (data.code === 401) {
      localStorage.removeItem('TOKEN');
      window.location.href = '/login';
      return Promise.reject('登录已过期');
    }

    // 业务报错
    return Promise.reject(data.message || '接口错误');
  },
  (error) => {
    console.error('API Error:', error);

    // 网络错误统一提示
    if (error.message.includes('Network Error')) {
      alert('网络异常，请检查服务器');
    }

    return Promise.reject(error);
  },
);

export default service;
