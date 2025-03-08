import axios from "@/axios/axios";

interface SignupData {
  email: string;
  password: string;
  nickname: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const signUpApi = async (data: SignupData) => {
  return axios.post("/api/users/signup", data);
};

export const loginApi = async (data: LoginData) => {
  return axios.post("/api/users/login", data);
};
