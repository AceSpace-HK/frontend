import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
