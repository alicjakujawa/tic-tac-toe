export default function(player1Score, player2Score) {
   return player1Score === 3
      || player2Score === 3
      || player1Score + player2Score === 9;
};
