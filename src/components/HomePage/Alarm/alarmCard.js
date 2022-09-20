import React from "react";
import styles from "../../../styles/alarm/MainCard.module.css";

const alarmCard = () => {
  return (
    <section className={styles.mainCard}>
      <div className={`${styles.coll} ${styles.titleCard}`}>
        <h1>New to Udemy? Lucky you.</h1>
        Courses start at E£169.99. Get your new-student offer before it expires.
      </div>
      <img
        className={styles.coll}
        src={require("../../../imges/img.png")}
        alt="Card Cover"
      />
    </section>
  );
};

export default alarmCard;
