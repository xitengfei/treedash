import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  hash: true,
  ssr: {},
  publicPath: '/',
  base: '/',
  resolve: {
    includes: ['docs']
  },
  navs: [
    null,
    { title: 'SourceCode', path: 'https://github.com/xitengfei/tree-lib' },
  ],
  metas: [
    {
      name: 'keywords',
      content: 'tree lib utils loop',
    },
  ],
  logo: false,
});
