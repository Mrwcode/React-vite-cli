/*
 * Author: Gavin.wang
 * Date: 2025-12-01 10:03:18
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-01 10:28:47
 * FilePath: /react-vite-cli/src/services/modules/user.ts
 * Description:
 */
import http from '@/utils/request/http';

export const getUserList = (params: any) => {
  return http.get('/user/list', params);
};
