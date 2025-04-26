import { useState } from "react";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";
import useAuth from "@/hooks/useAuth";
import styles from "@styles/layout/signupModal.module.scss";
import ErrorText from "../common/ErrorText";
import {
  validateConfirmPassword,
  validateEmail,
  validateNickname,
  validatePassword,
} from "@/hooks/useValidation";

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
    if (field === "email") error = validateEmail(value);
    if (field === "password") error = validatePassword(value);
    if (field === "confirmPassword")
      error = validateConfirmPassword(password, value);
    if (field === "nickname") error = validateNickname(value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const validateAllFields = () => {
    const newErrors = {
      email: validateEmail(email),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(password, confirmPassword),
      nickname: validateNickname(nickname),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => !err);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setNickname("");
    setErrors({});
  };

  const handleModalClose = () => {
    resetForm();
    onClose();
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
      resetForm();
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
      <div className={styles.wrapper}>
        <h2>Sign Up</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => validateField("email", email)}
        />
        <ErrorText message={errors.email} />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => validateField("password", password)}
        />
        <ErrorText message={errors.password} />

        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={() => validateField("confirmPassword", confirmPassword)}
        />
        <ErrorText message={errors.confirmPassword} />

        <Input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          onBlur={() => validateField("nickname", nickname)}
        />
        <ErrorText message={errors.nickname} />
      </div>
      <div className={styles.btnWrapper}>
        <Button
          className={styles.closeBtn}
          theme="tertiary"
          isFull={true}
          onClick={handleSignUp}
        >
          Sign up
        </Button>
      </div>
    </Modal>
  );
};

export default SignupModal;
