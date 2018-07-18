import React, { Component } from "react";

import styles from "./Tile.module.css";

export default class Tile extends Component {
  handleReveal = () => {};

  render() {
    const { width, height, photoSrc, isFind = true } = this.props;

    return (
      <div
        className={isFind ? styles.tile : styles.tile_closed}
        onClick={this.handleReveal}
        style={{ width, height }}
      >
        {isFind && <img src={photoSrc} className={styles.img} alt="#" />}
      </div>
    );
  }
}
