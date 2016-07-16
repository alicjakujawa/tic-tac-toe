import actionTypes from '../constants/ActionTypes';

import { default as Board } from '../lib/Board';
import Player from '../lib/Player';
import isEndOfGame from '../lib/isEndOfGame';

function newGame() {
  return {
  	board: Board.newGameBoard,
    currentPlayer: Player.One
  };
}

function switchPlayer(state) {
   const nextPlayer = state.currentPlayer === Player.One
      ? Player.Two
      : Player.One;

   return {
      ...state,
      currentPlayer: nextPlayer
   };
}

function makeMove(state, action) {

   const newBoard = state.currentPlayer === Player.Computer ?
    Board.makeVirtualMove(state.board, state.currentPlayer) :
    Board.makeMove(state.board, action.row, action.col, state.currentPlayer);

   if (newBoard !== state.board) {
      const score = Board.getScore(newBoard);

      if (!isEndOfGame(score.player1, score.computer)) {
         const nextPlayer = state.currentPlayer === Player.One
            ? Player.Computer
            : Player.One;

         return {
            ...state,
            board: newBoard,
            currentPlayer: nextPlayer
         };
      }

      return {
         ...state,
         board: newBoard
      };
   }

   return state;
}

export default function game(state = newGame(), action) {
  const handlers = {
    [actionTypes.SWITCH_PLAYER]: switchPlayer,
    [actionTypes.MAKE_MOVE]: makeMove
  };

  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
}

export function getGame(state) {
  const game  = state.game;
  const score = Board.getScore(game.board);

  return { ...game, score }
}
