import React from "react";

import GameMovesCount from "containers/GameMovesCount";
import GamePairsFound from "containers/GamePairsFound";
import GameTimer from "containers/GameTimer";

import styles from "./Stats.module.css";

export default () => {
  return (
    <div className={styles.root}>
      <GameMovesCount />
      <GamePairsFound />
      <GameMovesCount />
      <GameTimer />
    </div>
  );
};
