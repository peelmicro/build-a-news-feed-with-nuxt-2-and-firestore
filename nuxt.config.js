const env = require("dotenv").config();

export default {
  mode: "spa",
  env: env.parsed,
  router: {
    middleware: "check-auth"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#9ccc65" },
  /*
   ** Global CSS
   */
  css: [
    { src: "vue-material/dist/vue-material.min.css", lang: "css" },
    { src: "~/assets/theme.scss", lang: "scss" }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/vue-material" },
    { src: "~/plugins/axios" },
    { src: "~/plugins/firestore" },
    { src: "~/plugins/time-filters" }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    [
      "nuxt-env",
      {
        keys: [
          { key: "NEWS_API_KEY", secret: true } // Only inject the var server side
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    credentials: true,
    proxy: true
  },
  proxy: {
    "/api/": {
      target: "https://newsapi.org/v2/",
      pathRewrite: { "^/api/": "" }
    },
    "/register/": {
      target:
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
        process.env.FIREBASE_API_KEY,
      pathRewrite: { "^/register/": "" }
    },
    "/login/": {
      target:
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
        process.env.FIREBASE_API_KEY,
      pathRewrite: { "^/login/": "" }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
