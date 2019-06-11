export default function({ $axios, app, env }) {
  $axios.onRequest(config => {
    console.log("env", env);
    // console.log("context.env.NEWS_API_KEY", context.env.NEWS_API_KEY);
    console.log("process.env.NEWS_API_KEY", process.env.NEWS_API_KEY);
    console.log("app.$env.NEWS_API_KEY", app.$env.NEWS_API_KEY);
    // config.headers.common["Authorization"] = process.env.NEWS_API_KEY;
    config.headers.common["Authorization"] =
      env.NEWS_API_KEY || env.NUXT_ENV_NEWS_API_KEY;
  });
}
