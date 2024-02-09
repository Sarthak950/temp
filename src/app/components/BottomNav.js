import NavComponent from "./NavComponent";
import styles from "./css/BottomNav.module.css";

export default function BottomNav() {
  const data = [
    {
      tittle: "DASHBOARD",
      comment: "YOUR LEADERBOARDS, STATS ETC.",
      page: "/dashboard",
    },
    {
      tittle: "LOGS",
      comment:
        "FOR CODE FUNCTIONAL ANALYSIS AND TESTING PURPOSES.",
      page: "/logs",
    },
    {
      tittle: "ACHIVEMENTS",
      comment: "YOUR LEADERBOARDS, STATS ETC.",
      page: "/achivements",
    },
    {
      tittle: "CREATIONS",
      comment: "WILL TAKE YOU TO THE PAGE OF COMMUNITY CREATIVE CONTENT.",
      page: "/creations",
    },
    {
      tittle: "VAULT",
      comment:
        "This shows all your digital assets",
      page: "/vault",
    },
  ];

  return (
    <div className={styles.navCon}>
      {data.map((item, index) => (
        <NavComponent key={index} {...item} />
      ))}
    </div>
  );
}
