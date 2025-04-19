"use client";

import Image from "next/image";
import styles from "@styles/main/MainTopSection.module.scss";
import { useRouter } from "next/navigation";
import SignupModal from "../layout/SignupModal";
import LoginModal from "../layout/LoginModal";
import Button from "../common/Button";
import { useState } from "react";
import MainSearch from "./MainSearch";

const MainTopSection = () => {
  const router = useRouter();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div className={styles.hero}>
      <Image
        src="/tennis-courts-victoria-park.jpg"
        alt="tennis court"
        fill
        className={styles.heroImage}
        priority
      />

      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.logo} onClick={() => router.push("/")}>
          AceSpace
        </h1>
        <div className={styles.authButtons}>
          <Button onClick={() => setIsLoginOpen(true)}>Login</Button>
          <Button onClick={() => setIsSignupOpen(true)}>Sign Up</Button>
        </div>
      </div>

      {/* Overlay */}
      <div className={styles.overlay}>
        <h1 className={styles.headline}>Find where to play Tennis</h1>
        <p className={styles.subheadline}>
          Book nearby courts and matches instantly.
        </p>
        <MainSearch />
      </div>

      <LoginModal
        isOpen={isLoginOpen}
        isFull={true}
        onClose={() => setIsLoginOpen(false)}
      />
      <SignupModal
        isOpen={isSignupOpen}
        isFull={true}
        onClose={() => setIsSignupOpen(false)}
      />
    </div>
  );
};
export default MainTopSection;
