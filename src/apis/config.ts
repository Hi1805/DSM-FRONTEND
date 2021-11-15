import axios from "axios";
import queryString from "query-string";

export type typeAPI = "teacher" | "student" | "dsm";

const axiosClient = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response.data;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
