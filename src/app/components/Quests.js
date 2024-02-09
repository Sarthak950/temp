// "use client"
import styles from "./css/quest.module.css";

export default function Quests(props) {
  const { quest } = props;

  const customStyles = {
    backgroundColor: quest.color,
  }

  const border = {
    borderLeft: `3px solid ${quest.color}`
  }

  return (
    <div style={border} className={styles.questCon}>
      <h1 style={customStyles} className={`${styles.questType}`}>{quest.type}</h1>


      <h1 className={styles.questHeading}>QUEST NAME</h1>
      <h1 className={styles.questName}>{quest.name}</h1>

      <h1 className={styles.goal}>GOAL</h1>
      <h1 className={styles.questGoal}>{quest.goal}</h1>

      <h1 className={styles.rewards}>REWARDS</h1>
      <div className={styles.questRewards}>
        <div className={styles.reward1}>
          <img src="/reward1.png" />
          <p className={styles.rewardPoints}>+{quest.rewards_1}</p>
        </div>
        <div className={styles.reward2}>
          <img src="/reward2.png" />
          <p className={styles.rewardPoints}>+{quest.rewards_2}</p>
        </div>
      </div>
    </div>
  );
}
