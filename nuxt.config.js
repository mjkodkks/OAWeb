const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: "INET ONE AUTHEN | CERTIFICATION AUTHORITY",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Prompt' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "th",
            iso: "th-TH"
          },
          {
            code: "en",
            iso: "en-US"
          }
        ],
        defaultLocale: "th",
      }
    ],
    [
      'bootstrap-vue/nuxt'
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) { }
  }
};
