import React from "react";

import styles from "./StatItem.module.css";

export default ({ label, stat, children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.label}>{label}</div>
      <div className={styles.stat}>{children ? children : stat}</div>
    </div>
  );
};
