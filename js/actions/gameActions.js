import actionTypes from '../constants/ActionTypes';


export function switchPlayer() {
  return {
    type: actionTypes.SWITCH_PLAYER
  };
}

export function makeMove(row, col) {
  return {
    type: actionTypes.MAKE_MOVE,
    row,
    col
  };
}
