"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import GradientBall from "../components/GradientBall";

export default function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const loadTimeline = gsap.timeline();
    loadTimeline
      .to(".signin", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.inOut",
      })
      .to(".signin", {
        duration: 0.2,
        opacity: 0.3,
      }, "-=0.3")
      .to(".signin", {
        duration: 0.2,
        opacity: 1,
      }, "-=0.1")
      .to(".signin", {
        duration: 0.2,
        opacity: 0.5,
      })
      .to(".signin", {
        duration: 0.2,
        opacity: 1,
      });
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();

    gsap.to(".signin", {
      duration: 1,
      delay: 0.2,
      clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      ease: "power2.inOut",
      onComplete: () => {
        console.log("Email:", userName);
        console.log("Password:", password);
        // temp
      },
    });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    gsap.to(".signup", {
      duration: 1,
      delay: 0.2,
      clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      ease: "power2.inOut",
      onComplete: () => {
        console.log("Email:", userName);
        console.log("Password:", password);

        // temp
      },
    });
  };

  const handelGoToSignUp = (e) => {
    const tl = gsap.timeline();
    tl
      .to(".signin", {
        duration: 1,
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        ease: "power2.inOut",
      })
      .to(".signup", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.inOut",
      });
  };

  const handelGoToSignIn = (e) => {
    const tl = gsap.timeline();
    tl
      .to(".signup", {
        duration: 1,
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        ease: "power2.inOut",
      })
      .to(".signin", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.inOut",
      });
  };

  return (
    <div className={styles.body}>
      <GradientBall />
      <div className={`${styles.loginCon} signin`}>
        <div className={styles.faketopBorder}></div>
        <h1>WELCOME ABOARD</h1>
        <form className={styles.form} onSubmit={handleSignIn}>
          <label>
            USERNAME
            <input
              type="string"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            PASSWORD
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Sign In</button>
        </form>
        <button
          onClick={handelGoToSignUp}
          className={styles.signupBtn}
        >
          Sign Up
        </button>
        <div className={styles.fakebottomBorder}></div>
      </div>

      <div className={`${styles.loginCon} signup`}>
        <div className={styles.faketopBorder}></div>
        <h1>OHOH!OH WELCOME</h1>
        <form className={styles.form} onSubmit={handleSignUp}>
          <label>
            USERNAME
            <input
              type="string"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            PASSWORD
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <button
          onClick={handelGoToSignIn}
          className={styles.signupBtn}
        >
          Sign In
        </button>
        <div className={styles.fakebottomBorder}></div>
      </div>
    </div>
  );
}
