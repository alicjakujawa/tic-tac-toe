import { SWITCH_PLAYER, MAKE_MOVE } from '../constants/ActionTypes';

export function switchPlayer() {
  return {
    type: SWITCH_PLAYER
  };
}

export function makeMove(row, col) {
  return {
    type: MAKE_MOVE,
    row,
    col
  };
}
