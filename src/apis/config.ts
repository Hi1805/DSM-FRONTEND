import axios from "axios";
import queryString from "query-string";
import { toast } from "react-toastify";
import { getUserToken } from "./../helpers/getUserToken";

export type typeAPI = "teacher" | "student" | "dsm";
const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://data-school-mangement-01.herokuapp.com/api"
    : "http://localhost:4000/api";

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "content-type": "application/json",
    // "user-agent": user_agent,
    authorization: "",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async (config) => {
    const access_token = getUserToken();
    config.headers = {
      authorization: `Bearer ${access_token}`,
    };
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
      toast.error("Please Login into System");
      window.location.href = "/login";
    }
    return Promise.reject(error.response.data);
  }
);

export default axiosClient;
