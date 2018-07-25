import { Map, List, fromJS } from "immutable";

import { setPhotoPairs } from "utils/photos";

export const initialState = fromJS({
  rows: 2,
  cols: 2,
  board: [],
  isLocked: true,
  lastTileId: null,
  time: 0,
  moves: 0
});

const size = {
  width: 80,
  height: 80
};

export const startGame = (game, params) => {
  return game
    .set("rows", params.rows)
    .set("cols", params.cols)
    .set("time", params.minutes)
    .set("board", generateBoard(params));
};

export const finishGame = game => {
  return game.set("isLocked", true);
};

export const revealTile = (game, tileId, closeTiles) => {
  const lastTileId = game.get("lastTileId");

  const lastTilePhotoId = game.getIn(["board", lastTileId, "photo", "id"]);
  const tilePhotoId = game.getIn(["board", tileId, "photo", "id"]);

  const updatedGame = game
    .setIn(["board", tileId, "isRevealed"], true)
    .set("moves", game.get("moves") + 1);

  if (lastTileId !== null) {
    if (lastTilePhotoId === tilePhotoId) {
      return updatedGame
        .setIn(["board", tileId, "isPairFound"], true)
        .setIn(["board", lastTileId, "isPairFound"], true)
        .set("lastTileId", null);
    } else {
      closeTilesWithTimeout(closeTiles);
      return updatedGame.set("isLocked", true);
    }
  }
  return updatedGame.set("lastTileId", tileId);
};

function closeTilesWithTimeout(closeTiles) {
  setTimeout(() => {
    closeTiles();
  }, 500);
}

export function closeTiles(game) {
  const newBoard = game.get("board").map(tile => tile.set("isRevealed", false));
  return game
    .set("board", newBoard)
    .set("isLocked", false)
    .set("lastTileId", null);
}

function generateBoard({ rows, cols, photoIds }) {
  const tile = Map({ isPairFound: false, isRevealed: true });
  const board = repeat(rows * cols, tile)
    .map(tile => tile.set("photo", fromJS(setPhotoPairs(size, photoIds))))
    .sort(() => Math.random() - 0.4)
    .map((tile, id) => tile.set("id", id));
  return board;
}

function repeat(n, item) {
  const list = [];
  while (n--) {
    list.push(item);
  }
  return List(list);
}
