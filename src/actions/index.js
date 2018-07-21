import { getPhotoList } from "../api";
export const START_GAME = "START_GAME";

export const startGame = () => dispatch => {
  //write request preloader
  //dispatch({})

  getPhotoList().then(data => {
    dispatch({
      type: START_GAME,
      rows: 4,
      cols: 8,
      photoIds: data
    });
  });
};

export const REVEAL_TILE = "REVEAL_TILE";

export const revealTile = tileId => ({
  type: REVEAL_TILE,
  tileId
});
