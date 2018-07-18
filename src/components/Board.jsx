import React from "react";

import Tile from "./Tile";

import styles from "./Board.module.css";

export default props => {
  const { board } = props;
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
            />
          ))}
        </div>
      ))}
      <div className={styles.row} />
    </div>
  );
};
