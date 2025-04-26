import { ERROR_MESSAGES } from "@/constants/errorMessages";
import { regExp } from "@/constants/regExp";

export const validateEmail = (email: string) => {
  if (!email.trim()) return ERROR_MESSAGES.validationMsg.EMPTY_VALUE;
  if (!regExp.email.test(email))
    return ERROR_MESSAGES.validationMsg.EMAIL_FORMAT;
  return "";
};

export const validatePassword = (password: string) => {
  if (!password.trim()) return ERROR_MESSAGES.validationMsg.EMPTY_VALUE;
  if (!regExp.password.test(password))
    return ERROR_MESSAGES.validationMsg.PASSWORD_WEAK;
  return "";
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
) => {
  if (!confirmPassword.trim()) return ERROR_MESSAGES.validationMsg.EMPTY_VALUE;
  if (password !== confirmPassword)
    return ERROR_MESSAGES.validationMsg.PASSWORD_MISMATCH;
  return "";
};

export const validateNickname = (nickname: string) => {
  if (!nickname.trim()) return ERROR_MESSAGES.validationMsg.EMPTY_VALUE;
  if (!regExp.nickname.test(nickname))
    return ERROR_MESSAGES.validationMsg.NICKNAME_WEAK;
  return "";
};
