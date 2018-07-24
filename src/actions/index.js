import { CALL_API } from "middlewares/api";

export const START_GAME_REQUEST = "START_GAME_REQUEST";
export const START_GAME_SUCCESS = "START_GAME_SUCCESS";
export const START_GAME_FAILURE = "START_GAME_FAILURE";

export const startGame = ({ rows, cols }) => ({
  rows,
  cols,
  [CALL_API]: {
    types: [START_GAME_REQUEST, START_GAME_SUCCESS, START_GAME_FAILURE]
  }
});

// export const startGame = ({ rows, cols }) => async dispatch => {
//   dispatch({ type: START_GAME_REQUEST });

//   try {
//     const photoIds = await getPhotoList();
//     dispatch({ type: START_GAME_SUCCESS, rows, cols, photoIds });
//   } catch (error) {
//     dispatch({ type: START_GAME_FAILURE, error });
//   }
// };

export const REVEAL_TILE = "REVEAL_TILE";

export const revealTile = tileId => dispatch => {
  dispatch({
    type: REVEAL_TILE,
    tileId,
    closeTiles: () => dispatch(closeTiles())
  });
};

export const CLOSE_TILES = "CLOSE_TILES";

export const closeTiles = () => ({ type: CLOSE_TILES });
