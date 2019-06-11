export default function({ $axios, app }) {
  $axios.onRequest(config => {
    console.log("process.env.NEWS_API_KEY", process.env.NEWS_API_KEY);
    console.log("app.$env.NEWS_API_KEY", app.$env.NEWS_API_KEY);
    // config.headers.common["Authorization"] = process.env.NEWS_API_KEY;
    config.headers.common["Authorization"] = app.$env.NEWS_API_KEY;
  });
}
