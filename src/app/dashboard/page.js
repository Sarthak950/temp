"use client";
import { useEffect, useState } from "react";

import TopNavBar from "../components/TopNavBar";
import GradientBall from "../components/GradientBall";
import LeftNavBar from "../components/LeftNavBar";
import Quests from "../components/Quests";
import Sound_controll from "../components/Sound_controll";
import BottomNav from "../components/BottomNav";

import ProtectedRoute from "@/utils/auth";

import styles from "./page.module.css";

import testData from "../../../public/test.json";

export default function Dashboard() {
  const [userName, setUserName] = useState("");
  const [level, setLevel] = useState(0);
  const [coinsAwarded, setCoinsAwarded] = useState(0);
  const [whitelist, setWhitelist] = useState(1);
  const [whitelist2, setWhitelist2] = useState(1);

  const [time, setTime] = useState();
  const [profilePicLink, setProfilePicLink] = useState("");

  const [musicState, setMusicState] = useState();
  const [soundEffect, setSoundEffect] = useState();

  const [quests, setQuests] = useState([]);

  useEffect(() => {
    setQuests(testData.quests || []);
  });

  useEffect(() => {
    setLevel(48);
    setCoinsAwarded(1425);
    setUserName("Luz Wintheiser");
  }, []);

  return (
    <>
      <ProtectedRoute>
        <GradientBall />
        <Sound_controll />
        <TopNavBar level={level} coinsAwarded={coinsAwarded} />
        <div className={styles.bodyCon}>
          <LeftNavBar
            profilePicLink={profilePicLink}
            whitelist={whitelist}
            userName={userName}
          />
          <div className={styles.questCon}>
            <div className={styles.questHeadingCon}>
              <h1 className={styles.questHeading}>
                you want to contribute? please feel free to pickup the task
                that<br />
                excites you and get more xp in return to get in game
                collectibles
              </h1>
              <h2 className={styles.questCaption}>
                Artwork generated with midjourney
              </h2>
            </div>
            <div className={styles.quests}>
              {quests.map((quest, index) => (
                <Quests
                  key={index}
                  quest={quest}
                />
              ))}
            </div>
          </div>
        </div>
        <BottomNav />
      </ProtectedRoute>
    </>
  );
}
