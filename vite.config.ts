/*
 * Author: Gavin.wang
 * Date: 2025-11-26 16:04:30
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-02 17:07:04
 * FilePath: /react-vite-cli/vite.config.ts
 * Description:
 */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import inject from '@rollup/plugin-inject';
import dynamicImport from 'vite-plugin-dynamic-import';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      inject({
        _: 'lodash',
        dayjs: 'dayjs',
        useState: ['react', 'useState'],
        useEffect: ['react', 'useEffect'],
        useRef: ['react', 'useRef'],
        useRecoilState: ['recoil', 'useRecoilState'],
        useRecoilValue: ['recoil', 'useRecoilValue'],
        useSetRecoilState: ['recoil', 'useSetRecoilState'],
        message: ['@/layouts/BroadcastProvider', 'message'],
        notification: ['@/layouts/BroadcastProvider', 'notification'],
        useNavigate: ['react-router', 'useNavigate'],
        api: '@/services/index.ts',
        localStorageTool: '@/utils/localStorageTool', //localStorage存储工具类
        include: /\.js$|\.jsx|\.ts$|\.tsx/,
      }),
      viteStaticCopy({
        targets: [{ src: 'configs/env.config.js', dest: 'configs' }],
      }),
      dynamicImport(),
      react(),
    ],
    publicDir: path.resolve(__dirname, 'public'),
    // 路径别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    // 开发服务器配置
    server: {
      port: 3000,
      open: true,
      strictPort: false, // 端口被占用时尝试下一个端口
      proxy: {
        // 配置后端 API 代理
        '/api': {
          target: env.VITE_PROXY_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },

    // 构建优化配置
    build: {
      target: 'es2022',
      sourcemap: false,
      outDir: 'dist',
      chunkSizeWarningLimit: 1000,
      cssCodeSplit: true, // CSS 拆分
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 分包策略：将 node_modules 单独打包
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },

    // CSS 配置
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import '@/assets/styles/variable.less';`,
          javascriptEnabled: true,
        },
      },
    },

    // 预构建优化
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  };
});
