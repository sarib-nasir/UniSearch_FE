
export default {
  basePath: 'https://sarib-nasir.github.io/UniSearch_FE',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
