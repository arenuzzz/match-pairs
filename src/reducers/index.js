import { combineReducers } from "redux-immutable";

import { START_GAME, REVEAL_TILE } from "../actions";

import { startGame, DEFAULT_STATE, revealTile } from "../utils/matchPairs";

const game = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case START_GAME: {
      const { rows, cols } = action;

      return startGame({ rows, cols });
    }
    case REVEAL_TILE: {
      return revealTile(state, action.tileId);
    }

    default:
      return state;
  }
};

export default combineReducers({ game });
