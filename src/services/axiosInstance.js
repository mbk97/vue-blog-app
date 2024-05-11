import axios from "axios";
import { getFromLocalStorage } from "../utils/userDetails";

const axiosInstance = axios.create({
  baseURL: "https://blog-website-api.vercel.app",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

const onRequest = (request) => {
  const userData = getFromLocalStorage("user-details");
  const token = userData?.token;
  if (request.headers) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  return response;
};

const onResponseError = async (error) => {
  const statusCode = error.response?.status;
  if (statusCode === 401) {
    localStorage.clear();
    window.location.href = "/";
  }
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export { axiosInstance };
