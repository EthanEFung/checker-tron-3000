class Move {
  constructor() {
    this.current = null;
    this.desired = null;
  }
}

function createBoardController() {
  let $board;
  if (document.getElementById("board")) {
    $board = document.getElementById("board");
    while ($board.firstChild) {
      $board.removeChild($board.firstChild);
    }
  } else {
    $board = document.createElement("tbody");
    $board.setAttribute("id", "board");
  }
  return $board;
}

function createSqController(sq) {
  const $sq = document.createElement("td");
  $sq.setAttribute("class", "square");
  $sq.setAttribute("row", sq.row);
  $sq.setAttribute("col", sq.col);

  $sq.addEventListener("dragstart", e => {
    console.log(sq);
    game.current = sq;
  });

  $sq.addEventListener("dragover", e => {
    e.preventDefault();
  });

  $sq.addEventListener("drop", e => {
    game.desired = sq;
  });
  return $sq;
}

function createPieceController(piece, board) {
  const $piece = document.createElement("span");
  $piece.setAttribute("draggable", true);
  $piece.setAttribute("class", "piece");
  $piece.textContent = piece.side;
  // $piece.setAttribute('src', `assets/${piece.side}.png`)

  $piece.addEventListener("dragend", e => {
    piece.move(game.current, game.desired, board);
    renderView(board);
  });
  return $piece;
}
