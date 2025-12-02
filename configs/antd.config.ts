/*
 * Author: Gavin.wang
 * Date: 2025-03-17 10:22:04
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-01 15:42:12
 * FilePath: /react-vite-cli/configs/antd.config.ts
 * Description:
 */

const antdConfig = {
  theme: {
    token: {
      colorPrimary: '#4543E9',
      colorLink: '#4543E9',
    },
    components: {
      Table: {
        headerBg: 'rgba(235,238,250,1)',
        borderColor: '#e8e8e8',
        // rowHoverBg: 'rgba(19, 170, 194, 0.08)',
        // rowSelectedBg: 'none',
      },
      Button: {
        // fontSize: 16,
      },
      Layout: {
        headerBg: '#fff',
      },
      Menu: {
        groupTitleFontSize: 18,
        iconSize: 18,
        fontSize: 18,
        itemHeight: 60,
        itemColor: '#666',
        itemSelectedBg: 'rgba(85,110,231,0.1)',
      },
      Pagination: {
        itemActiveBg: 'rgba(235,238,250,1)',
        itemBg: '#f4f7fe',
      },
    },
  },
};

export default antdConfig;
