import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.11:3305/api/",
});