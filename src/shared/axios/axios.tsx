import axios from "axios";
import cookie from "js-cookie";
const Axios = axios.create({
  baseURL: process.env.apiGateway,
});

Axios.interceptors.request.use(
  function (config: any) {
    let token = cookie.get("token") || null;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default Axios;
