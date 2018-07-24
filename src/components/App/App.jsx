import React from "react";
import routes from "routes";

import styles from "./App.module.css";

export default () => (
  <div className={styles.root}>
    <header className={styles.header}>
      <h1 className={styles.title}>Matching pairs</h1>
    </header>
    <div className={styles.children}>{routes}</div>
  </div>
);
