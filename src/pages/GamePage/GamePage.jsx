import React, { Component } from "react";
import { connect } from "react-redux";

import { startGame, closeTiles } from "actions";

import GameBoard from "containers/GameBoard";
import Stats from "components/Stats";

class GamePage extends Component {
  componentDidMount() {
    this.props.startGame({ rows: 4, cols: 4 });
    setTimeout(() => {
      this.props.closeTiles();
    }, 5000);
  }

  render() {
    return (
      <div>
        <GameBoard />
        <Stats />
      </div>
    );
  }
}

export default connect(
  null,
  { startGame, closeTiles }
)(GamePage);
