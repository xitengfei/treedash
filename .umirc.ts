import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'Treedash',
  description: '一个轻量级的Javascript树形数据处理工具库',
  hash: true,
  publicPath: '/',
  base: '/',
  outputPath: 'docs',
  resolve: {
    includes: ['src']
  },
  devServer: {
    port: 8001
  },
  navs: [
    null,
    { title: 'SourceCode', path: 'https://github.com/xitengfei/treedash' },
  ],
  metas: [
    {
      name: 'keywords',
      content: 'tree lib utils loop',
    },
  ],
  locales: [['zh-CN', '中文'], ['en-US', 'English']],
  logo: '/tree.png'
});
