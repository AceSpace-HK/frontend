"use client";

import { useState } from "react";
import Modal from "./Modal";
import styles from "@styles/common/header.module.scss";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo} onClick={() => router.push("/")}>
        AceSpace
      </h1>
      <div className={styles.authButtons}>
        <Button onClick={() => setIsLoginOpen(true)}>Login</Button>
        <Button onClick={() => setIsSignupOpen(true)}>Sign Up</Button>
      </div>

      {/* 로그인 모달 */}
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <h2>Login</h2>
        <p>로그인 폼이 들어갈 자리</p>
      </Modal>

      {/* 회원가입 모달 */}
      <Modal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)}>
        <h2>Sign Up</h2>
        <p>회원가입 폼이 들어갈 자리</p>
      </Modal>
    </header>
  );
};

export default Header;
