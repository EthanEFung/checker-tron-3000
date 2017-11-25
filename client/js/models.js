//Checkers is played by two players.

// The board consists of 64 squares, alternating between 32 dark and 32 light squares.

// The board is positioned so that each player has a
//light square on the right side corner closest to him or her.

// Each player begins the game with 12 colored discs.
//(Typically, one set of pieces is black and the other red.)

// Each player places his or her pieces on the 12 dark squares closest to him or her.

// Black moves first.

// Players then alternate moves.

class Game {
  constructor(n) {
    this.board = this.createBoard(n);
    this.turn = "black";
    this.winner = null;
    this.current = null;
    this.desired = null;
  }
  createBoard(n) {
    const board = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        const sq = { piece: null, row: i, col: j, color: null };
        this.colorSq(sq);
        row.push(sq);
      }
      board.push(row);
    }
    return board;
  }
  colorSq(sq) {
    if (sq.color === null) {
      let sum = sq.row + sq.col;
      sq.color = sum % 2 === 1 ? "black" : "white";
    }
  }
  initializeGame() {
    if (this.board.length < 8) {
      throw new Error("render an 8x8 board to place pieces");
    }
    const firstRow = this.board[0];
    const secondRow = this.board[1];
    const thirdRow = this.board[2];

    const thirdToLastRow = this.board[this.board.length - 3];
    const secondToLastRow = this.board[this.board.length - 2];
    const lastRow = this.board[this.board.length - 1];

    this.placeCheckers("white", firstRow, secondRow, thirdRow);
    this.placeCheckers("black", thirdToLastRow, secondToLastRow, lastRow);
  }

  placeCheckers(side, ...rows) {
    rows.forEach(row => {
      row.forEach(sq => {
        if (sq.color === "black") {
          let checker = new Checker(side, sq.row, sq.col);
          sq.piece = checker;
        }
      });
    });
  }
}

class Checker {
  constructor(side, row, col) {
    this.side = side;
    this.row = row;
    this.col = col;
  }
  move(currSq, desiredSq, board) {
    if (
      isSqTwoAway("col", currSq, desiredSq) &&
      isSqTwoAway("row", currSq, desiredSq) &&
      isSqVacant(desiredSq)
    ) {
      let btwnSq = defineBtwnSq(currSq, desiredSq, board);
      if (!isSqVacant(btwnSq)) {
        if (isPieceOpposition(currSq.piece, btwnSq.piece)) {
          capture(btwnSq, board);
        }
        this.advance(currSq, desiredSq);
      }
    } else if (
      isSqOneAway("col", currSq, desiredSq) &&
      isSqOneAway("row", currSq, desiredSq) &&
      isSqVacant(desiredSq)
    ) {
      this.advance(currSq, desiredSq);
    }
  }
  advance(currSq, desiredSq) {
    currSq.piece = null;
    this.row = desiredSq.row;
    this.col = desiredSq.col;
    desiredSq.piece = this;
  }
}

function isSqTwoAway(coord, currSq, desiredSq) {
  return (
    currSq[coord] + 2 === desiredSq[coord] ||
    currSq[coord] - 2 === desiredSq[coord]
  );
}

function isSqOneAway(coord, currSq, desiredSq) {
  return (
    currSq[coord] + 1 === desiredSq[coord] ||
    currSq[coord] - 1 === desiredSq[coord]
  );
}

function defineBtwnSq(currSq, desiredSq, board) {
  let minRow = Math.min(currSq.row, desiredSq.row);
  let minCol = Math.min(currSq.col, desiredSq.col);

  return board[minRow + 1][minCol + 1];
}

function isSqVacant(sq) {
  return sq.piece === null;
}

function capture(sq) {
  sq.piece = null;
}

function isPieceOpposition(currentPiece, questionedPiece) {
  return currentPiece.side !== questionedPiece.side;
}

// module.exports = {
//   Game,
//   Checker,
//   capture,
//   isSqTwoAway,
//   isSqOneAway,
//   defineBtwnSq,
//   isSqVacant
// };
