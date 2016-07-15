import { List } from 'immutable';

const newGameBoard = List(
 [0, 0, 0,
  0, 0, 0,
  0, 0, 0
]);

function makeMove(board, i, j, player) {
  console.log("get move")
}

function makeVirtualMove(board, i, j, player) {
  console.log("get virtual move")
}

function getScore(board) {
  console.log("get score")
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
  getScore
};
