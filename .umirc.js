export default {

  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dynamicImport: true,
        routes: {
          exclude: [/stores\//],
        },
      },
    ],
    ['umi-plugin-mobx-state-tree'],
    ['umi-plugin-routes', {
      exclude: [/stores/]
    }]
  ]
}
