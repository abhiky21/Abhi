import axios from "axios";
import { useAuthStore } from "../store/auth.store.js";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState();
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (typeof error.response === "undefined") {
      error.response = {};
    } else {
      if (typeof error.response.data === "object") {
        if (typeof error.response.data?.message !== "undefined") {
          error.message = error.response.data?.message;
        }
        if (error.response.status === 401) {
          const { removeToken, setUser } = useAuthStore.getState();
          removeToken();
          setUser(null);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
