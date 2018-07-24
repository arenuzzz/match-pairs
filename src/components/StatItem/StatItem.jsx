import React from "react";

import styles from "./StatItem.module.css";

export default ({ label, stat }) => {
  return (
    <div className={styles.root}>
      <div className={styles.label}>{label}</div>
      <div className={styles.stat}>{stat}</div>
    </div>
  );
};
