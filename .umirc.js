import { resolve } from 'path'

export default {
  ignoreMomentLocale: true,
  alias: {
    components: resolve(__dirname, './src/components'),
    utils: resolve(__dirname, './src/utils'),
    config: resolve(__dirname, './src/utils/config'),
    themes: resolve(__dirname, './src/themes')
  },

  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],
  ],

  theme: './config/theme.config.js',

  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        //dynamicImport: true,
        dynamicImport: {
          webpackChunkName: true,
          loadingComponent: './components/Loader/Loader',
        },
        routes: {
          exclude: [
            /stores\//,
            /components\//
          ],
        },
        hardSource: /* isMac */ process.platform === 'darwin',
        pwa: {
          manifestOptions: {
            srcPath: 'manifest.json'
          },
        }
      },
    ],
    [
      'umi-plugin-mobx-state-tree',
      {
        // exclude: [/^\$/]
      },
    ],
  ],
  history: 'hash',
};
