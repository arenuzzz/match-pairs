import React, { Component } from "react";

import styles from "./Tile.module.css";

export default class Tile extends Component {
  handleReveal = () => {
    const { id, onReveal, isRevealed, isLocked, isPairFound } = this.props;

    !isPairFound && !isLocked && !isRevealed && onReveal(id);
  };

  render() {
    const {
      width,
      height,
      photoSrc,
      isPairFound,
      isRevealed,
      isLocked
    } = this.props;

    return (
      <div
        className={isLocked ? styles.lockedTile : styles.tile}
        onClick={this.handleReveal}
        style={{ width, height }}
      >
        {isRevealed || isPairFound ? (
          <img src={photoSrc} className={styles.img} alt="#" />
        ) : null}
      </div>
    );
  }
}
