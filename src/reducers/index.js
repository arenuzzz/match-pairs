import { combineReducers } from "redux-immutable";

import {
  START_GAME_REQUEST,
  START_GAME_SUCCESS,
  START_GAME_FAILURE,
  REVEAL_TILE,
  CLOSE_TILES,
  CLEAR_GAME,
  FINISH_GAME
} from "actions";

import {
  initialState,
  startGame,
  revealTile,
  closeTiles,
  finishGame
} from "utils/matchPairs";

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME_REQUEST: {
      return state;
    }
    case START_GAME_SUCCESS: {
      const { rows, cols, minutes, photoIds } = action;
      return startGame(state, { rows, cols, minutes, photoIds });
    }
    case START_GAME_FAILURE: {
      return state;
    }
    case CLEAR_GAME: {
      return initialState;
    }
    case REVEAL_TILE: {
      return revealTile(state, action.tileId, action.closeTiles);
    }
    case CLOSE_TILES: {
      return closeTiles(state);
    }
    case FINISH_GAME: {
      return finishGame(state);
    }
    default:
      return state;
  }
};

export default combineReducers({ game: gameReducer });
