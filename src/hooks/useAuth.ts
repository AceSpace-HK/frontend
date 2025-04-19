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
      alert("Passwords do not match.");
      return { success: false };
    }
    try {
      const response = await signUpApi({ email, password, nickname });
      if (response.data.code === 201) {
        alert("Sign-up successful.");
        return { success: true };
      } else {
        alert(response.data.message || "Sign-up failed.");
      }
    } catch (error) {
      console.error("Sign-up error:", error);
      alert("An error occurred during sign-up.");
    }
    return { success: false };
  };

  const login = async ({ email, password }: LoginData) => {
    try {
      const response = await loginApi({ email, password });
      if (response.data.code === 200) {
        alert("Login successful!");
        console.log(response.data);
        const token = response.data.token;
        return { success: true };
      } else {
        alert(response.data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
    return { success: false };
  };

  return { signUp, login };
};

export default useAuth;
