import { useState } from "react";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";
import useAuth from "@/hooks/useAuth";
import { regExp } from "@/constants/regExp";
import { ERROR_MESSAGES } from "@/constants/errorMessages";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  isFull: boolean;
}

const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
    nickname?: string;
  }>({});

  const { signUp } = useAuth();

  const validateField = (field: string, value: string) => {
    let error = "";

    if (field === "email") {
      if (!value.trim()) {
        error = ERROR_MESSAGES.validationMsg.EMPTY_VALUE;
      } else if (!regExp.email.test(value)) {
        error = ERROR_MESSAGES.validationMsg.EMAIL_FORMAT;
      }
    }

    if (field === "password") {
      if (!value.trim()) {
        error = ERROR_MESSAGES.validationMsg.EMPTY_VALUE;
      } else if (!regExp.password.test(value)) {
        error = ERROR_MESSAGES.validationMsg.PASSWORD_WEAK;
      }
    }

    if (field === "confirmPassword") {
      if (!value.trim()) {
        error = ERROR_MESSAGES.validationMsg.EMPTY_VALUE;
      } else if (value !== password) {
        error = ERROR_MESSAGES.validationMsg.PASSWORD_MISMATCH;
      }
    }

    if (field === "nickname") {
      if (!value.trim()) {
        error = ERROR_MESSAGES.validationMsg.EMPTY_VALUE;
      } else if (!regExp.nickname.test(value)) {
        error = ERROR_MESSAGES.validationMsg.NICKNAME_WEAK;
      }
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const validateAllFields = () => {
    const newErrors: {
      email?: string;
      password?: string;
      confirmPassword?: string;
      nickname?: string;
    } = {};

    if (!regExp.email.test(email))
      newErrors.email = ERROR_MESSAGES.validationMsg.EMAIL_FORMAT;
    if (!regExp.password.test(password))
      newErrors.password = ERROR_MESSAGES.validationMsg.PASSWORD_WEAK;
    if (password !== confirmPassword)
      newErrors.confirmPassword =
        ERROR_MESSAGES.validationMsg.PASSWORD_MISMATCH;
    if (!regExp.nickname.test(nickname))
      newErrors.nickname = ERROR_MESSAGES.validationMsg.NICKNAME_WEAK;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validateAllFields()) return;

    const response = await signUp({
      email,
      password,
      confirmPassword,
      nickname,
    });

    if (response.success) {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setNickname("");
      setErrors({});
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Sign Up</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => validateField("email", email)}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => validateField("password", password)}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <Input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onBlur={() => validateField("confirmPassword", confirmPassword)}
      />
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}

      <Input
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        onBlur={() => validateField("nickname", nickname)}
      />
      {errors.nickname && <p className="error">{errors.nickname}</p>}

      <Button theme="tertiary" isFull={true} onClick={handleSignUp}>
        Sign up
      </Button>
    </Modal>
  );
};

export default SignupModal;
