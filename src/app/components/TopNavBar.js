"use client";
import { useEffect, useState } from "react";
import "../globals.css";
import styles from "./css/TopNavBar.module.css";

export default function TopNavBar(props) {
  const { level, coinsAwarded } = props;
  const [time, setTime] = useState();
  const [fakePing, setFakePing] = useState(0);

  const formattedCoins = coinsAwarded.toLocaleString();
  useEffect(() => {
    const intervalId = setInterval(() => {
      const formattedTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(formattedTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFakePing(Math.floor(Math.random() * 100));
    }, 2000);
    return () => clearInterval(intervalId);
  });
  return (
    <nav className={styles.topNav}>
      <div className={styles.leftNav}>
        <div>
          <h1>{level}</h1>
          <h2>LEVEL</h2>
        </div>
        <div>
          <h1>{formattedCoins}</h1>
          <h2>COINS AWARDED</h2>
        </div>
      </div>
      <div className={styles.rightNav}>
        <div>
          <h2>PING: </h2>
          <h1>{fakePing}</h1>
        </div>
        <div>
          <h2>TIME: </h2>
          <h1>{time}</h1>
        </div>
      </div>
    </nav>
  );
}
