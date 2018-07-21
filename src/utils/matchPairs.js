import { Map, List, fromJS } from "immutable";

import { setPhotoPairs } from "./photos";

export const DEFAULT_STATE = fromJS({
  rows: 4,
  cols: 4,
  board: []
});

const size = {
  width: 80,
  height: 80
};

export const startGame = params => {
  const game = fromJS({
    rows: params.rows,
    cols: params.cols,
    board: generateBoard(params)
  });

  return game;
};

export const revealTile = (game, tileId) => {
  return game;
};

function generateBoard({ rows, cols, photoIds }) {
  const tile = Map({ isFinded: false, isRevealed: false });
  const board = repeat(rows * cols, tile)
    .map(tile => tile.set("photo", fromJS(setPhotoPairs(size, photoIds))))
    .sort(() => Math.random() - 0.3)
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
