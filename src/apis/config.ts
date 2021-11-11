import axios from "axios";
import queryString from "query-string";

export type typeAPI = "teacher" | "student" | "dsm";

const axiosClient = axios.create({
  baseURL: "https://data-school-mangement-01.herokuapp.com/api",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

// axiosClient.interceptors.response.use(
//   (response) => {
//     if (response && response.data) {
//       return response.data;
//     }
//     return response;
//   },
//   (error) => {
//     throw error;
//   }
// );

export default axiosClient;
