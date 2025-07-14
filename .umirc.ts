import { defineConfig } from 'dumi';

const qaScript = `
  // Initialize the agent on page load.
  const fpPromise = import('https://fpjscdn.net/v3/IcWr817iN3o7Fx0wAuC1')
    .then(FingerprintJS => FingerprintJS.load())

  // Get the visitorId when you need it.
  fpPromise
    .then(fp => fp.get())
    .then(result => {
      const visitorId = result.visitorId
      console.log(visitorId)
    })
`;

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
  headScripts: [
    {content: qaScript}
  ],
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
  favicon: '/favicon.ico',
  logo: '/tree.png'
});
