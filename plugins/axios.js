export default function({ $axios, app }) {
  $axios.onRequest(config => {
    // config.headers.common["Authorization"] = process.env.NEWS_API_KEY;
    config.headers.common["Authorization"] = app.$env.NEWS_API_KEY;
  });
}
