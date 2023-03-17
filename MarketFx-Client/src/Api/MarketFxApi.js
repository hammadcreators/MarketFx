import axios from "axios";

const APIKEY = "";

export const MarketFxApi = axios.create({
  baseURL: "http://127.0.0.1:5000/user",
});

MarketFxApi.interceptors.request.use(function (config) {
  config.headers.Authorization = APIKEY;
  return config;
});

MarketFxApi.interceptors.response.use(function (response) {
  if (response && response.data) {
    return response.data;
  }
});
