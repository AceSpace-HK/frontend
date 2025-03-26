"use client";

import Image from "next/image";
import styles from "@styles/main/Hero.module.scss";
import { useRouter } from "next/navigation";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import Button from "../common/Button";
import { useState } from "react";

export default function Hero() {
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
        <h1 className={styles.headline}>
          Find where and with whom to play Tennis
        </h1>
        <p className={styles.subheadline}>
          Book nearby courts and matches instantly.
        </p>

        <form className={styles.searchBar}>
          <input type="text" placeholder="Address, club name, city..." />
          <select>
            <option value="tennis">Tennis</option>
            <option value="padel">Padel</option>
          </select>
          <input type="date" />
          <input type="time" />
          <button type="submit">Search</button>
        </form>
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
}
