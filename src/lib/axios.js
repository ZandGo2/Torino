import axios from "axios";
import { notify } from "@/utils/tostify";

const axiosInstance = axios.create({
  // baseURL: process.env.BASE_URL,
  baseURL: "http://localhost:6500",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const { data } = await axios.post(
          "http://localhost:6500/auth/refresh-token",
          {
            refreshToken,
          }
        );

        localStorage.setItem("accessToken", data.accessToken);

        originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;

        return axiosInstance(originalRequest);
      } catch (err) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        notify("error", "نشست شما منقضی شده است، لطفاً دوباره وارد شوید");
        return Promise.reject(err);
      }
    }

    if (error.response.status === 403) {
      notify("error", error.response.data.message);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
