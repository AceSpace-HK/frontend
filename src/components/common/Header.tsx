"use client";

import { useState } from "react";
import styles from "@styles/common/header.module.scss";
import Button from "./Button";
import { useRouter } from "next/navigation";
import SignupModal from "../main/SignupModal";
import LoginModal from "../main/LoginModal";

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
      <LoginModal
        isOpen={isLoginOpen}
        isFull={true}
        onClose={() => setIsLoginOpen(false)}
      />

      {/* 회원가입 모달 */}
      <SignupModal
        isOpen={isSignupOpen}
        isFull={true}
        onClose={() => setIsSignupOpen(false)}
      />
    </header>
  );
};

export default Header;
