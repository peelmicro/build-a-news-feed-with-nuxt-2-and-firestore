export default function({ $axios, env }) {
  $axios.onRequest(config => {
    config.headers.common["Authorization"] =
      env.NEWS_API_KEY || env.NUXT_ENV_NEWS_API_KEY;
  });
}
