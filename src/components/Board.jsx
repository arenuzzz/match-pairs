import React from "react";

import Tile from "./Tile.jsx";

import styles from "./Board.module.css";

export default props => {
  return (
    <div className={styles.base}>
      <div className={styles.row}>
        <Tile />
        <Tile />
        <Tile />
      </div>
      <div className={styles.row}>
        <Tile />
        <Tile />
        <Tile />
      </div>
      <div className={styles.row}>
        <Tile />
        <Tile />
        <Tile />
      </div>
    </div>
  );
};
