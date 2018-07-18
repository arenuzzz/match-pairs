import React, { Component } from "react";
import { connect } from "react-redux";

import { startGame } from "../actions";

import GameBoard from "./GameBoard";

class GamePage extends Component {
  componentDidMount() {
    this.props.startGame();
  }
  render() {
    return <GameBoard />;
  }
}

export default connect(
  null,
  { startGame }
)(GamePage);
