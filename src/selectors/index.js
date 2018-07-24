import { createSelector } from "reselect";
import { List } from "immutable";

export const getGame = state => state.get("game");
export const getGameBoard = createSelector(getGame, game => game.get("board"));
export const getGameCols = createSelector(getGame, game => game.get("cols"));
export const getGameRows = createSelector(getGame, game => game.get("rows"));
export const getGameMovesCount = createSelector(getGame, game =>
  game.get("moves")
);
export const getGameLocked = createSelector(getGame, game =>
  game.get("isLocked")
);

export const getGameBoardView = createSelector(
  getGameBoard,
  getGameCols,
  getGameRows,
  (board, cols) => {
    return board.reduce((rowsList, tile) => {
      const rowIdx = Math.floor(tile.get("id") / cols);
      const row = rowsList.get(rowIdx);

      return row
        ? rowsList.set(rowIdx, row.push(tile))
        : rowsList.push(new List([tile]));
    }, new List());
  }
);
