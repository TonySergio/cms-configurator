import { resolve } from 'path';


export default {

  plugins: [
    [
      'umi-plugin-react',
      {
        dva: false,
        antd: true,
        dynamicImport: true,
        library: 'react',
        routes: {
          exclude: [/stores\//],
        },
      },
    ],
    ['umi-plugin-mobx-state-tree', {}],
    
  ],

  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },

  history: 'hash',

  extraBabelPresets: [
    ['@babel/preset-env', { modules: false }],  
    '@babel/react'
  ],
  
  extraBabelPlugins: [
    'add-module-exports',
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',

    [
      'import',
      {
        libraryName: 'antd',
        style: true, // or 'css'
      },
    ],
  ]

}
