import { defineConfig } from 'dumi';

const qaScript = `
  function generateUUID() {
    let e = (new Date).getTime();
    return "undefined" != typeof performance && "function" == typeof performance.now && (e += performance.now()),
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
      let n = (e + 16 * Math.random()) % 16 | 0;
      return e = Math.floor(e / 16),
      ("x" == t ? n : 3 & n | 8).toString(16)
      }
    ))
  }          
  function getUUID() {
    if (!navigator.cookieEnabled || !window.localStorage)
      return "";
    const e = window.localStorage;
    let t = e.getItem("ex__uid");
    return t || (t = generateUUID(), e.setItem("ex__uid", t)), t
  };
  __qa__ = {
    modid: getUUID(),
    channel_id: 'test_00001',
    app_id: 'treedash'
  };
  (function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = '//s.ssl.qhres2.com/pkg/anti_captcha/analytics/v1.1.1/analytics.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s)
  })()
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
