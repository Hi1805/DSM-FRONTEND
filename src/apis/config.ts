import axios from "axios";
import queryString from "query-string";

export type typeAPI = "teacher" | "student" | "dsm";
const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_URL
    : "http://localhost:4000/api";
const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async (config) => {
    return config;
  },
  function (error) {
    // Do something with request error

    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response.data;
  },
  function (error) {
    // Do something with response error
    if (error.response.status === 401) {
      console.log("unauthorized, logging out ...");
    }
    return Promise.reject(error.response.data);
  }
);

export default axiosClient;
