import { List } from 'immutable';
import Player from '../lib/Player';

const newGameBoard = List(
 [0, 0, 0,
  0, 0, 0,
  0, 0, 0
]);

function makeMove(board, i, j, player) {
  if (getStatus(board, i, j) !== Player.None) return board;
  const newBoard = setCell(board, i, j, player);
  return newBoard;
}

function makeVirtualMove(board, player) {
  console.log("get virtual move")
}

function getScore(board) {
  return {
    player: board.count(cell => cell === Player.One),
    computer: board.count(cell => cell === Player.Computer)
  };
}

function getStatus(board, i, j) {
   return board.get(i * 3 + j);
}

function setCell(board, i, j, player) {
   return board.set(i * 3 + j, player);
}

export default {
  newGameBoard,
  makeMove,
  makeVirtualMove,
  getScore,
  getStatus
};
