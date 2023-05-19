import axios from "axios";

const APIKEY = localStorage.getItem("token");

export const MarketFxApi = axios.create({
  baseURL: "http://127.0.0.1:5000",
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
