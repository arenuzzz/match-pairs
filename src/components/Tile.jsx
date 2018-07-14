import React, { Component } from "react";

import styles from "./Tile.module.css";

export default class Tile extends Component {
  handleReveal = () => {};

  render() {
    console.log(styles.tile);
    return <div className={styles.tile} onClick={this.handleReveal} />;
  }
}
