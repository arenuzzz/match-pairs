export const START_GAME = "START_GAME";

export const startGame = () => ({
  type: START_GAME,
  rows: 4,
  cols: 8
});


export const REVEAL_TILE = "REVEAL_TILE";

export const revealTile = tileId => ({
  type: REVEAL_TILE,
  tileId
});
