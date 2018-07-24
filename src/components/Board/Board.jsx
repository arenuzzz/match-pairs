import React from "react";

import Tile from "components/Tile";

import styles from "./Board.module.css";

export default ({ board, onReveal, isLocked }) => {
  return (
    <div className={styles.base}>
      {board.map((row, idx) => (
        <div key={idx} className={styles.row}>
          {row.map(tile => (
            <Tile
              key={tile.get("id")}
              id={tile.get("id")}
              photoSrc={tile.getIn(["photo", "src"])}
              width={tile.getIn(["photo", "width"])}
              height={tile.getIn(["photo", "height"])}
              isPairFound={tile.get("isPairFound")}
              isRevealed={tile.get("isRevealed")}
              onReveal={onReveal}
              isLocked={isLocked}
            />
          ))}
        </div>
      ))}
      <div className={styles.row} />
    </div>
  );
};
