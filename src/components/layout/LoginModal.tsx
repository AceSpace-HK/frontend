import { useState } from "react";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";
import useAuth from "@/hooks/useAuth";
import { validateEmail, validatePassword } from "@/hooks/useValidation";
import ErrorText from "../common/ErrorText";
import styles from "@styles/layout/signupModal.module.scss";

interface LoginModalProps {
  isOpen: boolean;
  isFull: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const { login } = useAuth();

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setErrors({});
  };

  const handleModalClose = () => {
    resetForm();
    onClose();
  };

  const validateField = (field: string, value: string) => {
    let error = "";
    if (field === "email") error = validateEmail(value);
    if (field === "password") error = validatePassword(value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const validateAllFields = () => {
    const newErrors = {
      email: validateEmail(email),
      password: validatePassword(password),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => !err);
  };

  const handleLogin = async () => {
    if (!validateAllFields()) return;
    const response = await login({ email, password });
    if (response.success) {
      resetForm();
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Login</h2>
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
      </div>
      <div className={styles.btnWrapper}>
        <Button
          className={styles.closeBtn}
          theme="tertiary"
          onClick={handleLogin}
          isFull={true}
        >
          Login
        </Button>
      </div>
    </Modal>
  );
};

export default LoginModal;
