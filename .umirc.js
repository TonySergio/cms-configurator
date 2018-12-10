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

  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
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
