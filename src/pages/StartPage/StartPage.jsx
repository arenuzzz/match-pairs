import React from "react";
import { Link } from "react-router-dom";

import styles from "./StartPage.module.css";

export default () => (
  <Link to="/game" className={styles.startLink}>
    Start game
  </Link>
);
