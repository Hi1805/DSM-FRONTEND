import axios, { AxiosRequestConfig } from "axios";
import { typeAPI } from "./config";

const href = "https://data-school-mangement-01.herokuapp.com/api";
const API = {
  get: function (type: typeAPI, args?: AxiosRequestConfig) {
    return axios.get(`${href}/${type}`).then((response) => response.data);
  },
  put: function (type: typeAPI, args?: AxiosRequestConfig) {
    return axios.put(`${href}/${type}`).then((response) => response.data);
  },
  post: function (type: typeAPI, args?: AxiosRequestConfig) {
    return axios.post(`${href}/${type}`).then((response) => response.data);
  },
  delete: function (type: typeAPI, args?: AxiosRequestConfig) {
    return axios.delete(`${href}/${type}`).then((response) => response.data);
  },
};
export default API;
