import React from "react";
import { Link } from "react-router-dom";

const styles = {
  startLink: { fontSize: "larger" }
};
export default () => (
  <Link to="/game" style={styles.startLink}>
    Start game
  </Link>
);
