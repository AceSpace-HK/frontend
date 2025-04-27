"use client";

import Image from "next/image";
import styles from "@styles/main/MainTopSection.module.scss";
import SignupModal from "../layout/SignupModal";
import LoginModal from "../layout/LoginModal";
import { useState } from "react";
import MainSearch from "./MainSearch";
import { useRouter } from "next/navigation";
import Header from "../layout/Header";

const MainTopSection = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.hero}>
      <Image
        src="/tennis-courts-victoria-park.jpg"
        alt="tennis court"
        fill
        className={styles.heroImage}
        priority
      />

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
