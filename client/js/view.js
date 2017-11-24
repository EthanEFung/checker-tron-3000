const game = new Game(8);
game.initializeGame();

function renderView(board) {
  const $board = createBoardController();
  document.body.appendChild($board);
  for (let row of board) {
    const $row = document.createElement("tr");
    $board.appendChild($row);
    for (let sq of row) {
      const $sq = createSqController(sq);
      $row.appendChild($sq);
      if (sq.piece) {
        const $piece = createPieceController(sq.piece, board);
        $sq.appendChild($piece);
      }
    }
  }
}

window.onload = () => {
  renderView(game.board);
};
