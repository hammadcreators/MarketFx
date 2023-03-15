import axios from 'axios';


const APIKEY = "62548e716c4c467cb61e98247afe57eb";



export const NewsApi = axios.create(
    {
        "baseURL": "https://newsapi.org/v2/",
    }
)


NewsApi.interceptors.request.use(function (config) {
    config.headers.Authorization = APIKEY;

    return config;
});


NewsApi.interceptors.response.use(function (response) {
    if (response && response.data) {
        return response.data;
    }
})