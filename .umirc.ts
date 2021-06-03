import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'Treelib',
  description: '可能是你见过最完善的微前端解决方案🧐',
  hash: true,
  publicPath: '/',
  base: '/',
  resolve: {
    includes: ['docs']
  },
  devServer: {
    port: 3006
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
