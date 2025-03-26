import { useState } from "react";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";
import useAuth from "@/hooks/useAuth";
import { regExp } from "@/constants/regExp";
import { ERROR_MESSAGES } from "@/constants/errorMessages";

interface LoginModalProps {
  isOpen: boolean;
  isFull: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    const response = await login({
      email,
      password,
    });
    if (response.success) {
      setEmail("");
      setPassword("");
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Login</h2>

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button theme="secondary" onClick={handleLogin} isFull={true}>
        Login
      </Button>
    </Modal>
  );
};

export default LoginModal;
