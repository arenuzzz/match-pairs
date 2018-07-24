import { combineReducers } from "redux-immutable";

import {
  START_GAME_REQUEST,
  START_GAME_SUCCESS,
  START_GAME_FAILURE,
  REVEAL_TILE,
  CLOSE_TILES
} from "actions";

import {
  initialState,
  startGame,
  revealTile,
  closeTiles
} from "utils/matchPairs";

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME_REQUEST: {
      return state;
    }
    case START_GAME_SUCCESS: {
      const { rows, cols, photoIds } = action;
      return startGame(state, { rows, cols, photoIds });
    }
    case START_GAME_FAILURE: {
      return state;
    }
    case REVEAL_TILE: {
      return revealTile(state, action.tileId, action.closeTiles);
    }
    case CLOSE_TILES: {
      return closeTiles(state);
    }
    default:
      return state;
  }
};

export default combineReducers({ game: gameReducer });
