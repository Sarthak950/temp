"use client";
import { useEffect, useState } from "react";

import TopNavBar from "../components/TopNavBar";
import GradientBall from "../components/GradientBall";
import LeftNavBar from "../components/LeftNavBar";
import Sound_controll from "../components/Sound_controll";
import BottomNav from "../components/BottomNav";

import ProtectedRoute from "@/utils/auth";

export default function Page() {
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
    setLevel(48);
    setCoinsAwarded(1425);
    setUserName("Luz Wintheiser");
  }, []);
  return (
    <>
      <ProtectedRoute>
        <TopNavBar level={level} coinsAwarded={coinsAwarded} />
        <GradientBall />
        <Sound_controll />
        <BottomNav />
        <LeftNavBar />
      </ProtectedRoute>
    </>
  );
}
