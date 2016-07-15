import { SWITCH_PLAYER, MAKE_MOVE } from '../constants/ActionTypes';

import { default as Board } from '../lib/Board';

function newGame() {
  return {
  	board: Board.newGameBoard,
  };
}

export default function game(state = newGame(), action) {
  const handlers = {

  };

  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
}

export function getGame(state) {
  const { board }  = state.game;

  return { board }
}
