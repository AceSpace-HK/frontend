import { loginApi, signUpApi } from "@/api/authApi";
import { useState } from "react";

interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
}

interface LoginData {
  email: string;
  password: string;
}

const useAuth = () => {
  const signUp = async ({
    email,
    password,
    confirmPassword,
    nickname,
  }: SignupData) => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return { success: false };
    }
    try {
      const response = await signUpApi({ email, password, nickname });
      if (response.data.code === 201) {
        alert("회원가입이 완료되었습니다.");
        return { success: true };
      } else {
        alert(response.data.message || "회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
    return { success: false };
  };

  const login = async ({ email, password }: LoginData) => {
    try {
      const response = await loginApi({ email, password });
      if (response.data.code === 200) {
        alert("로그인 성공!");
        console.log(response.data);
        const token = response.data.token;
        return { success: true };
      } else {
        alert(response.data.message || "로그인 실패");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("로그인 중 오류가 발생했습니다.");
    } finally {
    }
    return { success: false };
  };

  return { signUp, login };
};

export default useAuth;
