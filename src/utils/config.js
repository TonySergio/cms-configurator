module.exports = {
  siteName: 'CMS2 Configurator',
  copyright: 'JVL Gaming © 2018',
  fixedHeader: true,
  logoPath: '/jvl.png',

  i18n: {
    /* Countrys flags: https://www.flaticon.com/packs/countrys-flags */
    languages: [
      {
        key: 'en',
        title: 'English',
        flag: '/america.svg',
      }
    ],
    defaultLanguage: 'en'
  },

  /* Layout configuration, specify which layout to use for route. */
  layouts: [
    {
      name: 'primary',
      include: [/.*/],
      exlude: [/(\/(en|zh))*\/login/],
    },
  ]

}
