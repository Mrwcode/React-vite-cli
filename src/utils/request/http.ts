/*
 * Author: Gavin.wang
 * Date: 2025-11-28 18:20:29
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-05 11:08:24
 * FilePath: /react-vite-cli/src/utils/request/http.ts
 * Description:
 */
import request from './index';

export function get(url: string, params?: any) {
  return request({
    url,
    method: 'GET',
    params,
  });
}

export function post(url: string, data?: any) {
  return request({
    url,
    method: 'POST',
    data,
  });
}
export const put = (url: string, data?: any) => {
  return request({ url, method: 'put', data });
};

export const del = (url: string, data?: any) => {
  return request({ url, method: 'delete', data });
};

export function download(url: string, params?: any) {
  return request({
    url,
    method: 'GET',
    params,
    responseType: 'blob',
  });
}

export default { get, post, put, del, download };
