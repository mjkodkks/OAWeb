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
      { hid: "description", name: "description", content: pkg.description },
      { name: "google-site-verification", content: "AYCB1smPPbLs5bzV_l0q-ig0wLMhEtQxPT4ZppGdiyo" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Prompt' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },

  /*
  ** Global CSS
  */
  css: [
    'assets/main.css',
  ],

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
            iso: "th-TH",
            file: 'th.js'
          },
          {
            code: "en",
            iso: "en-US",
            file: 'en.js'
          }
        ],
        defaultLocale: "th",
        lazy: true,
        langDir: 'locales/',
      }
    ],
    [
      'bootstrap-vue/nuxt'
    ],
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-128975082-1',
    }]
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
