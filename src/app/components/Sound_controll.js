import React, { useEffect, useState } from "react";
import styles from "./css/Sound_controll.module.css";

export default function SoundControll() {
  // State to manage sound control and sound effects
  const [isSoundOn, setSoundOn] = useState(true);
  const [isSoundEffectOn, setSoundEffectOn] = useState(true);

  // Function to toggle sound control
  const toggleSound = (e) => {
    e.preventDefault();
    // setSoundOn((prev) => !prev);
    setSoundOn(!isSoundOn);
    localStorage.setItem("soundOn", JSON.stringify(!isSoundOn));
  };

  // Function to toggle sound effects
  const toggleSoundEffect = (e) => {
    e.preventDefault();
    // setSoundEffectOn((prev) => !prev);
    setSoundEffectOn(!isSoundEffectOn);
    localStorage.setItem("soundEffectOn", JSON.stringify(!isSoundEffectOn));
  };

  useEffect(() => {
    const storedSoundState = localStorage.getItem("soundOn");
    if (storedSoundState !== null) {
      setSoundOn(JSON.parse(storedSoundState));
    }
    console.log(storedSoundState);

    const storedSoundEffectState = localStorage.getItem("soundEffectOn");
    if (storedSoundEffectState !== null) {
      setSoundEffectOn(JSON.parse(storedSoundEffectState));
    }
    console.log(storedSoundEffectState);
  }, []);

  return (
    <div className={`${styles.soundControl}`}>
      <button
        className={`${!isSoundOn && styles.dark}`}
        onClick={toggleSound}
      >
        SOUND EFFECTS
        {isSoundOn
          ? <img src="/soundOn.png " alt="soundOn" />
          : <img src="/soundOff.png" alt="soundOff" />}
      </button>

      <button
        className={`${!isSoundEffectOn && styles.dark}`}
        onClick={toggleSoundEffect}
      >
        MUSIC
        {isSoundEffectOn
          ? <img src="/soundOn.png " alt="soundOn" />
          : <img src="/soundOff.png" alt="soundOff" />}
      </button>
    </div>
  );
}
