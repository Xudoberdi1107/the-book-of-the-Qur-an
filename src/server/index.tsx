import axios from "axios";

export const instance = axios.create({
  baseURL: "http://api.alquran.cloud/v1/",
  timeout: 10000,
});
