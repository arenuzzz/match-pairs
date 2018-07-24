import React, { Component } from "react";
import { connect } from "react-redux";

import Board from "components/Board";
import { getGameBoardView, getGameLocked } from "selectors";
import { revealTile } from "actions";

class GameBoard extends Component {
  render() {
    const { gameBoard, revealTile, isLocked } = this.props;
    return (
      <Board board={gameBoard} onReveal={revealTile} isLocked={isLocked} />
    );
  }
}

function mapStateToProps(state) {
  return {
    gameBoard: getGameBoardView(state),
    isLocked: getGameLocked(state)
  };
}

export default connect(
  mapStateToProps,
  { revealTile }
)(GameBoard);
