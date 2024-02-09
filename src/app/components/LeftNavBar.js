import Image from "next/image";
import "../globals.css";
import styles from "./css/LeftNavBar.module.css";

export default function LeftNavBar(props) {
  const { profilePicLink, whitelist, userName } = props;

  return (
    <div className={styles.leftNavCon}>
      <div className={styles.profileCon}>
        <img
          src={profilePicLink || "/Character 1.png"}
          alt="Profile Picture"
        />
      </div>

      <div className={styles.detailsCon}>
        <div className={styles.nameCon}>
          <h1>USERNAME</h1>
          <h2>{userName || "User Name"}</h2>
        </div>
        <div className={styles.whitelistCon}>
          <h1>Whitelist</h1>
          <h2>{whitelist || "Whitelist"}</h2>
        </div>
        <div className={styles.whitelistCon}>
          <h1>Whitelist</h1>
          <h2>{whitelist || "Whitelist"}</h2>
        </div>
      </div>

      <div className={styles.bottomCon}>
        <h1>MOTTO:</h1>
        <h2>
          EXPERIENCE A FRESH PERSPECTIVE OF ONBOARDING INTO THE FUTURE OF TECH
        </h2>
      </div>
    </div>
  );
}
