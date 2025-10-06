import axios from "axios";
import Cookies from "js-cookie";
// import { AuthContext } from "@/context/AuthContext";
import { notify } from "@/utils/tostify";

// const { accessToken, setAccessToken } = AuthContext();

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
    const token = Cookies.get("access_token");
    // const token = accessToken;

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
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.status == 401) {
      const messageError = error.response.data.message || "";
      notify("error", messageError);

      Cookies.remove("access_token");
      // open modal login
      // dispatch({ type: "OPEN_LOGIN" });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
