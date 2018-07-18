import React, {
  Component
} from "react";
import { connect } from "react-redux";
import Board from "../components/Board";
import { getGameBoardView } from "../selectors";

class GameBoard extends Component {
  render() {
    const { gameBoard } = this.props;
    return <Board board={gameBoard} />;
  }
}

function mapStateToProps(state) {
  return {
    gameBoard: getGameBoardView(state)
  };
}
export default connect(mapStateToProps)(GameBoard);
