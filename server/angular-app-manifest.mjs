
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sarib-nasir.github.io/UniSearch_FE',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/UniSearch_FE"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1777, hash: '556616a78647976e4c234fe82767195e46997f917873733f7bb107818eb36cf8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1060, hash: 'a768ee098f1db2e52e0fb0276bac39ab7b7258e82bd1f9c6a6c3eb93246bd88a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3208, hash: 'b8f8c4c48742f01f13900871a0a0aa1c4834375dd55a68f99a69e6bb1255c4bd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5UBDEIIJ.css': {size: 820673, hash: 'SiDMNUm6+YY', text: () => import('./assets-chunks/styles-5UBDEIIJ_css.mjs').then(m => m.default)}
  },
};
