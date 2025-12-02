/*
 * Author: Gavin.wang
 * Date: 2025-04-28 10:29:06
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-01 10:38:10
 * FilePath: /react-vite-cli/src/utils/urlTool/index.ts
 * Description:
 */
import queryString from 'query-string';

const urlTool = {
  getSearchParam: (href: string = window.location.href): any => {
    if (typeof href !== 'string') return;
    else return queryString.parse(href.split('?')[1]);
  },
};

export default urlTool;
